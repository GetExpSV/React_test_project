import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {getUser, setCurrentPage, setTotalCount} from "../../Data/UsersReducer";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

export default compose(
    connect(mapStateToProps, {setTotalCount, setCurrentPage, getUser})
)(Users)