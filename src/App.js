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
    <Sider  style={{margin:"1% 0%",borderRadius:"1em"}}>
    <div style={{height:"900px",display:"flex",flexDirection:"column",overflow:"hidden"}}>
    
    <Left />
    <Left />
    </div>
    </Sider>
    <Layout >
    <Header className='zoom1' style={{display:"flex",justifyContent:"space-between",margin:"1%"}}>
    <h2  style={{color:"white",marginLeft:"25%"  }}>HomeGenie service provider</h2> 
    <Pop/>
      </Header>
      <Content style={{margin:"0% 1%"}}>  
      <br />
      <br />
      {sate=="preview"? <Right/>:sate=="next"? <WorkInfo/>:<Right/>}
      <div style={{display:"flex",justifyContent:"space-around",}}>
      
      <input className='zoom1' style={{width:"10em",borderRadius:"1em"}}  type="button" value="preview" onClick={(e=>{setSate(e.target.value)})}/>
    
      <input className='zoom1' style={{width:"10em",borderRadius:"1em"}} type="button" value="next" onClick={(e=>{setSate(e.target.value)})}/>
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
