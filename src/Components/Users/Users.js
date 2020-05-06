import React from 'react';
import UserContainer from "./User/UserContainer";
import users_class from './Users.module.css'
import Loader from "../Loader/Loader";
import LoadingOverlay from 'react-loading-overlay'
import Pagination from "./Pagination/Pagination";


class Users extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize);
    }

    onChangeCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUser(page, this.props.pageSize)
    }

    render() {

        let totalPage = Math.ceil(this.props.totalCount / this.props.pageSize);

        /*let page = [];
        for (let i = 1; i <= totalPage; i++) {
            page.push(i);
        }

        let pageArray = page.map(data => {
            return (<div className={users_class.item} onClick={() => {
                this.onChangeCurrentPage(data)
            }}>
                <div className={this.props.currentPage === data && users_class.activePage}>{data}</div>
            </div>)
        })*/

        let usersArray = this.props.users.map(data => <UserContainer key={data.id} id={data.id} followed={data.followed}
                                                                     fullName={data.name}
                                                                     status={data.status}
                                                                     country={"data.location.country"}
                                                                     city={"data.location.city"}
                                                                     photoUrl={data.photos}/>)
        return (
            <div>
                {this.props.isLoading ? <LoadingOverlay active={true} spinner={<Loader/>}> </LoadingOverlay> : null}
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

export default Users;