import { deletePin } from "../../utilities/pin-api";
import { useState } from "react";


export default function DeletePin() {
    const [deletePin, setDeletePin] = useState('');

    const onClick = async (evt) => {
        const deleteSelectedPin = await deletePin(/*id*/);
        setDeletePin(
            ...deletePin
        )
    }

    return (
        <button onClick={onClick}>Delete</button>
    )
}