let store: any = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'HI, how are you?', likeC: '7'},
                {id: 2, message: 'It\'s my first post', likeC: '77'},
                {id: 3, message: 'It\'s my first post', likeC: '77'},
                {id: 4, message: 'It\'s my first post', likeC: '77'},
                {id: 5, message: 'It\'s my first post', likeC: '77'},
            ],
            newPostText: '',
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
    },
    _callSubscriber() {
        console.log('State change')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) { // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likeC: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

// window.store = store
export default store;