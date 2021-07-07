import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About'
import Home from './routes/Home'
import Navigation from './componets/Navigation'
import Detail from './routes/Details'

// function App() { // 함수형 컴포넌트
//   return <div className="App" />;
// }
// Mount : DOM 객체가 생성되고 브라우저에 나타나는 것 의미
// Mount로 분류하는 생명주기 함수 : render() 함수, constructor() 함수, componentDidMount() 함수
// constructor() : 컴포넌트 클래스의 생성자 함수, 컴포넌트 만들때 처음 호출, state 초기값 지정
// render() : 컴포넌트의 기능과 모양새 정의, 리액트 요소 반환
// componentDidMount() : 컴포넌트 생성하고 첫 렌더링이 끝났을 때 호출되는 함수 => 화면이 업데이트 되는 경우 실행됨
 
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
