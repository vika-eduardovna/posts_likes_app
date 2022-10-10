import React from 'react'
import s from './style.module.sass'

export default function AddCommentForm({ addComment, post_id }) {
    const submit = e => {
        e.preventDefault();
        const { comment } = e.target;
        addComment(post_id, comment.value);
        comment.value = '';
    }

    return (
        <form onSubmit={submit} className={s.add_comment_form}>
            <input type="text" name='comment' placeholder='write here...' />
            <button>Add</button>
        </form>
    )
}
