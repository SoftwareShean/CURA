import React, { Component } from "react";
import "../Text/TextPost.css";
// import { putText, deleteTextPost } from "../../../../Services/textpost";
import {
  FaPlusCircle, FaTrash, FaEdit 
} from "react-icons/fa";

export default class TextPost extends Component {
  render() {
    const {
      post,
      deleteTimelineTextPost,
      id,
      putTextPost,
      edit,
      editPost,
    } = this.props;
    return (
      <div className='textPost'>
        <img
          src='https://i.ya-webdesign.com/images/small-circle-png-4.png'
          alt='timeline marker'
        />
        <div className='linkDot'>
          <h6>Note posted at {post.created_at}</h6>
        </div>
        <div className='tags'>
          {edit === id ? <input value={post.tags} /> : <h4>{post.tags}</h4>}
        </div>
        <div className='note'>
          {edit === id ? <input value={post.title} /> : <h4>{post.title}</h4>}
          {edit === id ? <input value={post.body} /> : <p>{post.body}</p>}
        </div>
        <div className='crud'>
          {edit === id ? (
              <button onClick={() => putTextPost(id, post)}><FaPlusCircle/></button>
          ) : (
            <>
              <button onClick={() => editPost(id)}><FaEdit/></button>
              <button onClick={() => deleteTimelineTextPost(id)}><FaTrash/></button>
            </>
          )}
        </div>
      </div>
    );
  }
}
