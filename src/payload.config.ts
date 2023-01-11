import { buildConfig } from 'payload/config';
import path from 'path';
import FormBuilder from '@payloadcms/plugin-form-builder';
import seo from '@payloadcms/plugin-seo';
import { Users } from './collections/Users';
import { Pages } from './collections/Pages';

export default buildConfig({
  collections: [
    Pages,
    Users,
  ],
  cors: [
    'http://localhost:3000',
    process.env.PAYLOAD_PUBLIC_SITE_URL,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  plugins: [
    FormBuilder({
      fields: {
        payment: false
      },
    }),
    seo({
      collections: [
        'pages',
      ],
    })
  ],
});
