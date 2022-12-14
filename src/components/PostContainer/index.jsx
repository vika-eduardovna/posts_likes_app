import React from 'react'
import Post from '../Post/Post'
import s from './style.module.sass'


export default function PostContainer({posts, change_like, addComment, deletePosts, deleteComment}) {
  return (
    <div>
      {
        posts.map(post => 
        <Post  
          key={post.id} {...post} 
          change_like={change_like} 
          addComment={addComment}
          deletePosts={deletePosts}
          deleteComment={deleteComment}
          />)
      }
    </div>
  )
}
