import React from "react";
import ProfileInfo from '../Profile/MyPosts/PropfileInfo/PropfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  // debugger
  return <div>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    <MyPostsContainer />
  </div>
}
export default Profile;