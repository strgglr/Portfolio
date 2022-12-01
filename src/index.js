import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'


// window.onload = function(){
//   if(!window.location.hash){
//     window.location = window.location + '#loaded';
//     window.location.reload();
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter forceRefresh = {true}>
      <App />
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()