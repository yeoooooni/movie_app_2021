import React from 'react';
import './Detail.css'

// genres, poster, summary, title, year

class Details extends React.Component {
    componentDidMount() {
        const { location, history } = this.props; // 리다이렉트 기능 구현

        if(location.state === undefined) {
            history.push('/');
        }
    }

    render () {
        const { location } = this.props;
        if(location.state) {
            return (
                <div className="movie_detail">
                    <img src={location.state.poster}/>
                    <h1 class="movie_title">{location.state.title}</h1>
                        <ul className="movie_genre">
                            {location.state.genres.map((genre, index) => {
                                return <li key={index} className="movie_genre">{genre}</li>
                            })}
                        </ul>
                        <h5 className="movie_year">{location.state.year}</h5>
                        <h5 className="movie_rating">{location.state.rating}</h5>
                        <p className="movie_summary">{location.state.summary}</p>
                    <div className="movie_text">
                        
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

// function Details(props){ // props 확인
//     console.log(props);
//     return <span>hello</span>;
// }

export default Details;