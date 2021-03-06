import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import './App.css';
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";


// const routes = [
//     {
//         path: "/",
//         component: Home
//     },
//     {
//         path: "/about",
//         component: About
//     },
//     {
//         path: "/profiles",
//         component: Profiles
//     },
//     {
//         path: "/history",
//         component: HistorySample
//     },
// ];

function App() {
  return (
      <>
          <ul>
              <li>
                  <Link to="/">홈</Link>
              </li>
              <li>
                  <Link to="/about">소개</Link>
              </li>
              <li>
                  <Link to="/profiles">프로필 목록</Link>
              </li>
              <li>
                  <Link to="/history">예제</Link>
              </li>
          </ul>
          <hr/>

          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
              <Route path="/profiles" component={Profiles}/>
              <Route path="/history" component={HistorySample}/>
              <Route
                  render={({location}) => (
                      <div>
                          <h2>이 페이지는 존재하지 않습니다:</h2>
                          <p>{location.pathname}</p>
                      </div>
                  )}
              />
          </Switch>

      </>
  );
}

export default App;
