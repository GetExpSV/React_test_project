import React from 'react';
import UserContainer from "./User/UserContainer";
import users_class from './Users.module.css'
import * as axios from 'axios';
import Loader from "../Loader/Loader";
import LoadingOverlay from 'react-loading-overlay'



class Users extends React.Component{

    componentDidMount() {
        this.props.setLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>
        {
            this.props.setLoading(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount/3);
        });
    }

    onChangeCurrentPage = (page) => {
        this.props.setLoading(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUsers(response.data.items);
            this.props.setLoading(false);
        })
    }

    render(){

        let totalPage = Math.ceil(this.props.totalCount / this.props.pageSize);

        let page = [];
        for(let i = 1; i <= totalPage; i++)
        {
            page.push(i);
        }

        let pageArray = page.map(data=>{
            return(<div className={users_class.item} onClick={()=> {this.onChangeCurrentPage(data)}}>
                <div className={this.props.currentPage === data && users_class.activePage}>{data}</div>
            </div>)
        })

        let usersArray = this.props.users.map(data => <UserContainer key={data.id} id={data.id} followed={data.followed}
                                                            fullName={data.name}
                                                            status={data.status} country={"data.location.country"}
                                                            city={"data.location.city"}
                                                            photoUrl={data.photos}/>)
        return(
            <div>
                {this.props.isLoading ? <LoadingOverlay active={true} spinner={<Loader/>}> </LoadingOverlay> : null}
                <div className={users_class.pageItem}>
                    {pageArray}
                </div>
                <div className={users_class.container}>
                    {usersArray}
                </div>
            </div>
        );
    }
}

export default Users;