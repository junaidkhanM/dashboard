import Airtable from 'airtable';
import { message } from 'antd';

let initialState = [];

const base = new Airtable({ apiKey: 'keyTNNnpKjIdX8JpK' }).base(
  'appdc7Ulvz2hBlAzu'
);

base('Dashboard')
  .select({
    view: 'Grid view',
  })
  .eachPage(function page(records, fetchNextPage) {
    records.map((record) => initialState.push(record));

    fetchNextPage();
  });

const postData = (state = initialState, action) => {
  const currState = [];
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

    base('Dashboard')
      .select({
        view: 'Grid view',
      })
      .eachPage(function page(records, fetchNextPage) {
        records.map((record) => currState.push(record));
        fetchNextPage();
      });

    return currState;
  } else if (action.type === 'DELETE') {
    base('Dashboard').destroy(action.payload, function (err, deletedRecord) {
      if (err) {
        console.error(err);
        return;
      }
      message.success('Record deleted', deletedRecord.id);
      window.location.reload();
    });

    base('Dashboard')
      .select({
        view: 'Grid view',
      })
      .eachPage(function page(records, fetchNextPage) {
        records.map((record) => currState.push(record));

        fetchNextPage();
      });

    return currState;
  } else {
    return state;
  }
};

export default postData;
