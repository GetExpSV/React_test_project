import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPageAc, setTotalCountAc, setUsers} from "../../Data/UsersReducer";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAc(totalCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAc(currentPage))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;