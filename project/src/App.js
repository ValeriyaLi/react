import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/postList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ])

    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Python', body: 'Description'},
        {id: 2, title: 'Python 2', body: 'Description'},
        {id: 3, title: 'Python 3', body: 'Description'}
    ])

    const [title, setTitle] = useState('')
    const bodyInputRef = useRef();

    const addNewPost = (e) =>{
        e.preventDefault();
        console.log(title)
    }

  return (
    <div className="App">
        <form>
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type={"text"}
                placeholder={"Name of Post"}/>
            <MyInput
                ref={bodyInputRef}
                type={"text"}
                placeholder={"Description of Post"}
            />
            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
        <PostList posts={posts} title={"List of Posts fot js"}/>
        <PostList posts={posts2} title={'List of Posts for Python'}/>
    </div>
  );
}

export default App;