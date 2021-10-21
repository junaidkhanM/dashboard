import Airtable from 'airtable';

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
    return initialState;
  } else {
    return state;
  }
};

export default postData;
