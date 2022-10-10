import React from 'react'
import s from './style.module.sass'

export default function Comment({text}) {
  return (
    <p className={s.comment}>
        {text}
    </p>
   
  )
}
