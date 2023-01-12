import { Payload } from 'payload';
import { home } from './home';
import { form } from './form';

export const seed = async (payload: Payload) => {
  await payload.create({
    collection: 'users',
    data: {
      email: 'dev@payloadcms.com',
      password: 'test',
    }
  });

  const exampleFormJSON = JSON.parse(JSON.stringify(form));

  const { id: exampleFormID } = await payload.create({
    collection: 'forms',
    data: exampleFormJSON,
  })

  const homepageJSON = JSON.parse(JSON.stringify(home).replace(/{{FORM_ID}}/g, exampleFormID));

  await payload.create({
    collection: 'pages',
    data: homepageJSON,
  })
}