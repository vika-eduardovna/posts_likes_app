import React from 'react'
import s from './style.module.sass'

export default function Comment({ id, text, post_id, deleteComment }) {
  return (
    <p
      className={s.comment}
      onClick={() => deleteComment(post_id, id)}>
      {text}
    </p>

  )
}
