/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-04-26 17:01:24
 * @LastEditTime: 2021-04-26 19:27:40
 * @LastEditors: David Qu
 */
console.log('just for test');
import React from 'react'
import ReactDom from 'react-dom'
import HomePage from "./home"
class App extends React.Component {
    render(){
        return (
            <div style={{color:"#333"}} className="test test2">
                <HomePage />
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("app"))