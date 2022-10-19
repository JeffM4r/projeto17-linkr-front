import {
  Input
} from './style';

const InputComponent = ({placeholder, value, setValue}) => {
  return (
    <Input 
      placeholder={placeholder} 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default InputComponent;