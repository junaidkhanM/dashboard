import React, { useEffect, useState } from 'react';
import { Layout, Table, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../actions/index';
import { DeleteTwoTone } from '@ant-design/icons';

const { Content } = Layout;
const { Column } = Table;

const TableContent = () => {
  const [data, setData] = useState([]);
  const newdata = useSelector((state) => state.postData);

  const dispatch = useDispatch();

  useEffect(() => {
    setData(newdata);
  }, [newdata]);

  const dataSource = [];

  data.map((elem) => {
    dataSource.push({
      key: elem.id,
      Subject: elem.fields.Subject,
      Score: elem.fields.Score,
      Exam: elem.fields.Exam,
    });
    return null;
  });

  return (
    <>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 360 }}
        >
          <div className='table-content'>
            <Table dataSource={dataSource}>
              <Column title='Subject' dataIndex='Subject' key='Subject' />
              <Column title='Exam' dataIndex='Exam' key='Exam' />
              <Column title='Score' dataIndex='Score' key='Score' />

              <Column
                title='Action'
                key='action'
                render={(text, record) => (
                  <Space size='middle'>
                    <DeleteTwoTone
                      onClick={() => dispatch(deleteItem(record.key))}
                      style={{ marginLeft: '20px', fontSize: '20px' }}
                    />
                  </Space>
                )}
              />
            </Table>
          </div>
        </div>
      </Content>
    </>
  );
};

export default TableContent;
