// Styles
import { InputSt } from "../styles/input.styles";

const Input = ({type, onChange, label, ...props}) => {
  return(
    <InputSt>
      {label}
      <input type={type} onChange={(e) => onChange(e)} {...props}/>
    </InputSt>
  ) 
};
export default Input;