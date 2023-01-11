import { Field } from 'payload/types';
import linkGroup from './linkGroup';
import richText from './richText';
import label from './richText/label';
import largeBody from './richText/largeBody';

export const hero: Field = {
  name: 'hero',
  label: false,
  type: 'group',
  fields: [
    richText({
      admin: {
        elements: [
          'h1',
          largeBody,
          label,
          'link',
        ],
        leaves: [],
      }
    }),
    linkGroup({
      overrides: {
        maxRows: 2,
      }
    }),
  ],
};
