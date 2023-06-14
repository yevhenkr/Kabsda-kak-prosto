import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogsReducer'
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import  withAuthRedirect  from "../../HOC/WhithAuthRedirect";

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
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(AuthRedirectComponent);

export default DialogsContainer;