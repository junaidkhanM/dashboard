import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  BorderlessTableOutlined,
  FormOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import './Main.css';

import ChartsContent from './ChartsContent';

const { Header, Footer, Sider } = Layout;

const Charts = () => {
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
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
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
          <ChartsContent />
          <Footer style={{ textAlign: 'center' }}>
            Factors.ai ©2021 Created by Junaid Khan
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Charts;
