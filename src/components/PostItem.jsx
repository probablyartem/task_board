import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (

            <div className={"post"}>
                <div className={"Post content"}>
                    <strong>{props.number}. {props.task.title}</strong>
                    <div>
                        {props.task.body}
                    </div>
                </div>
                <div className="post__btns"></div>
                <MyButton onClick={() => props.remove(props.task)}>
                    Delete post</MyButton>
            </div>

    );
};

export default PostItem;