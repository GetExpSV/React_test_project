import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {getUser, setCurrentPage, setTotalCount} from "../../Data/UsersReducer";
import UserContainer from "./User/UserContainer";
import users_class from './Users.module.css'
import Loader from "../Loader/Loader";
import Pagination from "./Pagination/Pagination";
import {RootState} from '../../Data/Redux-store';


class Users extends React.Component<Props> {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize);
    }

    onChangeCurrentPage = (page: number) => {
        this.props.setCurrentPage(page);
        this.props.getUser(page, this.props.pageSize)
    };

    render() {
        let totalPage = null;
        if (this.props.totalCount && this.props.pageSize)
            totalPage = Math.ceil(this.props.totalCount / this.props.pageSize);

        let usersArray = this.props.users.map(data => <UserContainer key={data.id} id={data.id} followed={data.followed}
                                                                     fullName={data.name}
                                                                     status={data.status}
                                                                     country={"data.location.country"}
                                                                     city={"data.location.city"}
                                                                     photoUrl={data.photos}/>);
        return (
            <div>
                {this.props.isLoading ? <Loader/> : null}
                <div className={users_class.pageItem}>
                    <Pagination currentPage={this.props.currentPage} setCurrentPage={this.onChangeCurrentPage}
                                totalPage={totalPage}/>
                </div>
                <div className={users_class.container}>
                    {usersArray}
                </div>
            </div>
        );
    }
}


let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
};

let connector = connect(mapStateToProps, {setTotalCount, setCurrentPage, getUser});
type Props = ConnectedProps<typeof connector>

export default connector(Users);