import PostContainer from "../PostContainer";
import { data } from '../../data/posts';
import { useState, useEffect } from "react";
import Form from "../Form/Form";


function App() {
  const [posts, _setPosts] = useState(data);

  const setPosts = state => {
  _setPosts(state);
  localStorage.setItem('posts', JSON.stringify(state))
  };

  useEffect(() => {
  const posts = JSON.parse(localStorage.getItem('posts')) ?? [];
  setPosts(posts)
  }, []);

  const change_like = (id) => {
    const target = posts.find(post => post.id === id);
    target.like = !target.like;
    setPosts([...posts])
  };

  const addComment = (id, text) => {
    const comment = {
      id: Date.now(),
      text
    }
    const target = posts.find(post => post.id === id);
    target.comments.push(comment);
    setPosts([...posts]);
  }

  const addPost = (title, text) => setPosts([
    ...posts,
    {
      id: Date.now(),
      title,
      text,
      like: false,
      comments: []
    }
  ]);

  const deletePosts = post_id => setPosts(posts.filter(el => el.id !== post_id));
  const deleteComment = (post_id, comment_id) => {
    setPosts(prev => {
      const target_post = prev.find(el => el.id === post_id);
      target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
      return [...prev]
    })
  }


  return (
    <div className="App">
      <Form addPost={addPost} />
      <PostContainer
        deleteComment={deleteComment}
        posts={posts}
        change_like={change_like}
        deletePosts={deletePosts}
        addComment={addComment} />
    </div>
  );
}

export default App;
