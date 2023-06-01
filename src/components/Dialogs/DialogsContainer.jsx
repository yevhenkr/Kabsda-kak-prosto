import React from "react";
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogsReducer'
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispathToProps = (dispatch) => {
    return {
        onNewMessageChange:(body)=>{
            let action = updateNewMessageBodyCreator(body);
            dispatch(action)
        },
        sendMessageCreator: () =>{
            dispatch(sendMessageCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;