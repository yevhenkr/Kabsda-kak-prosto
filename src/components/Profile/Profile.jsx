import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from '../Profile/MyPosts/PropfileInfo/PropfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return <div>
    <ProfileInfo />
    <MyPostsContainer store={props.store} 
    />
  </div>
}
export default Profile;