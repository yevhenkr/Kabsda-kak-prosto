import React from "react";
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogsReducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs
        sendMessageCreator={onSendMessageClick}
        onNewMessageChange={onNewMessageChange}
        dialogsPage={dialogsPage} />
}

export default DialogsContainer;