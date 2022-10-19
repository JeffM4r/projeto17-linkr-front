import {
  Input
} from './style';

const InputComponent = ({placeholder, value, setValue, type, required}) => {
  return (
    <Input 
      placeholder={placeholder} 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      required={required}
    />
  )
}

export default InputComponent;