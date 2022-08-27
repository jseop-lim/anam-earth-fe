import { Link } from 'react-router-dom';
import '../App.css';

function Writing({ id, title, writer, date }) {
    return (
        <div className="movie-container">
            <h2>
                <Link to={`/view/${id}`}>{title}</Link>
            </h2>
            <h3>작성자: {writer}</h3>
            <h3>작성일: {date.substring(0, 10)}</h3>
        </div>
    );
}

export default Writing;
