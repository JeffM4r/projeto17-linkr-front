import { BiRepost } from 'react-icons/bi';
import {
  Button
} from './style'

const iconStyle = {
  color: "white",
  fontSize: "25px",
  cursor: "pointer",
  marginTop: "10px"
};

const ShareButton = () => {
  return (
    <Button>
      <BiRepost style={iconStyle} />
    </Button>
  )
}

export {
  ShareButton
}