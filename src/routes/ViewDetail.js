import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import WritingDetail from '../components/WritingDetail';
import Comment from '../components/Comment';
import '../App.css';

function ViewDetail() {
    const [writing, setWriting] = useState(null);
    const [commentList, setCommentList] = useState(null);
    const [newcomment, setNewcomment] = useState({
        content: '',
        username: '',
    });

    const { id } = useParams();

    const fetchData = async () => {
        const response1 = await axios.get(
            `http://anam-earth-api.jseoplim.com/board/posts/${id}`
        ); //특정 포스팅 id에 해당하는 포스팅, 댓글 가져오기
        console.log(response1);
        setWriting(response1.data); //게시글 정보뽑기용
        setCommentList(response1.data.comments); //posting에 대한 댓글 다 가져오기
    };

    const getValue = e => {
        const { name, value } = e.target;
        setNewcomment({
            ...newcomment,
            [name]: value,
        });
    };

    const onSubmitHandler = async () => {
        const post = id;
        const username = newcomment.username;
        const content = newcomment.content;

        await axios.post(`http://anam-earth-api.jseoplim.com/board/comments`, {
            username,
            post,
            content,
        });
        try {
            //댓글 post 방식으로 보내기
            await axios.post(
                `http://anam-earth-api.jseoplim.com/board/comments`,
                { username, post, content }
            );
            console.log('OKay');
            window.location.href = `/view/${id}`;
        } catch (error) {
            if (error.response.status === 400) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                window.alert('ERROR 400');
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>건의게시판</h1>
            {writing ? (
                <WritingDetail
                    id={writing.id}
                    title={writing.subject}
                    writer={writing.username}
                    text={writing.content}
                    date={writing.created_at}
                />
            ) : (
                <h1>게시글 로딩중...</h1>
            )}
            <h2>댓글</h2>
            <div>
                <div>
                    <input
                        className="comment-writer"
                        type="text"
                        placeholder="작성자 이름"
                        onChange={getValue}
                        name="username"
                    />
                </div>
                <div>
                    <textarea
                        className="commentarea"
                        type="text"
                        placeholder="댓글을 입력해주세요"
                        onChange={getValue}
                        name="content"
                    ></textarea>
                </div>
                <div>
                    <button
                        className="comment-button"
                        onClick={onSubmitHandler}
                    >
                        댓글등록
                    </button>
                </div>
            </div>
            {commentList?.map(todo => (
                <Comment
                    key={todo.id}
                    text={todo.content}
                    writer={todo.username}
                    date={todo.created_at}
                />
            ))}
        </div>
    );
}

export default ViewDetail;
