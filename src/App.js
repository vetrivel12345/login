import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import Right from './Right';

import { useState } from 'react';
import WorkInfo from './WorkInfo';
import Pop from './Popup';
import Left from './Left';

function App() {
  const[sate,setSate]=useState("preview")
  
  
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="App">
    <Layout>
    <Sider style={{width:"100%",backgroundColor:"white",display:"flex",alignItems:"center", margin:"1%",boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",position:"fixed"} }>
    <div style={{width:"100%"}}>
    
    <img src="https://tamil.hostrain.in/hg-banner1.jpg" alt=""/>
    </div>
    </Sider>
    <Layout>
    <Header style={{display:"flex",justifyContent:"space-between",boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"}}><h2  style={{color:"white",marginLeft:"25%"  }}>HomeGenie service provider</h2> 
    <Pop/>
      </Header>
      <Content style={{margin:"1%"}}>  
      <br />
      <br />
      {sate=="preview"? <Right/>:sate=="next"? <WorkInfo/>:<Right/>}
      <div style={{display:"flex",justifyContent:"space-around",}}>
      
      <input style={{boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"}}  type="button" value="preview" onClick={(e=>{setSate(e.target.value)})}/>
    
      <input  style={{boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"}} type="button" value="next" onClick={(e=>{setSate(e.target.value)})}/>
      </div>
    
      </Content>
      <Footer>
      </Footer>
    </Layout>
  </Layout>
    </div>
  );
}

export default App;
