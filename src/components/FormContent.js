import React from 'react';
import { Row, Col, Layout, Input, Select } from 'antd';

const { Option } = Select;
const { Content } = Layout;

const FormContent = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 360 }}
        >
          <Row>
            <Col span={12}>
              <div>
                <Select
                  style={{ width: 400, display: 'block' }}
                  onChange={handleChange}
                >
                  <Option value='jack'>Jack</Option>
                  <Option value='lucy'>Lucy</Option>
                  <Option value='Yiminghe'>yiminghe</Option>
                </Select>
                <Select
                  style={{ width: 400, display: 'block' }}
                  onChange={handleChange}
                >
                  <Option value='jack'>Jack</Option>
                  <Option value='lucy'>Lucy</Option>
                  <Option value='Yiminghe'>yiminghe</Option>
                </Select>
                <Input placeholder='Score' />
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default FormContent;
