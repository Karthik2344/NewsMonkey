import React from 'react';

const NewsItem = (props) => {
    const { title, description, imageUrl, newsUrl, author, date, source } = props;
    
    return (
        <div className="my-3">
            <div className="card" style={{ maxWidth: '18rem', margin: 'auto' }}>
                <div className="position-relative">
                    <img
                        src={imageUrl || "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"}
                        className="card-img-top"
                        alt={title || 'News Image'}
                        style={{ height: '150px', objectFit: 'cover' }}
                    />
                    <span className="badge rounded-pill bg-danger position-absolute top-0 end-0 m-2">
                        {source}
                    </span>
                </div>
                <div className="card-body">
                    <h6 className="card-title" style={{ fontSize: '1.1rem' }}>{title}</h6>
                    <p className="card-text" style={{ fontSize: '0.9rem' }}>{description}</p>
                    <p className="card-text"><small className="text-muted">By {author || "Unknown"} on {new Date(date).toLocaleDateString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;