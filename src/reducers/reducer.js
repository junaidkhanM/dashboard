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

  switch (action.type) {
    case 'POST':
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
      state = currState;
      return state;
    case 'DELETE':
      base('Dashboard').destroy(action.payload, function (err, deletedRecord) {
        if (err) {
          console.error(err);
          return;
        }
        message.success('Record deleted', deletedRecord.id);
        // window.location.reload();
      });

      base('Dashboard')
        .select({
          view: 'Grid view',
        })
        .eachPage(function page(records, fetchNextPage) {
          records.map((record) => currState.push(record));

          fetchNextPage();
        });
      state = currState;
      return state;
    default:
      return state;
  }
};

export default postData;
