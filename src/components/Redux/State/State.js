import s from '../../../components/Dialogs/Dialogs.module.css'

let state = {
    dialogePage: {
        dialogs: [
            { key: "11", id: 1, name: 'Kirill', className: `${s.dialogesItem} ${s.active}` },
            { key: "12", id: 2, name: "Viky", className: s.dilogesItem },
            { key: "13", id: 3, name: "Taras", className: s.dilogesItem },
            { key: "14", id: 4, name: "Nastiy", className: s.dilogesItem },
            { key: "15", id: 5, name: "Oleg", className: s.dilogesItem }
        ],
        messages: [
            { key: "21", id: 1, name: 'Hi' },
            { key: "22", id: 2, name: "Answer" },
            { key: "23", id: 3, name: "Yo" },
        ]
    },
    postsPage: {
        posts: [
            { key: "11", messeges: 'My post', likeCount: '2' },
            { key: "12", messeges: 'My post2', likeCount: '4' },
            { key: "13", messeges: 'My post3', likeCount: '6' },
            { key: "14", messeges: 'My post4', likeCount: '8' }
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
    },

}

export default state;