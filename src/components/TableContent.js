import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

const { Content } = Layout;

const TableContent = () => {
  const [data, setData] = useState([]);
  const newdata = useSelector((state) => state.postData);

  useEffect(() => {
    setData(newdata);
  }, [newdata]);

  return (
    <>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 360 }}
        >
          <div className='table-content'>
            <table>
              <thead>
                <tr>
                  <th className='table-item'>Subject</th>
                  <th className='table-item'>Exam</th>
                  <th className='table-item'>Score</th>
                </tr>
              </thead>
              {data.map((element) => {
                return (
                  <tbody key={element.id}>
                    <tr>
                      <td className='table-item'>{element.get('Subject')}</td>
                      <td className='table-item'>{element.get('Exam')}</td>
                      <td className='table-item'>{element.get('Score')}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </Content>
    </>
  );
};

export default TableContent;
