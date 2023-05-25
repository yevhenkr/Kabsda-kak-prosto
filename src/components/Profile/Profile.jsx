import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from '../Profile/MyPosts/PropfileInfo/PropfileInfo'

const Profile = (props) => {
  return <div>
    <ProfileInfo />
    <MyPosts 
    posts={props.posts} 
    addNewText={props.addNewText}
    addPost={props.addPost}/>
  </div>
}
export default Profile;