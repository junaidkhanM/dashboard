import React from 'react';
import { Row, Col, Layout } from 'antd';

const { Content } = Layout;

const TableContent = () => {
  return (
    <>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 360 }}
        >
          <Row>
            <Col span={12}>Tbale</Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default TableContent;
