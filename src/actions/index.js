export const post = (subject, exam, score) => {
  const data = {
    subject,
    exam,
    score,
  };
  return {
    type: 'POST',
    payload: data,
  };
};
