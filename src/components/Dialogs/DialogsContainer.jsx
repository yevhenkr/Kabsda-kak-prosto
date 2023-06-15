import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogsReducer'
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import  withAuthRedirect  from "../../HOC/WhithAuthRedirect";
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispathToProps)
)(Dialogs);