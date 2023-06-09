import React from "react";
import Header from "./Header";
import axios from "axios";
import { setAuthUserData } from "../../Redux/authReducer";
import { connect } from "react-redux";
class HeaderContainer extends React.Component {
  render() {
  axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true})
  .then(response => {
    if (response.data.resultCode === 0) {
      this.props.setAuthUserData(response.data.data);
      // let {id, login, email} = response.data.data; // Или єти две строки
      // this.props.setAuthUserData(id, email, login);
    }
  });
    return (
      <Header {...this.props}/>
    )
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);