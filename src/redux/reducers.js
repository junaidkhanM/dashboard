import Airtable from 'airtable';
import { message } from 'antd';

const base = new Airtable({ apiKey: 'keyTNNnpKjIdX8JpK' }).base(
  'appdc7Ulvz2hBlAzu'
);

let getData = () => {
  let data = [];

  base('Dashboard')
    .select({
      view: 'Grid view',
    })
    .eachPage(function page(records, fetchNextPage) {
      records.map((record) => data.push(record));

      fetchNextPage();
    });
  return data;
};

let initialState = getData();

let postData = (state = initialState, action) => {
  let currState;

  if (action.type === 'POST') {
    base('Dashboard').create([
      {
        fields: {
          Score: action.payload.score,
          Subject: action.payload.subject,
          Exam: action.payload.exam,
        },
      },
    ]);

    currState = getData();
    return currState;
  } else if (action.type === 'DELETE') {
    base('Dashboard').destroy(action.payload, function (err, deletedRecord) {
      if (err) {
        console.error(err);
        return;
      }
      message.success('Record deleted', deletedRecord.id);
      // window.location.reload();
    });

    currState = getData();
    return currState;
  }
  return state;
};

export default postData;
