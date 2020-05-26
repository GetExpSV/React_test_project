import React from 'react';
import {addMessage, newMessageChange} from "../../Data/MessagesReducer";
import {connect, ConnectedProps} from "react-redux";
import {withAuthRedirect} from "../../Hoc/withRedirect";
import {compose} from "redux";
import {initialize} from 'redux-form';
import messages_class from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import DialogItem from "./DialogItem/DialogItem";
import MessageReduxForm from "./messageForm";
import {RootState} from "../../Data/Redux-store";

const Messages: React.FC<Props> = (props) => {

    let dialogsArray = props.dialogsData.map(data => <DialogItem name={data.name} id={data.id} image={data.image}
                                                                 key={data.id}/>);
    let messagesArray = props.messagesData.map(data => <Dialog message={data.message} id={data.id} key={data.id}/>);


    let addNewMessage = (values: {message: string}) => {
        props.addMessage(values.message);
    };

    return (
        <div>
            <h4>Dialogs</h4>
            <div className={messages_class.content}>
                <div className={messages_class.person}>
                    {dialogsArray}
                </div>
                <div className={messages_class.dialog}>
                    {messagesArray}
                </div>
                <div className={messages_class.textItem}>
                    <MessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};

let mapStateToProps = (state: RootState) => {
    return{
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData
    }
};

let connector = connect(mapStateToProps, {newMessageChange, addMessage, initialize});
type Props = ConnectedProps<typeof connector>

export default compose(
    connector,
    withAuthRedirect
)(Messages)