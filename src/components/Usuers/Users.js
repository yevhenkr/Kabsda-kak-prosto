import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../../src/assets/imges/users.jpg'
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        {pages.map(p => {
            return <span onClick={(e) => { props.onPageChanged(p) }} className={props.currentPage === p && classes.fontBold}>{p}</span>
        })
        }
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} alt="dd" />
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { 
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "891717e9-a501-4f9b-8508-4b240ff784b6"
                                    }}, )
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, { 
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "891717e9-a501-4f9b-8508-4b240ff784b6"
                                    }}, )
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{u.location.country}</div>
                        <div>{u.location.city}</div> */}
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;