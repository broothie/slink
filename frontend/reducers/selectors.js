import { values } from 'lodash';

export const allMessages = state => values(state.messages);
