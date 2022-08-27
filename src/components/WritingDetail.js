import ReactHtmlParser from 'react-html-parser';
import '../App.css';

function WritingDetail({ id, title, text, writer, date }) {
    return (
        <div>
            <div className="writing-head">
                <h2>제목: {title}</h2>
                <div
                    style={{ position: 'relative', top: '5px', left: '500px' }}
                >
                    <strong>작성자:</strong> {writer}
                    <br />
                    <strong>작성일:</strong> {date.substring(0, 10)}
                </div>
            </div>
            <div className="writing-body">
                <h3>건의내용:</h3>
                {ReactHtmlParser(text)}
            </div>
        </div>
    );
}

export default WritingDetail;
