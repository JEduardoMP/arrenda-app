// React
import React from "react";
import { useState, useEffect } from "react";
// Components
import EditDelete from "./Edit-delete-button";
import Input from "./input";
// CustomHooks
import useFetch from "../customHooks/useFetch";
// Helepers
import { addContact, deleteContact, editeContact } from "../helpers/delete-edit-add";
// Styles
import { ContactsSt } from "../styles/contacts.styles";

const Contacts = () => {
  const data = useFetch("http://localhost:5000/api/v1/contacts");
  const [edit, setEdit] = useState({});
  const [editData, setEditData] = useState({});
  const [adding, setAdding] = useState(false)
  const [newContact, setNewContact] = useState({})

  useEffect(() => {
    let dict = {};
    data?.data?.contacts?.forEach((el, idx) => {
      dict[idx] = false;
    });
    setEdit(dict);
  }, [data]);

  useEffect(() => {
    setNewContact({})
  }, [adding]);

  const handleClick = async (id, isDelete, idx) => {
    if (isDelete) {
      await deleteContact(id);
    } else {
      setEdit({ ...edit, [idx]: true });
    }
  };

  const handleEdit = async (id) => {
    await editeContact(id, editData);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  
  const handleNewUser = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  }

  const postNewUser = () => {
    addContact(newContact)
  }
  return (
    <ContactsSt>
      {adding ? (
        <div className="grid-cont">
        <Input
          label={"firstname"}
          name={"firstname"}
          onChange={handleNewUser}
          type={"text"}
          key={"firstname"}
          required
        />
        <Input
          label={"lastname"}
          name={"lastname"}
          onChange={handleNewUser}
          type={"text"}
          key={"firstname"}
        />
        <Input
          label={"phone"}
          name={"phone"}
          onChange={handleNewUser}
          type={"tel"}
          key={"firstname"}
          required
        />
        <button onClick={() => postNewUser()}>
          Send
        </button>
        <button
          onClick={() => setAdding(false)}
        >
          Cancel
        </button>
      </div>
      ) : (
        <button onClick={() => setAdding(true)}>+ Add new contact</button>
      )}
      {data?.data?.contacts?.map((contact, idx) =>
        edit[idx] ? (
          <div className="grid-cont">
            <Input
              label={"firstname"}
              name={"firstname"}
              onChange={handleChange}
              type={"text"}
              key={"firstname"}
              required
            />
            <Input
              label={"lastname"}
              name={"lastname"}
              onChange={handleChange}
              type={"text"}
              key={"firstname"}
            />
            <Input
              label={"phone"}
              name={"phone"}
              onChange={handleChange}
              type={"tel"}
              key={"firstname"}
              required
            />
            <button key={idx} onClick={() => handleEdit(contact._id)}>
              Send
            </button>
            <button
              key={idx + 1}
              onClick={() => setEdit({...edit, [idx]: false})}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="grid-cont">
            <p key={contact.firstname}>{contact.firstname}</p>
            <p key={contact.lastname}>{contact.lastname}</p>
            <p key={contact.phone}>{contact.phone}</p>
            <EditDelete
              handleClick={handleClick}
              id={contact._id}
              index={idx}
              key={idx}
            />
            <EditDelete
              isDelete={true}
              handleClick={handleClick}
              id={contact._id}
              index={idx}
              key={idx + 1}
            />
          </div>
        )
      )}
    </ContactsSt>
  );
};
export default Contacts;
