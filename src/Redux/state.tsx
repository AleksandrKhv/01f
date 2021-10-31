import {rerenderEntireTree} from '../render';

let state: any = {
    profilePage: {
        posts: [
            {id: 1, message: 'HI, how are you?', likeC: '7'},
            {id: 2, message: 'It\'s my first post', likeC: '77'},
            {id: 3, message: 'It\'s my first post', likeC: '77'},
            {id: 4, message: 'It\'s my first post', likeC: '77'},
            {id: 5, message: 'It\'s my first post', likeC: '77'},
        ],
        newPostText: 'itk',
    },
    dialogsPage: {
        messagesData: [
            {id: 1, dialog: 'Hi'},
            {id: 2, dialog: 'Go to park'},
            {id: 3, dialog: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Tom'},
            {id: 3, name: 'Leo'},
            {id: 4, name: 'Jakub'},
            {id: 5, name: 'Misha'},
            {id: 6, name: 'Denis'},
            {id: 7, name: 'Ilariya'},
            {id: 8, name: 'Iolanta'},
            {id: 9, name: 'Sasha'},
            {id: 10, name: 'Daddy'},
        ],
    },
    sidebar: {
        friend: [
            {id: 1, name: 'Masha'},
            {id: 2, name: 'Dasha'},
            {id: 3, name: 'Ira'},

        ]

    },
}

export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likeC: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText: any) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;