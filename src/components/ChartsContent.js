import React, { useState } from 'react';
import { Layout, Select } from 'antd';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

const { Content } = Layout;
const { Option } = Select;

const ChartsContent = () => {
  const [subject, setSubject] = useState('');
  const newdata = useSelector((state) => state.postData);

  const handleSubject = (value) => {
    setSubject(value);
  };

  const final = [];
  const winter = [];
  const summer = [];
  newdata.map((elem) => {
    if (subject === elem.get('Subject')) {
      if (elem.get('Exam') === 'Final') {
        final.push([Number(elem.get('Score'))]);
      } else if (elem.get('Exam') === 'Summer') {
        summer.push([Number(elem.get('Score'))]);
      } else {
        winter.push([Number(elem.get('Score'))]);
      }
    }
    return null;
  });

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: subject,
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Scores',
      },
    },

    series: [
      {
        name: 'Final',
        data: final,
      },
      {
        name: 'Summer',
        data: summer,
      },
      {
        name: 'Winter',
        data: winter,
      },
    ],
  };

  return (
    <>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 360 }}
        >
          <div>
            <Select
              placeholder='Subject'
              className='form-item'
              onChange={handleSubject}
            >
              <Option value='Physics'>Physics</Option>
              <Option value='Chemistry'>Chemistry</Option>
              <Option value='Math'>Math</Option>
            </Select>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      </Content>
    </>
  );
};

export default ChartsContent;
