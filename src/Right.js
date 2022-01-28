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

function Right() {
  const [quali, setQuali] = useState("")
  const { Option, OptGroup } = Select;

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
        <Row style={{ marginLeft: "5%" }}>
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
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name={['user', 'Lastname']} label="LastName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ marginLeft: "4%" }}>
          <Col>
            <Form.Item name={['user', 'Fathername']} label="FatherName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name={['user', 'Mothername']} label="MotherName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ marginLeft: "3%" }} >
          <Col span={6} style={{ display: "flex", justifyContent: "flex-start" }}>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
              <Input />
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
              <InputNumber style={{ display: "flex" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ marginLeft: "3%" }}>
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
                  <Input.Password />
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
     
         
        <br />
        <Row style={{ marginLeft: "5%" }}>
          <Col span={8}>
            <Row>
              <Col>
                <label htmlFor="flat">House/Flat No :</label>
              </Col>
              <Col>
                <Input type="text" id='flat' />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col>
                <label htmlFor="address">Adderss:</label>
              </Col>
              <Col>  <Input type="text" id='address' />
              </Col>
            </Row>
          </Col>
        </Row> <br />
        <Row style={{ width: "100%", marginLeft: "5%" }}>
          <Col span={8}>
            <Row>
              <Col>
                <label htmlFor='city'>City</label>
              </Col>
              <Col style={{ marginLeft: "2em" }}>
                <input type="text" id='city' />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <label htmlFor='state'>State</label>
              </Col>
              <Col style={{ marginLeft: "2em" }}>
                <input type="text" id='state' />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <label htmlFor='pincode'>Pincode</label>
              </Col>
              <Col style={{ marginLeft: "2em" }}>
                <Pin />
              </Col>
            </Row>
          </Col>
        </Row> <br />
        <Row style={{ marginLeft: "5%" }}>
          <Col span={8}>
            <Row>
              <Col >
                <label htmlFor="aadhar">Aadhar Number : </label>
              </Col>
              <Col span={8}>
                <Aadhar />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
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
    
      
      </Form>


    </div>);
}

export default Right;


