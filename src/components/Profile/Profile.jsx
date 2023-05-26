import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from '../Profile/MyPosts/PropfileInfo/PropfileInfo'

const Profile = (props) => {
  return <div>
    <ProfileInfo />
    <MyPosts store={props.store} />
  </div>
}
export default Profile;