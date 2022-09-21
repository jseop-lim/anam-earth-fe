import '../App.css';

function Comment({ text, writer, date }) {
    return (
        <div className="movie-container">
            <div style={{ position: 'relative', right: '550px' }}>
                <strong>작성자:</strong> {writer}&nbsp;&nbsp;
                <strong>작성일:</strong> {date.substring(0, 10)}
            </div>
            <span style={{}}>{text}</span>
        </div>
    );
}

export default Comment;
