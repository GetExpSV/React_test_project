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
            state.newPost = action.text;
            return state;
        case addPostType:
            let postId = state.postsData[state.postsData.length -1].id + 1;
            state.postsData.push({id: postId, message: state.newPost, likeCount: 0});
            state.newPost = '';
            return state;
        case addLikeToPostType:
            state.postsData.find(data=> data.id === action.id).likeCount++;
            return state;
        default: return state;
    }

}

export const newPostChangeActionCreator = (text) => { return {type: newPostChangeType, text: text}};
export const addPostActionCreator = () => {return {type: addPostType}};
export const addLikeToPostActionCreator = (id) => {return {type: addLikeToPostType, id: id}};

export default profileReducer;