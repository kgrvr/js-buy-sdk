import imageQuery from './image-query';
import nodeQuery from './node-query';

export const defaultFields = ['id', 'handle', 'updatedAt', 'title', ['image', imageQuery()]];

export default function collectionNodeQuery(fields = defaultFields) {
  return nodeQuery('Collection', fields);
}
