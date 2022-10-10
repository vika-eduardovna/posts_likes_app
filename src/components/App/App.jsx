import PostContainer from "../PostContainer";
import { data } from '../../data/posts';
import { useState } from "react";
import Form from "../Form/Form";


function App() {
  const [posts, setPosts] = useState(data);
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

  return (
    <div className="App">
      <Form addPost={addPost} />
      <PostContainer
        posts={posts}
        change_like={change_like}
        addComment={addComment} />
    </div>
  );
}

export default App;
