import React from 'react'
import s from './style.module.sass'

export default function Form({ addPost }) {
    const submit = e => {
        e.preventDefault();
        const { title, text } = e.target;
        addPost(title.value, text.value);
        console.log(title.value, text.value);
        title.value = '';
        text.value = ''
    }

    return (
        <form className={s.main_form} onSubmit={submit}>
            <input type="text" name='title' placeholder='Your title' />
            <input type="text" name='text' placeholder='Type text here' />
            <button>Post it</button>
        </form>
    )
}
