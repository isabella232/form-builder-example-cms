import { buildConfig } from 'payload/config';
import path from 'path';
import FormBuilder from '@payloadcms/plugin-form-builder';
import seo from '@payloadcms/plugin-seo';
import { Users } from './collections/Users';
import { Pages } from './collections/Pages';
import { MainMenu } from './globals/MainMenu';
import { Media } from './collections/Media';

export default buildConfig({
  collections: [
    Media,
    Pages,
    Users,
  ],
  cors: [
    'http://localhost:3000',
    process.env.PAYLOAD_PUBLIC_SITE_URL,
  ],
  globals: [
    MainMenu,
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
      uploadsCollection: 'media',
    })
  ],
});
