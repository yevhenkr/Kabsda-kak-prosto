let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
                { id: 3, message: 'Blabla', likesCount: 11 },
                { id: 4, message: 'Dada', likesCount: 11 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' }
            ]
        },
        sideBar: {
            friends: [
                {
                    key: "11", name: 'Kirill',
                    icon: 'https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645054711_1-fikiwiki-com-p-kartinki-ikonki-1.jpg'
                },
                {
                    key: "12", name: 'Viky',
                    icon: 'https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645054711_1-fikiwiki-com-p-kartinki-ikonki-1.jpg'
                },
                {
                    key: "13", name: 'Taras',
                    icon: 'https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645054711_1-fikiwiki-com-p-kartinki-ikonki-1.jpg'
                },
            ]
        }
    },

    dispatch(action) {
        if (action.type = "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type = "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    }
}

export default store;
window.store = store;
// store - OOP