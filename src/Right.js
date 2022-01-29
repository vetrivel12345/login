import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Row, Col, Select, DatePicker, AutoComplete, Cascader, Tooltip, } from 'antd';
import { Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { CopyOutlined } from '@ant-design/icons';
import Profile from './Profile';
import Num from './Num';
import Qualification from './Qualification';
import Pin from './Pin';
import Aadhar from './Aadhar';
import './Right.css'
import db from './firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

function Right() {
  const [quali, setQuali] = useState("")
  const { Option, OptGroup } = Select;
  const[name,setName]=useState("")
  const[sec_name,setSec_name]=useState("")
  const[email,setEmail]=useState("")
  const[age,setAge]=useState( )
  const[psw,setPsw]=useState("")
  const[address,setAddress]=useState("")
  const[state,setStat]=useState("")
  const[city,setCity]=useState("")
  const[house ,setHouse_no]=useState("")
  const[fatherName,setFather_name]=useState("")
  const[motherName,setMother_name]=useState("")

  const writeData = async () => {
 
    const docRef = await addDoc(collection(db, "formData"), {
      name: name,
      Second_Name: sec_name,
      Email: email,
      password: psw,
      Age: age,
      Address:address,
      City:city,
      House:house,
      state:state,
      Fathername:fatherName,
      Mothername:motherName
    });
    console.log(await docRef)
  }

  function handleChange(value) {
    setQuali(`${value}`);
  }
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>

      <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
      <div className='personal zoom1' style={{borderRadius:"10px",margin:"2em",padding:"2em"}}>
      <Row style={{display:"flex",justifyContent:"center"}}>
        <Col>
          <Input.Group compact>
            <Select style={{ width: '100%' }} defaultValue="Mr">
              <Option value="Mr">Mr.</Option>
              <Option value="Mrs">Mrs.</Option>
            </Select>
          </Input.Group>
        </Col>
        <Col span={8}>
          <Form.Item name={['user', 'Firstname']} label="FirstName" rules={[{ required: true }]}>
            <Input  onChange={(e=>{setName(e.target.value)})}/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={['user', 'Lastname']} label="LastName" rules={[{ required: true }]}>
            <Input  onChange={(e=>{setSec_name(e.target.value)})} />
          </Form.Item>
        </Col>
      </Row>
      
      <Row style={{display:"flex",justifyContent:"center"}}>
        <Col>
          <Form.Item name={['user', 'Fathername']} label="FatherName" rules={[{ required: true }]}>
            <Input  onChange={(e=>{setFather_name(e.target.value)})} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={['user', 'Mothername']} label="MotherName" rules={[{ required: true }]}>
            <Input  onChange={(e=>{setMother_name(e.target.value)})} />
          </Form.Item>
        </Col>
      </Row>
      </div>

      <div className='contact zoom1' style={{borderRadius:"10px",margin:"2em",padding:"2em"}}>
      <Row style={{display:"flex",justifyContent:"center"}} >
        <Col span={6} style={{ display: "flex", justifyContent: "flex-start" }}>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input  onChange={(e=>{setEmail(e.target.value)})} />
          </Form.Item>
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
          <Row>
            <Col>
              <label >Phone Number :</label>
            </Col>
            <Col>
              <Num />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Form.Item name={['user', 'age']} maxl label="Age" rules={[{ type: 'number', min: 0, max: 99 }]} >
            <InputNumber style={{ display: "flex" }}  onChange={(e=>{setAge(e.target.value)})} />
          </Form.Item>
        </Col>
      </Row>
      
      <Row style={{display:"flex",justifyContent:"center"}}>
        <Col span={8}>
          <Row>

            <Col >
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password  onChange={(e=>{setPsw(e.target.value)})}/>
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={8}>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password style={{ marginLeft: "2em" }} />
          </Form.Item>

        </Col>
      </Row>
   
      </div>
         
        
        <div className='address zoom1' style={{borderRadius:"10px",margin:"2em",padding:"2em"}}>
        
        <Row style={{display:"flex",justifyContent:"center"}}>
          <Col span={8}>
            <Row>
              <Col>
                <label htmlFor="flat">House/Flat No :</label>
              </Col>
              <Col>
                <Input type="text" id='flat'  onChange={(e=>{setHouse_no(e.target.value)})}/>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col>
                <label htmlFor="address">Adderss:</label>
              </Col>
              <Col>  <Input type="text" id='address'  onChange={(e=>{setAddress(e.target.value)})}/>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
          <Row>
            <Col>
              <label htmlFor='city'>City</label>
            </Col>
            <Col style={{ marginLeft: "2em" }}>
              <input type="text" id='city'  onChange={(e=>{setCity(e.target.value)})} />
            </Col>
          </Row>
        </Col>
        </Row> <br />

        <Row style={{display:"flex",justifyContent:"center"}}>
         
          <Col span={8}>
            <Row>
              <Col>
                <label htmlFor='state'>State</label>
              </Col>
              <Col style={{ marginLeft: "2em" }}>
                <input type="text" id='state'  onChange={(e=>{setStat(e.target.value)})}/>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <label htmlFor='pincode'>Pincode</label>
              </Col>
              <Col style={{ marginLeft: "2em" }}>
                <Pin/>
              </Col>
            </Row>
          </Col>
        </Row> <br />

        </div>
        <div className='extra zoom1' style={{borderRadius:"10px",margin:"2em",padding:"2em"}}>
        
        <Row style={{display:"flex",justifyContent:"center"}}>
          <Col span={8}>
            <Row style={{display:"flex",justifyContent:"space-around"}}>
              <Col >
                <label htmlFor="aadhar">Aadhar Number : </label>
              </Col>
              <Col >
                <Aadhar />
              </Col>
            </Row>
          </Col>
          <Col style={{width:"50%"}}>
            <Row style={{display:"flex",justifyContent:"space-around"}}>
              <Col >
                <label htmlFor="">upload your photo</label>
              </Col>
              <Col>
                <Profile />
              </Col>
            </Row>
          </Col>
        </Row> <br />
    
        <Qualification/>
        </div>
            <div>
            <button onClick={writeData()} style={{width:"10em",borderRadius:"1em"}}>submit</button>
            </div>
      
      </Form>


    </div>);
}

export default Right;


