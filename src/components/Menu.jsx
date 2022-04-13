import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'





const MainContent = props => (
    <div className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/student">Students</Link>
                </li>
                <li>
                    <Link to="/school">Schools</Link>
                </li>
            </ul>
        </nav>
    </div>
)
export default MainContent