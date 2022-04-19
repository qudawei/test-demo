/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-06-14 12:27:26
 * @LastEditors: David Qu
 * @LastEditTime: 2021-06-14 13:10:48
 */
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
function App() {
  return (
    <div>
      <Router>
        <Link to='/'>首页</Link>
        <Link to='/user'>用户中心</Link>
        <Link to='/login'>登录</Link>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/user' component={UserPage}></Route>
        <Route path='/login' component={LoginPage}></Route>
      </Router>
    </div>
  );
}

export default App;
