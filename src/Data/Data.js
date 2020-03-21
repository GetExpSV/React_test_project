import profileReducer from "./ProfileReducer";
import messagesReducer from "./MessagesReducer";

let Data = {
    _Data: {
        profilePage: {
            postsData: [{id: 1, message: 'Post 1', likeCount: 5}, {id: 2, message: 'Post 2', likeCount: 3}],
            personInfoData: [{id: 1, name: 'Vladislav', surname: 'Savinykh', birthday: '01.01.0000'}],
            newPost: ''
        },
        messagesPage: {
            dialogsData:[{id: 1, name: 'Vasya', image: 'https://c7.hotpng.com/preview/701/23/630/discord-avatar-twitch-youtube-profile.jpg'},
                {id: 2, name: 'Masha', image: 'https://sun9-57.userapi.com/c846122/v846122563/747dd/1B2WtilFklE.jpg?ava=1'},
                {id: 3, name: 'Vova', image: 'https://c7.hotpng.com/preview/269/335/789/emote-emoticon-avatar-discord-avatar.jpg'},
                {id: 4, name: 'Alex', image: 'https://c7.hotpng.com/preview/406/211/692/5bd7bf9d2fae5.jpg'},
                {id: 5, name: "Ivan", image: 'https://toppng.com/uploads/preview/andasnake-discord-emoji-admiral-bahroo-christmas-emotes-115629254478qzen15w5i.png'}],
            messagesData:[{id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 1, message: 'I\'m fine'}],
            newMessage: ''
        }
    },

    getData(){
        return this._Data;
    },

    //#region func
    /*newPostChange(text){
        this._Data.profilePage.newPost = text;
        this._callSubscriber(this._Data);
    },

    addPost(){
        let postId = this._Data.profilePage.postsData[this._Data.profilePage.postsData.length-1].id + 1;
        let post = {id: postId, message: this._Data.profilePage.newPost, likeCount: 0 }
        this._Data.profilePage.postsData.push(post);
        this._Data.profilePage.newPost = '';
        this._callSubscriber(this._Data);
    },*/

    /*newMessageChange(text){
        this._Data.messagesPage.newMessage = text;
        this._callSubscriber(this._Data);
    },*/

    /*addMessage(){
        let messageId;
        if(this._Data.messagesPage.messagesData[this._Data.messagesPage.messagesData.length-1].id === 2){
            messageId = 1;
        }
        if(this._Data.messagesPage.messagesData[this._Data.messagesPage.messagesData.length-1].id ===1){
            messageId = 2;
        }
        let message = {id: messageId, message: this._Data.messagesPage.newMessage };
        this._Data.messagesPage.messagesData.push(message);
        this._Data.messagesPage.newMessage = '';
        this._callSubscriber(this._Data);
    },*/

    /*addLikeToPost(id){
        this._Data.profilePage.postsData.find(data=> data.id === id).likeCount++;
        this._callSubscriber(this._Data);
    },*/
    //#endregion

    _callSubscriber(){},

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._Data.profilePage = profileReducer(this._Data.profilePage, action);
        this._Data.messagesPage = messagesReducer(this._Data.messagesPage, action);
        this._callSubscriber(this._Data);
    }

}

export default Data;
