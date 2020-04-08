import React from 'react'
import {connect} from "react-redux";
import {changeStatus, getStatus, putStatus} from "../../../../../Data/ProfileReducer";


class StatusContainer extends React.Component{
    state = {
        editMode: false,
    }
    activateEdit = () =>{
        this.setState({
            editMode: true
        })
    }

    deactivateEdit = () =>{

        this.setState({
            editMode: false
        })

        this.props.putStatus(this.props.status)
    }

    onChangeStatus = (e) =>{
        this.props.changeStatus(e.target.value);
    }

    render(){
        return(
            <div>
                {!this.state.editMode ? <div onDoubleClick={this.activateEdit}>{this.props.status || "status can be here"}</div>:
                <input autoFocus={true} onBlur={this.deactivateEdit} onChange={this.onChangeStatus} value={this.props.status} />}
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        status: state.profilePage.status
    }
}

export default connect(mapStateToProps, {getStatus, changeStatus, putStatus})(StatusContainer);