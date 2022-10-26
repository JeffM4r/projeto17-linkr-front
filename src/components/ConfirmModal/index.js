import {
  WhiteArea,
  TextConfirmation,
  Buttonzone,
  ConfirmButton,
  Backbutton,
  Modalzone

} from "./style.js"

const ConfirmModal = ({confirmFunct, refuseFunct}) => {
  return (
    <WhiteArea>
      <Modalzone>
        <TextConfirmation>
          Do you want to re-post this link?
        </TextConfirmation>
        <Buttonzone>
          <Backbutton onClick={() => {refuseFunct()}} >No, cancel!</Backbutton>
          <ConfirmButton onClick={() => {confirmFunct()}} >Yes, share!</ConfirmButton>
        </Buttonzone>
      </Modalzone>
    </WhiteArea>
  )
}

export default ConfirmModal;