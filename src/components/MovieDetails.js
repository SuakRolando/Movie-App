import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = (props) => {
  const imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img className="card-img-top mb-5 mb-md-0" src={imageUrl+props.movie.poster_path} alt={props.movie.title} />
                </div>
                <div className="col-md-6">
                    <div className="small mb-1">Release Date: {props.movie.release_date}</div>
                    <h1 className="display-5 fw-bolder">{props.movie.title}</h1>
                    <div className="fs-5 mb-5">
                        <span>Status: {props.movie.status}</span>
                    </div>
                    <p className="lead">{props.movie.overview}</p>
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default MovieDetails;
