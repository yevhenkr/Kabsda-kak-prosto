import React, { useEffect } from 'react';
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profileReducer";
import { useParams } from 'react-router-dom';

function ProfileContainer({ setUserProfile, profile }) {
    const { userId } = useParams();

    useEffect(() => {
        let profileUserId = userId;
        if (!profileUserId) {
            profileUserId = 2;
        }

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileUserId)
            .then(response => {
                setUserProfile(response.data);
            });
    }, [userId, setUserProfile]);

    return <Profile profile={profile} />;
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);