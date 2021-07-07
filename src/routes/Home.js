import React from 'react';
import axios from 'axios';
import Movie from '../componets/Movie';
import './Home.css';

// function App() { // 함수형 컴포넌트
//   return <div className="App" />;
// }
// Mount : DOM 객체가 생성되고 브라우저에 나타나는 것 의미
// Mount로 분류하는 생명주기 함수 : render() 함수, constructor() 함수, componentDidMount() 함수
// constructor() : 컴포넌트 클래스의 생성자 함수, 컴포넌트 만들때 처음 호출, state 초기값 지정
// render() : 컴포넌트의 기능과 모양새 정의, 리액트 요소 반환
// componentDidMount() : 컴포넌트 생성하고 첫 렌더링이 끝났을 때 호출되는 함수
 
class Home extends React.Component { // 클래스형 컴포넌트는 항상 React.Component 상속받아야 함
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const { // movies.data.data.movies 점 연산자 적용 순서대로 구조 분해 할당 적용
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    this.setState({movies, isLoading: false}) // state: 변수 / 키 = 대입할 변수명 -> 축약 가능
  }

  componentDidMount() { 
    this.getMovies();
  }
  
  render() { // return 역할
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie 
              key = {movie.id}
              id = {movie.id}
              year = {movie.year}
              title = {movie.title}
              summary = {movie.summary}
              poster = {movie.medium_cover_image}
              genres = {movie.genres}
            />
          ))}
        </div>
        )}
      </section>
    );
  }
}

export default Home;
