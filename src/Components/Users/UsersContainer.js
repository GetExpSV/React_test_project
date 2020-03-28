import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPageAc, setLoadingAc, setTotalCountAc, setUsers} from "../../Data/UsersReducer";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
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
        },
        setLoading: (loading)=>{
            dispatch(setLoadingAc(loading))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;