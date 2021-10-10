import React from "react";
import st from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'HI, how are you?', likeC: '7'},
        {id: 2, message: 'It\'s my first post', likeC: '77'},
        {id: 3, message: 'It\'s my first post', likeC: '77'},
        {id: 4, message: 'It\'s my first post', likeC: '77'},
        {id: 5, message: 'It\'s my first post', likeC: '77'},

    ]

    let postsElements = posts.map(p => <Post message={p.message} likeC={p.likeC}/>);

    return (
        <div className={st.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={st.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;