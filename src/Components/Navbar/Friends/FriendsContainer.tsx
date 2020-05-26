import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import friends_class from './Friends.module.css';
import {RootState} from "../../../Data/Redux-store";

let Friends: React.FC<Props> = (props) => {
    let friendsArray = props.friends.map(data => <img src={data.image} key={data.id} alt={""}/>);

    return(
        <div className={friends_class.item}>
            <div className={friends_class.text}>Friends</div>
            {friendsArray}
        </div>
    );
};


let mapStateToProps = (state: RootState) => {
    return{
        friends: state.messagesPage.dialogsData
    }
};

let connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>

export default connector(Friends);