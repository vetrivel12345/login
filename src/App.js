import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import Right from './Right';
import Left from './Left';

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="App">
    <Layout>
    <Sider style={{backgroundColor:"white",display:"flex",alignItems:"center"}}><Left/></Sider>
    <Layout>
      <Header></Header>
      <Content><Right/></Content>
      <Footer></Footer>
    </Layout>
  </Layout>
    </div>
  );
}

export default App;
