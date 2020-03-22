const newMessageChangeType = 'NEW-MESSAGE-CHANGE';
const addMessageType = 'ADD-MESSAGE';

let messagesReducer = (state, action) => {
    switch(action.type){
        case newMessageChangeType:
            state.newMessage = action.message;
            return state;
        case addMessageType:
            let messageId;
            if(state.messagesData[state.messagesData.length-1].id === 2){
                messageId = 1;
            }
            if(state.messagesData[state.messagesData.length-1].id ===1){
                messageId = 2;
            }
            let message = {id: messageId, message: state.newMessage };
            state.messagesData.push(message);
            state.newMessage = '';
            return state;
        default: return state;
    }
}


export const newMessageChangeActionCreator = (text) => {return {type: newMessageChangeType, message: text}};
export const addMessageActionCreator = () => {return {type: addMessageType}};


export default messagesReducer;