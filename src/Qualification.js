import React from 'react';
import { Checkbox, Row, Col } from 'antd';

function Qualification() {
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }
  return <div>
  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
  <Row>
    <Col span={4}>
      <p>Qualifications</p>
    </Col>
    <Col span={4}>
      <Checkbox value="A">SSLC</Checkbox>
    </Col>
    <Col span={4}>
      <Checkbox value="B">Higher.sec</Checkbox>
    </Col>
    <Col span={4}>
      <Checkbox value="C">Graduate</Checkbox>
    </Col>
    <Col span={4}>
      <Checkbox value="C">Post Graduate</Checkbox>
    </Col>
  
  </Row>
</Checkbox.Group>,
  </div>;
}

export default Qualification;
