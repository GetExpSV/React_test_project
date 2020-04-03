import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {getUser, setCurrentPage, setTotalCount} from "../../Data/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

let UsersContainer = connect(mapStateToProps, {setTotalCount, setCurrentPage, getUser})(Users);

export default UsersContainer;