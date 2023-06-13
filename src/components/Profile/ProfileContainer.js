import React, { useEffect } from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profileReducer";
import { useParams } from 'react-router-dom';
import { profileAPI } from '../../api/api';

function ProfileContainer({ setUserProfile, profile }) {
    const { userId } = useParams();

    useEffect(() => {
        let profileUserId = userId;
        if (!profileUserId) {
            profileUserId = 2;
        }

            profileAPI.getUsers(profileUserId)
            .then(data => {
                setUserProfile(data);
            });
    }, [userId, setUserProfile]);

    return <Profile profile={profile} />;
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);