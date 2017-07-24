import { values } from 'lodash';

export const getChannelInfos = ({ channels }) => (
  values(channels)
    .filter(channel => !channel.private)
    .map(({ name, id }) => ({ name, id }))
);

export const getDmInfos = ({ channels }) => (
  values(channels)
    .filter(channel => channel.private)
    .map(({ name, id }) => ({ name, id }))
);
