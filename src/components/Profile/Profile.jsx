import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from '../Profile/MyPosts/PropfileInfo/PropfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return <div>
    <ProfileInfo profile={props.profile} />
    <MyPostsContainer />
  </div>
}
export default Profile;