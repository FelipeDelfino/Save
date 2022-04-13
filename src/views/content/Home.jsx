import './Home.css'
import { Card } from "antd";
import React from "react";
import { Image } from 'antd';
import Logo from '../../components/img/logo2.png'
  
  
  const Home = props => (
      <div className="Home"> 
      
        <Card className="Save">
            <img width={300} src={Logo}/>
            <p style={{fontSize:'25px'}}>
              Sistema Adminstrativo de Vans Escolares
            </p>
            
        </Card>
        

       
       
    </div>
    
    )
    
    
    
 
    export default Home