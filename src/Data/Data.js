let dialogsData =
    [{id: 1, name: 'Vasya'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Vova'},
        {id: 4, name: 'Alex'},
        {id: 5, name: "Ivan"},
        {id: 6, name: 'Anna'},
        {id: 7, name: 'Mikhail'},
        {id: 8, name: 'Ivanov'}];

let messagesData =
    [{id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'}];

let postsData =
    [{id: 1, message: 'Post 1', likeCount: 5},
        {id: 2, message: 'Post 2', likeCount: 3}];

let personInfoData = [{id: 1, name: 'Vladislav', surname: 'Savinykh', birthday: '01.01.0000'}];

/*let Data = {
    personData: dialogsData,
    messagesData: messagesData,
    postsData: postsData,
    personInfo: personInfoData
}*/

let Data = {
    profilePage: {
        postsData: [{id: 1, message: 'Post 1', likeCount: 5}, {id: 2, message: 'Post 2', likeCount: 3}],
        personInfoData: [{id: 1, name: 'Vladislav', surname: 'Savinykh', birthday: '01.01.0000'}]
    },
    messagesPage: {
        dialogsData:[{id: 1, name: 'Vasya'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Vova'},
                {id: 4, name: 'Alex'},
                {id: 5, name: "Ivan"},
                {id: 6, name: 'Anna'},
                {id: 7, name: 'Mikhail'},
                {id: 8, name: 'Ivanov'}],
        messagesData:[{id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'}]
    }
}

export default Data;