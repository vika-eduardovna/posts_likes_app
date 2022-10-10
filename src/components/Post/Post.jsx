import React from 'react'
import s from './style.module.sass'
import CommentsContainer from '../CommentsContainer/CommentsContainer';


export default function Post({id, title, text, like, comments, change_like, addComment}) {
  
  const like_classes = [s.like_btn, like ? s.like_btn_active : ''];

  return (
    <div className={s.post}>
      <h2>{title}</h2>
      <p>{text}</p>
      <p 
      className={like_classes.join(' ')} 
      onClick={() => change_like(id)}>
        {
          like ? 'Liked' : 'Like?'
        }
      </p>
      <CommentsContainer 
        comments={comments} 
        addComment={addComment}
        post_id={id}
      />
    </div>
  )
}
