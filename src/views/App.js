import logo from '../logo.svg';
import './App.css';
import MainContent from '../components/Menu';
import Content from '../components/layout/Content';
import Home from './content/Home';
import Nav from '../components/Nav';

import { BrowserRouter as Router } from "react-router-dom"
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { Col, Row } from 'antd';


function App() {
  return (
    <div className="App">
      <Router>
        <Row>
          <Nav />
        </Row>
        <Row>
          <Col span={4}>
            <MainContent />
          </Col>
          <Col span={18}>
            <Content />
          </Col>
        </Row>
      </Router>

    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
