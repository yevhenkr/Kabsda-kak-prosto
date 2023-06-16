import React, { useEffect } from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../Redux/profileReducer";
import { useParams } from 'react-router-dom';
import withAuthRedirect from '../../HOC/WhithAuthRedirect'
import { compose } from 'redux';

function ProfileContainer({ profile, status,getStatus, updateStatus, getUserProfile }) {
    const { userId } = useParams();
    useEffect(() => {
        let profileUserId = userId;
        if (!profileUserId) {
            profileUserId = 29231;
        }
        getUserProfile(profileUserId);
        getStatus(profileUserId);
    }, [userId, getUserProfile]);

    return <Profile profile={profile} status={status} updateStatus={updateStatus} />;
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withAuthRedirect
)(ProfileContainer);