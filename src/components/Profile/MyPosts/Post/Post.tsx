import React from "react";
import st from './Post.module.css'

const Post = (props: any) => {
    return (
        <div className={st.item}>
            <img src="https://i.pinimg.com/736x/c2/74/aa/c274aa153d376a2365b66af27521d203.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span>
                {props.likeC}
            </div>
        </div>
    );
}

export default Post;