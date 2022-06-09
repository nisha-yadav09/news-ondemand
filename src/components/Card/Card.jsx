import './Card.css';

export default function Card({ isBusy, data }) {
    return (
        <>
            {isBusy ? (<p></p>) : (
                data.map(function (d, id) {
                    return (
                        <div className = "card">
                            <div className = "container">
                              <img src={d.urlToImage} alt="news" className="img-news"/> 
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