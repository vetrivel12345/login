import { Form,Radio, Input, InputNumber, Button, Row, Col, Select, DatePicker, AutoComplete, Cascader, Tooltip, } from 'antd';
import React from 'react'
import Exp from './Exp'
  
  function WorkInfo() {
    const App = () => {
      const [value, setValue] = React.useState(1);
    
      const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    
      return (
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>1</Radio>
          <Radio value={2}>2</Radio>
          <Radio value={3}>3</Radio>
          <Radio value={4}>4</Radio>
          <Radio value={5}>5 above</Radio>
        </Radio.Group>
      );
    };
    const Vacci = () => {
      const [value, setValue] = React.useState(1);
    
      const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    
      return (
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      );
    };
    const CustSafe = () => {
      const [value, setValue] = React.useState(1);
    
      const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    
      return (
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      );
    };
    const WorkLicense = () => {
      const [value, setValue] = React.useState(1);
    
      const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    
      return (
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      );
    };
      const options = [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ];
      
      function onChange(value) {
        console.log(value);
      }
      
      // Just show the latest item.
      function displayRender(label) {
        return label[label.length - 1];
      }
    return (
      <div>
        <Row>
          <Col>
          <label>Service Type :&nbsp;&nbsp;</label>
            </Col>
          <Col>
          <Cascader
            options={options}
            expandTrigger="hover"
            displayRender={displayRender}
            onChange={onChange}
          />
          </Col>
          <br/>
          <Col>
          <label>Work Category Type :&nbsp;&nbsp;</label>
            </Col>
          <Col>
          <Cascader
            options={options}
            expandTrigger="hover"
            displayRender={displayRender}
            onChange={onChange}
          />
          </Col>
          <br/>
          <Col>
          <label>Service List :&nbsp;&nbsp;</label>
            </Col>
          <Col>
          <Cascader
            options={options}
            expandTrigger="hover"
            displayRender={displayRender}
            onChange={onChange}
          />
          </Col>
          </Row>
          <Row>
            <div>
            &nbsp;
            </div>
          </Row>
          <Row >
          <Col >
            <Row>
              <Col >
                <label htmlFor="aadhar">Year of Experience :&nbsp;&nbsp;</label>
              </Col>
              <Col>
                <Exp />
              </Col>
            </Row>
          </Col>
          </Row>
          <Row>
            <div>
            &nbsp;
            </div>
          </Row>
          <Row>
            <Col>
            <label>Previous Work place:&nbsp;&nbsp;</label>
            </Col>
            <Col>
            <Input type="text" id='flat' />
            </Col>
          </Row>
              <br/>
            <Row>
            <Col>
            <label>Work Timing:&nbsp;&nbsp;</label>
            </Col>
            <Col>
            <Input type="text" id='flat' />
            </Col>
            
          </Row>
          <br/>
          <Row>
            <Col>
            <label>Customer attend per day?&nbsp;&nbsp;</label>
            </Col>

            <Col>
            <App />   
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
            <label>Vaccinated?&nbsp;&nbsp;</label>
            </Col>
            <Col>
            <Vacci/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
            <label>Will attend the customer with safety measure:&nbsp;&nbsp;</label>
            </Col>
            <Col>
            <CustSafe/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
            <label>Work license/Certificate:&nbsp;&nbsp;</label>
            </Col>
            <Col>
            <WorkLicense/>
            </Col>
          </Row>
          <br/>
            <Row>
            <Col>
            <label>Work license/Certificate No:&nbsp;&nbsp;</label>
            </Col>
            <Col>
            <Input type="text" id='flat' />
            </Col>
            
          </Row>
          <br/>
            <Row>
            <Col>
            <label>Work license/Certificate description :&nbsp;&nbsp;</label>
            </Col>
            <Col>
            <Input type="text" id='flat' />
            </Col>
            
          </Row>

      </div>
    )
  }
  
  export default WorkInfo
  

