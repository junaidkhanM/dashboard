import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Layout, Menu, Row } from 'antd';
import {
  HomeOutlined,
  BorderlessTableOutlined,
  FormOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import './Main.css';

import FormContent from './FormContent';
import TableContent from './TableContent';
import ChartsContent from './ChartsContent';

const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
  return (
    <>
      <Layout className='main'>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className='logo'>Factors.ai</div>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' icon={<HomeOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<FormOutlined />}>
              <Link to='/form'>Form</Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<BorderlessTableOutlined />}>
              <Link to='/table'>Table</Link>
            </Menu.Item>
            <Menu.Item key='4' icon={<BarChartOutlined />}>
              <Link to='/chart'>Charts</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className='site-layout-sub-header-background'
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              <Row>
                <Col span={12}>
                  <Row style={{ display: 'inline' }}>
                    <Col className='home-content' span={4}>
                      <FormContent />
                    </Col>
                    <Col className='home-content' span={8}>
                      <TableContent />
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <ChartsContent />
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Factors.ai ©2021 Created by Junaid Khan
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
