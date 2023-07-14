import React from "react";
import { Link } from "react-router-dom";

export default function NewsItem(props) {

  let { title, description, imageUrl, newsUrl, author, date, sourceName } =
      props;

    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}....<span className="badge text-bg-info">By {sourceName}</span>
            </h5>
            <p className="card-text">{description}....</p>

            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toLocaleDateString() +
                  " " +
                  new Date(date).toLocaleTimeString() +
                  " PST"}
              </small>
            </p>
            <Link
              to={newsUrl}
              target="_blank"
              className="btn btn-outline-primary fs-2 fst-italic fw-bolder"
              rel="noreferrer"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
}

