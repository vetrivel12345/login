import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Profile from './Profile';

function Left() {
  return <div>
 
  <Form
  name="normal_login"
  className="login-form"
  initialValues={{ remember: true }}
  
>
  <Form.Item
    name="username"
    rules={[{ required: true, message: 'Please input your Username!' }]}
  >
    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
  </Form.Item>
  <Form.Item
    name="password"
    rules={[{ required: true, message: 'Please input your Password!' }]}
  >
    <Input
      prefix={<LockOutlined className="site-form-item-icon" />}
      type="password"
      placeholder="Password"
    />
  </Form.Item>
  <Form.Item>
    <Form.Item name="remember" valuePropName="checked" noStyle>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
  </Form.Item>

  <Form.Item>
    <Button type="primary" htmlType="submit" className="login-form-button">
      Log in
    </Button>
  </Form.Item>
</Form>

  </div>;
}

export default Left;


