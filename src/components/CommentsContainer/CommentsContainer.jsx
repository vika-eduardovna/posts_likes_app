import React from 'react'
import Comment from '../Comment/Comment'
import AddCommentForm from '../AddCommentForm/AddCommentForm'

export default function CommentsContainer({ comments, addComment, post_id, deleteComment }) {

  return (
    <div>
      {
        comments.map(comment => <Comment key={comment.id} {...comment} post_id={post_id} deleteComment={deleteComment}/>)
      }

      <AddCommentForm addComment={addComment} post_id={post_id} />

    </div>
  )
}
