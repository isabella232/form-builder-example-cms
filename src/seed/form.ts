export const form = {
  "id": "63c04e2f4c525f08d6ed79cf",
  "title": "Example Form",
  "fields": [
    {
      "name": "first-name",
      "label": "First name",
      "width": 50,
      "required": true,
      "id": "63adaaba5236fe69ca8973f8",
      "blockName": "first-name",
      "blockType": "text"
    },
    {
      "name": "last-name",
      "label": "Last name",
      "width": 50,
      "required": true,
      "id": "63bf4b1fd69cef4f34272f9a",
      "blockName": "last-name",
      "blockType": "text"
    },
    {
      "name": "email",
      "label": "Email",
      "width": 50,
      "required": true,
      "id": "63acabad433ea1822764c539",
      "blockName": "email",
      "blockType": "email"
    },
    {
      "name": "mobile-number",
      "label": "Mobile Number",
      "width": 50,
      "required": false,
      "id": "63adb8cab65c28c168442320",
      "blockName": "mobile-number",
      "blockType": "number"
    },
    {
      "name": "favorite-season",
      "label": "Favorite season of the year",
      "width": 100,
      "options": [
        {
          "label": "Summer",
          "value": "summer",
          "id": "63adaee3b65c28c168442318"
        },
        {
          "label": "Autumn",
          "value": "autumn",
          "id": "63adaee6b65c28c168442319"
        },
        {
          "label": "Winter",
          "value": "winter",
          "id": "63adaeebb65c28c16844231a"
        },
        {
          "label": "Spring",
          "value": "spring",
          "id": "63adaeeeb65c28c16844231b"
        }
      ],
      "required": false,
      "id": "63adaed8b65c28c168442317",
      "blockName": "favorite-season",
      "blockType": "select"
    },
    {
      "name": "coolest-project",
      "label": "What's the coolest project you've built with Payload so far?",
      "width": 100,
      "required": false,
      "id": "63adab96b65c28c168442316",
      "blockName": "coolest-project",
      "blockType": "textarea"
    },
    {
      "name": "country",
      "label": "Where are you from?",
      "width": 50,
      "required": false,
      "id": "63adb8b4b65c28c16844231f",
      "blockName": "country",
      "blockType": "country"
    },
    {
      "name": "state",
      "label": "From the US? If so, where at?",
      "width": 50,
      "id": "63bf505ed69cef4f34272f9b",
      "blockName": "state",
      "blockType": "state"
    },
    {
      "name": "terms-and-conditions",
      "label": "I strongly disagree with the terms and conditions",
      "width": 100,
      "required": true,
      "id": "63adb8eab65c28c168442321",
      "blockName": "terms-and-conditions",
      "blockType": "checkbox"
    },
    {
      "message": [
        {
          "children": [
            {
              "text": "Have a great rest of your day!"
            }
          ]
        },
        {
          "children": [
            {
              "text": ""
            }
          ]
        },
        {
          "children": [
            {
              "text": "Sincerely, \n\nPayload Team."
            }
          ]
        }
      ],
      "id": "63adb90db65c28c168442322",
      "blockName": "farewell",
      "blockType": "message"
    }
  ],
  "submitButtonLabel": "Submit",
  "confirmationType": "message",
  "confirmationMessage": [
    {
      "children": [
        {
          "text": "Your form submission was successful! This is good news!"
        }
      ]
    }
  ],
  "emails": [
    {
      "emailTo": "{{email}}",
      "emailFrom": "dev@payloadcms.com",
      "emailFromName": "Payload",
      "subject": "You've received a new message.",
      "message": [
        {
          "children": [
            {
              "text": "Thanks for completing the Example form! We really appreciate it!"
            }
          ]
        }
      ],
      "id": "63acab72433ea1822764c538"
    }
  ],
  "createdAt": "2022-12-28T20:48:53.181Z",
  "updatedAt": "2023-01-12T00:12:57.120Z",
  "redirect": {}
}