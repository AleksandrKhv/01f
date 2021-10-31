import React from "react";
import st from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props: any) => {

    let postsElements: any =
        props.posts.map((p: { message: string; likeC: string; }) => <Post message={p.message} likeC={p.likeC}/>);

    let newPostElement: any = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={st.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={st.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;