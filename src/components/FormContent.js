import React, { useState } from 'react';
import { Layout, Input, Select, Button, Form, message } from 'antd';
import './Main.css';
import { post } from '../actions/index';
import { useDispatch } from 'react-redux';

const { Option } = Select;
const { Content } = Layout;

const FormContent = () => {
  const [subject, setSubject] = useState('');
  const [exam, setExam] = useState('');
  const [score, setScore] = useState();

  const dispatch = useDispatch();

  function handleSubject(value) {
    if (value === '') {
      message.warning('select value of subject');
    } else {
      setSubject(value);
    }
  }

  function handleExam(value) {
    if (value === '') {
      message.warning('select value of exam');
    } else {
      setExam(value);
    }
  }

  const onFinish = () => {
    if (score !== undefined) {
      dispatch(post(subject, exam, score));
      setScore();
      message.success('data submitted!');
    } else {
      message.warning('change or input score!');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 360 }}
        >
          <div className='form-content'>
            <Form
              name='basic'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                label='Exam'
                name='Exam'
                rules={[{ required: true, message: 'Please select exam!' }]}
              >
                <Select className='form-item' onChange={handleExam}>
                  <Option value='Summer'>Summer</Option>
                  <Option value='Winter'>Winter</Option>
                  <Option value='Final'>Final</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label='Subject'
                name='Subject'
                rules={[{ required: true, message: 'Please select subject!' }]}
              >
                <Select className='form-item' onChange={handleSubject}>
                  <Option value='Physics'>Physics</Option>
                  <Option value='Chemistry'>Chemistry</Option>
                  <Option value='Math'>Math</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label='Score'
                name='Score'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Score!',
                  },
                ]}
              >
                <Input
                  className='form-item'
                  type='number'
                  max='100'
                  value={score}
                  onChange={(e) => {
                    setScore(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Content>
    </>
  );
};

export default FormContent;
