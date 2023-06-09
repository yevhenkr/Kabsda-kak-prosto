import React from "react";
import Header from "./Header";
import { setAuthUserData } from "../../Redux/authReducer";
import { connect } from "react-redux";
import { headerAPI } from "../../api/api";
class HeaderContainer extends React.Component {
  render() {
    debugger
    headerAPI.getUsers()
    .then(data => {
        if (data.resultCode === 0) {
          this.props.setAuthUserData(data.data);
          // let {id, login, email} = response.data.data; // Или єти две строки
          // this.props.setAuthUserData(id, email, login);
        }
      });
    return (
      <Header {...this.props} />
    )
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);