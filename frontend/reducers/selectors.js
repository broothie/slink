import { values } from 'lodash';

export const getChannelInfos = ({ channels }) => (
  values(channels).map(({ name, id }) => ({ name, id }))
);
