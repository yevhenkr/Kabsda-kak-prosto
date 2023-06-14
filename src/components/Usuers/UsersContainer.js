import React from 'react';
import { connect } from "react-redux";
import {
    follow, setCurrentPage, unfollow,
    toggleFollowingProgress, getUsers
} from "../../Redux/usersReducer";
import Users from './Users';
import Preloader from '../../components/common/preloader/Preloader';
import withAuthRedirect from '../../HOC/WhithAuthRedirect';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize); //просто візіваю callBack
    }
    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let withRedirect = withAuthRedirect(UsersContainer);
export default withAuthRedirect(connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers
    }
)(withRedirect));