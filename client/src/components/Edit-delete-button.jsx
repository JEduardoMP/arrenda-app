// React
import React from "react";
// Style
import { EditDeleteSt } from "../styles/edit-delete-button.styles";
const EditDelete = ({isDelete=false, id, handleClick, index}) => {
  return(
    <EditDeleteSt onClick={() => handleClick(id, isDelete, index)} color={isDelete}>
      {isDelete ? 'Delete' : 'Edit'}
    </EditDeleteSt>
  )
};
export default EditDelete;