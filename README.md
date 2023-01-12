# Form Builder Example CMS

This is an example repo for a CMS built with [Payload](https://payloadcms.com). This repo showcases how to utilize Payload's [Form Builder Plugin](https://github.com/payloadcms/plugin-form-builder).

## Getting Started

1. Clone this repo
2. `cd` into the directory and run `yarn` or `npm install`
3. Copy (`cp`) the `.env.example` file to an `.env` file
4. Run `yarn dev` or `npm run dev` to start the development server
5. Visit `http://localhost:8000/admin` to access the admin panel
6. Login with the following credentials:
   - Email: `dev@payloadcms.com`
   - Password: `test`

## Frontend Development

Clone the [frontend](https://github.com/payloadcms/form-builder-example-website) and follow the instructions there to get started. You can use this repo as a backend for the frontend and see for yourself how it all works together.

## Usage

Once booted up, an `Example Form` will be immediately available to view on the home page.

- The `Example Form` is seeded into the `forms` collection.
- A `Home` page has also been seeded in on start up and utilizes a layout building block called `Form Block` that is wired up to use the `Example Form` from the `forms` collection.
- This is done by adding a relationship field in the form block config that has a `relationTo` set to the `forms` collection.
