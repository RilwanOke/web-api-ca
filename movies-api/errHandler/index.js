// eslint-disable-next-line no-unused-vars
const defaultErrHandler = (err, req, res, next) => {
  // Check if in production environment
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).send('Something went wrong!');
  }

  // For development, include stack trace
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack}`);
};

export default defaultErrHandler;
