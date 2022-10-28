import {
    WhiteArea,
    TextConfirmation,
    Buttonzone,
    Deletebutton,
    Backbutton,
    Modalzone

} from "./style.js"
import { deletePost,deleteHashtags } from "../../services/linkr.js";

export default function DeleteModal({ id, setOpenDelModal, setLoadingFullPage }) {
    const token = localStorage.getItem("linkrUserToken");

    function postDelete() {
        setLoadingFullPage(true)
        const promise = deletePost(token, id)
        promise.catch((err) => {
            console.log(err)
            setOpenDelModal(false)
            setLoadingFullPage(false)
        })
        promise.then((resp) => {
            deleteHashtags(id).then()
            setOpenDelModal(false)
            setLoadingFullPage(false)
        })
    }

    return (
        <WhiteArea>
            <Modalzone>
                <TextConfirmation><p>Are you sure you want
                    to delete this post?</p></TextConfirmation>
                <Buttonzone>
                    <Backbutton onClick={() => { setOpenDelModal(false) }}>No, go back</Backbutton>
                    <Deletebutton onClick={() => { postDelete() }} >Yes, delete it</Deletebutton>
                </Buttonzone>
            </Modalzone>
        </WhiteArea>

    )

}

