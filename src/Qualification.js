import React from 'react';
import { Col, Row, Select } from 'antd';

function Qualification() {
  const { Option } = Select;
const provinceData = ['NonGraduate', 'Graduate'];
const cityData = {
  NonGraduate: ['UnSkilled', 'Skilled'],
  Graduate: ['UnSkilled', 'Skilled',"Technical"],
};

const App = () => {
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = value => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };

  return (
    <>
    <Row style={{}}>
    <Col span={6}>
    <label htmlFor="qua">Qualification :</label>
    </Col>
    <Col span={6}>
    <Select id='qua' defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
    {provinceData.map(province => (
      <Option key={province}>{province}</Option>
    ))}
  </Select>
    </Col>
    <Col span={6}>
    <label htmlFor="ser"> Service Catagory :</label>
    </Col>
    <Col span={6}>
    <Select id='ser' style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
    {cities.map(city => (
      <Option key={city}>{city}</Option>
    ))}
  </Select>
    </Col>
    </Row>
     
     
    </>
  );
};

  return <div>
  <App />
  </div>;
}

export default Qualification;
