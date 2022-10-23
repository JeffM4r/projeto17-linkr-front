import {
    WhiteArea,
    TextConfirmation,
    Buttonzone,
    Deletebutton,
    Backbutton,
    Modalzone

} from "./style.js"
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { deletePost } from "../../services/linkr.js";

export default function DeleteModal() {
    const { setOpenModal } = useContext(UserContext)
    const token = localStorage.getItem("linkrUserToken");

    function postDelete() {
        const promise = deletePost(token)
        promise.catch((err) => {
            console.log(err)
            setOpenModal(false)

        })
        promise.then((resp) => {
            setOpenModal(false)
        })
    }

    return (
        <WhiteArea>
            <Modalzone>
                <TextConfirmation><p>Are you sure you want
                    to delete this post?</p></TextConfirmation>
                <Buttonzone>
                    <Backbutton onClick={() => { setOpenModal(false) }}>No, go back</Backbutton>
                    <Deletebutton onClick={() => { postDelete() }} >Yes, delete it</Deletebutton>
                </Buttonzone>
            </Modalzone>
        </WhiteArea>

    )

}

