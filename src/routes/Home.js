import { useState, useEffect } from 'react';
import axios from 'axios';
import Writing from '../components/Writing';
import '../App.css';

const SERVER_URL = 'http://anam-earth-api.jseoplim.com/board/posts';

function Home() {
    const [todoList, setTodoList] = useState(null);

    // 모든 글 다 받아오기(글 내용은 받아올 필요 x)
    const fetchData = async () => {
        const response = await axios.get(SERVER_URL);
        setTodoList(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = e => {
        window.location.href = '/editing';
    };

    return (
        <div className="App">
            <h1>건의게시판</h1>
            {todoList?.map(todo => (
                <Writing
                    key={todo.id}
                    id={todo.id}
                    title={todo.subject}
                    writer={todo.username}
                    date={todo.created_at}
                />
            ))}
            <button className="submit-button" onClick={handleClick}>
                새글쓰기
            </button>
        </div>
    );
}

export default Home;
