import './Content.css'
import React from "react";
import { BrowserRouter as BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Student from '../../views/content/Student';
import Home from '../../views/content/Home';
import School from '../../views/content/Schools';

const Content = props => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/student" element={<Student />} />
                <Route path="/school" element={<School />} />

            </Routes>
        </div>
    )
}


export default Content