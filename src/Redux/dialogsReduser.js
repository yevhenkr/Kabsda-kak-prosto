const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.dialogsPage.newMessageBody = action.body;
      break;
    case SEND_MESSAGE:
      let body = state.dialogsPage.newMessageBody;
      state.dialogsPage.newMessageBody = '';
      state.dialogsPage.messages.push({ id: 6, message: body });
      break;
    default:
      break;
  }
  return state;
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;
