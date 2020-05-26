const newMessageChangeType = 'NEW-MESSAGE-CHANGE';
const addMessageType = 'ADD-MESSAGE';

export type dialogsDataType = {
    id: number,
    name: string,
    image: string
}
type messagesDataType = {
    id: number,
    message: string
}

let initialMessage = {
    dialogsData:[{id: 1, name: 'Vasya', image: 'https://c7.hotpng.com/preview/701/23/630/discord-avatar-twitch-youtube-profile.jpg'},
        {id: 2, name: 'Masha', image: 'https://sun9-57.userapi.com/c846122/v846122563/747dd/1B2WtilFklE.jpg?ava=1'},
        {id: 3, name: 'Vova', image: 'https://c7.hotpng.com/preview/269/335/789/emote-emoticon-avatar-discord-avatar.jpg'},
        {id: 4, name: 'Alex', image: 'https://c7.hotpng.com/preview/406/211/692/5bd7bf9d2fae5.jpg'},
        {id: 5, name: "Ivan", image: 'https://toppng.com/uploads/preview/andasnake-discord-emoji-admiral-bahroo-christmas-emotes-115629254478qzen15w5i.png'}
        ] as Array<dialogsDataType>,
    messagesData:[
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 1, message: 'I\'m fine'}] as Array<messagesDataType>,
};

type messagesStateType = typeof initialMessage

type newMessageChange = {
    type: typeof newMessageChangeType,
    message: string
}
export const newMessageChange = (text: string): newMessageChange => {return {type: newMessageChangeType, message: text}};

type addMessage = {
    type: typeof addMessageType
    message: string
}
export const addMessage = (message: string): addMessage => {return {type: addMessageType, message}};

type messagesActionType = | newMessageChange | addMessage

let messagesReducer = (state = initialMessage, action: messagesActionType): messagesStateType => {
    switch(action.type){
        case addMessageType:
            let messageId = 0;
            if(state.messagesData[state.messagesData.length-1].id === 2){
                messageId = 1;
            }
            if(state.messagesData[state.messagesData.length-1].id ===1){
                messageId = 2;
            }
            let message = {id: messageId, message: action.message };
            return{
                ...state,
                messagesData: [...state.messagesData, message]
            };
        default: return state;
    }
};

export default messagesReducer