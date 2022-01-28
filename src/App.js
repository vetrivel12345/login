import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import Right from './Right';
import Left from './Left';
import { useState } from 'react';
import WorkInfo from './WorkInfo';

function App() {
  const[sate,setSate]=useState("preview")
  
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="App">
    <Layout>
    <Sider style={{backgroundColor:"white",display:"flex",alignItems:"center"}}><Left/></Sider>
    <Layout>
      <Header></Header>
      <Content>  
      <br />
      <br />
      {sate=="preview"? <Right/>:sate=="next"? <WorkInfo/>:<Right/>}
    
    <input type="button" value="preview" onClick={(e=>{setSate(e.target.value)})}/>
  
    <input type="button" value="next" onClick={(e=>{setSate(e.target.value)})}/>
      </Content>
      <Footer>
      </Footer>
    </Layout>
  </Layout>
    </div>
  );
}

export default App;
