//import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://anam-earth-api.jseoplim.com/board/posts';

function TextEditer() {
    const [Content, setContent] = useState({
        content: '',
        username: '',
        subject: '',
    });

    const getValue = e => {
        const { name, value } = e.target;
        setContent({
            ...Content,
            [name]: value,
        });
    };

    const onSubmitHandler = async () => {
        /*let today = new Date;
      let time = {
        year: today.getFullYear(),  //현재 년도
        month: today.getMonth() + 1, // 현재 월
        date: today.getDate(), // 현제 날짜
        hours: today.getHours(), //현재 시간
        minutes: today.getMinutes(), //현재 분
      };
      let timestring = `${time.year}-${time.month}-${time.date}`;*/

        const subject = Content.subject;
        const username = Content.username;
        const content = Content.content;
        //const date = timestring;

        //post 방식으로 보내기
        //await axios.post(SERVER_URL, {username, subject, content});

        try {
            await axios.post(SERVER_URL, { username, subject, content });
            console.log('OKay');
            window.location.href = '/view';
        } catch (error) {
            if (error.response.status === 400) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                window.alert('ERROR 400');
            }
        }
    };

    return (
        <div className="App">
            <h1>건의게시판</h1>
            <div className="form-wrapper">
                <input
                    className="title-input"
                    type="text"
                    placeholder="제목을 입력하세요"
                    onChange={getValue}
                    name="subject"
                />
                <input
                    className="writer-input"
                    type="text"
                    placeholder="작성자 이름"
                    onChange={getValue}
                    name="username"
                />
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>내용을 입력하세요</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent({
                            ...Content,
                            content: data,
                        });
                    }}
                    onBlur={(event, editor) => {
                        //console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        //#console.log('Focus.', editor);
                    }}
                />
            </div>
            <button className="submit-button" onClick={onSubmitHandler}>
                작성완료
            </button>
        </div>
    );
}

export default TextEditer;
