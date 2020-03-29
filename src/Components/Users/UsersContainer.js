import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPage, setLoading, setTotalCount, setUsers} from "../../Data/UsersReducer";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

let UsersContainer = connect(mapStateToProps, {setUsers, setTotalCount, setCurrentPage, setLoading})(Users);

export default UsersContainer;