import React from "react";
import st from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    let postsElements =
        props.posts.map((p: { message: string; likeC: string; }) => <Post message={p.message} likeC={p.likeC}/>);

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