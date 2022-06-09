import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ isBusy, science }) {
    return (
        <>
            {isBusy ? (<p></p>) : (
                science.map(function (d, id) {
                    return (
                        <div className = "card">
                            <div className = "container">
                              <img src={d.urlToImage} alt="Image" className="img-news"/> 
                              <a href={ `${d.url}` } target="_blank" >Go to the article </a>
                                <p>{d.title}</p>
                            </div>
                        </div>
                    )
                })
            )}
        </>
    );
}