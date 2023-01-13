export const shippingInformationForm = {
  "id": "63c0835134d40cef85cc11a2",
  "title": "Shipping Information Form",
  "fields": [
    {
      "name": "first-name",
      "label": "First Name",
      "width": 50,
      "required": true,
      "id": "63c081b169853127a8895312",
      "blockName": "first-name",
      "blockType": "text"
    },
    {
      "name": "last-name",
      "label": "Last Name",
      "width": 50,
      "required": true,
      "id": "63c081c669853127a8895313",
      "blockName": "last-name",
      "blockType": "text"
    },
    {
      "name": "email",
      "label": "Email",
      "width": 100,
      "required": true,
      "id": "63c081e869853127a8895314",
      "blockName": "email",
      "blockType": "email"
    },
    {
      "name": "street-address",
      "label": "Street Address",
      "width": 100,
      "required": true,
      "id": "63c081fe69853127a8895315",
      "blockName": "street-address",
      "blockType": "text"
    },
    {
      "name": "street-address-two",
      "label": "Street Address Line 2",
      "width": 100,
      "id": "63c0823169853127a8895316",
      "blockName": "street-address-two",
      "blockType": "text"
    },
    {
      "name": "city",
      "label": "City",
      "width": 50,
      "required": true,
      "id": "63c0825a69853127a8895317",
      "blockName": "city",
      "blockType": "text"
    },
    {
      "name": "state",
      "label": "State",
      "width": 50,
      "required": true,
      "id": "63c0826569853127a8895318",
      "blockName": "state",
      "blockType": "state"
    },
    {
      "name": "zip-code",
      "label": "Postal / Zip Code",
      "width": 50,
      "required": true,
      "id": "63c082bb69853127a889531a",
      "blockName": "zip-code",
      "blockType": "number"
    },
    {
      "name": "county",
      "label": "Country",
      "width": 50,
      "required": true,
      "id": "63c0829269853127a8895319",
      "blockName": "country",
      "blockType": "country"
    }
  ],
  "submitButtonLabel": "Submit",
  "confirmationType": "message",
  "confirmationMessage": [
    {
      "children": [
        {
          "text": "Your shipping information submission was successful."
        }
      ]
    }
  ],
  "emails": [
    {
      "emailTo": "{{email}}",
      "emailFrom": "dev@payloadcms.com",
      "emailFromName": "Payload Team",
      "subject": "You've received a new message.",
      "message": [
        {
          "children": [
            {
              "text": "Your example shipping information form submission was received successfully."
            }
          ]
        }
      ],
      "id": "63c0831869853127a889531b"
    }
  ],
  "createdAt": "2023-01-12T22:01:53.023Z",
  "updatedAt": "2023-01-12T22:01:53.023Z",
  "redirect": {}
}