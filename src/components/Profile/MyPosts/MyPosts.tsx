import React from "react";
import st from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props: any) => {

    let postsElements: any =
        props.posts.map((p: { message: string; likeC: string; }) => <Post message={p.message} likeC={p.likeC}/>);

    let newPostElement: any = React.createRef()

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE_NEW_POST_TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div className={st.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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