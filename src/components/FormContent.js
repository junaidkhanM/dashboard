import React, { useState } from 'react';
import { Layout, Input, Select, Button } from 'antd';
import './Main.css';
import { post } from '../actions/index';
import { useDispatch } from 'react-redux';

const { Option } = Select;
const { Content } = Layout;

const FormContent = () => {
  const [subject, setSubject] = useState('');
  const [exam, setExam] = useState('');
  const [score, setScore] = useState('');

  const dispatch = useDispatch();

  function handleSubject(value) {
    if (value === '') {
      alert('select value of subject');
    } else {
      setSubject(value);
    }
  }

  function handleExam(value) {
    if (value === '') {
      alert('select value of exam');
    } else {
      setExam(value);
    }
  }
  return (
    <>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 360 }}
        >
          <div className='form-content'>
            <Select
              placeholder='Subject'
              className='form-item'
              onChange={handleSubject}
            >
              <Option value='Physics'>Physics</Option>
              <Option value='Chemistry'>Chemistry</Option>
              <Option value='Math'>Math</Option>
            </Select>
            <Select
              placeholder='Exam'
              className='form-item'
              onChange={handleExam}
            >
              <Option value='Summer'>Summer</Option>
              <Option value='Winter'>Winter</Option>
              <Option value='Final'>Final</Option>
            </Select>
            <Input
              className='form-item'
              type='number'
              placeholder='Score'
              value={score}
              onChange={(e) => {
                if (e.target.value > 101) {
                  alert('max value should be 100');
                } else {
                  setScore(e.target.value);
                }
              }}
            />
            <Button
              className='form-item'
              type='primary'
              onClick={() => {
                dispatch(post(subject, exam, score));
                setScore('');
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Content>
    </>
  );
};

export default FormContent;
