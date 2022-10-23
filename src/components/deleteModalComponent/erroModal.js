import {
    WhiteArea,
    TextConfirmation,
    Buttonzone,
    Backbutton,
    Modalzone

} from "./style.js"
import { useState } from "react";

export default function ErroModal() {
    const { erroInfo, setErroInfo } = useState()

    return (
        erroInfo ?
            <WhiteArea>
                <Modalzone>
                    <TextConfirmation><p>Your post could not be deleted.</p></TextConfirmation>
                    <Buttonzone>
                        <Backbutton onClick={() => { setErroInfo(true) }}>Ok</Backbutton>
                    </Buttonzone>
                </Modalzone>
            </WhiteArea> 
    )
}