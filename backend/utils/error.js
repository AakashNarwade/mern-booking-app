export const createError = (status, message) => {
  console.log("message=> ", message);
  const err = new Error();
  err.message = message;
  err.status = status;

  return err;
};
