export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: RECEIVE_ERRORS,
  errors: []
});
