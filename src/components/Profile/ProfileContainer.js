import React, { useEffect } from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../Redux/profileReducer";
import { useParams } from 'react-router-dom';
import withAuthRedirect from '../../HOC/WhithAuthRedirect'
import { compose } from 'redux';

function ProfileContainer({ profile, getUserProfile}) {
    const { userId } = useParams();
    useEffect(() => {
        let profileUserId = userId;
        if (!profileUserId) {
            profileUserId = 2;
        }
        getUserProfile(profileUserId);
    }, [userId, getUserProfile]);

    return <Profile profile={profile} />;
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getUserProfile })
)(ProfileContainer);