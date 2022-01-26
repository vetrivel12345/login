import React from 'react';
import { Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



function Profile() {

  return <div>
  <Space direction="vertical" style={{ width: '100%' }} size="large">
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    listType="picture"
    maxCount={1}
  >
    <Button icon={<UploadOutlined />} onClick={(e=>{console.log(e)})}>Upload</Button>
  </Upload>
</Space>,
  </div>;
}

export default Profile;
