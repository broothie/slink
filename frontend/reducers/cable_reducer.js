import { CREATE_CABLE } from '../actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CREATE_CABLE:
      return ActionCable.createConsumer();

    default:
      return state;
  }
};
