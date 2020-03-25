const newPostChangeType = 'NEW-POST-CHANGE';
const addPostType = 'ADD-POST';
const addLikeToPostType = 'ADD-LIKE-TO-POST';

let initialProfile = {
    postsData: [{id: 1, message: 'Post 1', likeCount: 5}, {id: 2, message: 'Post 2', likeCount: 3}],
    personInfoData: [{id: 1, name: 'Vladislav', surname: 'Savinykh', birthday: '01.01.0000'}],
    newPost: ''
};

let profileReducer = (state= initialProfile, action) => {
    switch(action.type){
        case newPostChangeType:
            let newPostState = {...state};
            newPostState.newPost = action.text;
            return newPostState;
        case addPostType:
            let newPostDataState = {...state};
            newPostDataState.postsData = [...state.postsData];
            let postId = newPostDataState.postsData[newPostDataState.postsData.length -1].id + 1;
            newPostDataState.postsData.push({id: postId, message: newPostDataState.newPost, likeCount: 0});
            newPostDataState.newPost = '';
            return newPostDataState;
        case addLikeToPostType:
            let newPostLike = {...state};
            newPostLike.postsData = [...state.postsData];
            newPostLike.postsData.find(data=> data.id === action.id).likeCount++;
            return newPostLike;
        default: return state;
    }

}

export const newPostChangeActionCreator = (text) => { return {type: newPostChangeType, text: text}};
export const addPostActionCreator = () => {return {type: addPostType}};
export const addLikeToPostActionCreator = (id) => {return {type: addLikeToPostType, id: id}};

export default profileReducer;