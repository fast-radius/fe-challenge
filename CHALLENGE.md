# Rendering Parts

## Challenge

For this challenge, we'd like you to create a client-side application that consumes a Node API, renders a paginated list of parts, and provides a simple form interface for editing part attributes.

We've provided a Node Express server that returns part and manufacturing process data. This data is a simplified example of the kind we work with every day at Fast Radius. Parts include information about a CAD part file (a 3D file format called an `.stl`) as well as specifications for manufacturing them. We'd like you to create a client-side application that consumes the API, renders a paginated list of parts, and provides a simple form interface for editing part attributes.

## Instructions

You may develop your solution using JavaScript, TypeScript, or any front-end framework you like. Your implementation should include the following:

- Show a paginated list of parts from the server
- Include editable inputs for these fields for each part:
  - Manufacturing Process
  - Material
  - Quantity
- Ability to "save" the values on the server. (Note: the server does not have a database, so any changes in data you make will be reset on page refresh.)
- Tests

Styling and layout is up to you. The layout should be readable and intuitive. If styling is your forte, feel free to show off, but extensive styling is not required.

Along with your solution please provide a README that includes the following:

- Instructions for running your code
- An explanation of the design decisions you made

This challenge is meant to showcase your front-end development skills, but not meant to eat up all your free time. Please aim to spend 3-5 hours on this challenge.

## What We're Looking For

- Part names are displayed in a list from the server
- Part list is paginated, 5 per page
- Each part renders 3 inputs, and can be "saved"

We're primarily looking to for clean, extensible code that shows you have a good understanding of handling API calls, managing state, and working with forms. The README should document your design decisions. The code should be tested.

Keep in mind that later in the interview process, we'll ask you to add functionality onto this project as part of a code extension interview.

## Using Dependencies

This challenge is open-ended. If you have libraries you prefer, feel free to use them. If you have questions about library usage, please email the hiring manager for more information.

## API Documentation

#### Request

Get part data with a `GET` request to `/parts?page=${pageNumber}`.

#### Response:

The server is configured to send back entries for the page number you requested in your query param.
The server will respond with part data like this:

```javascript
{
  data: [
    {
      part: { file_name: "moon.stl", id: "1", units: "mm" },
      id: "1",
      manufacturingProcess: { id: "1", name: "DLS" },
      material: { id: "1", type: "flexible plastic" },
      quantity: "12",
    },
    ...
  ]
}
```

The response also includes headers with pagination information:

```
{
  "per-page": 5,
  "page-number": 1,
  "total-entries": 22,
  "total-pages": 5
}
```

### Context on the Manufacturing Processes:

Fast Radius helps companies create their parts through a variety of manufacturing processes. Here are more details on the 3 processes used in the sample data:

- **DLS:** Digital Light Synthesis, an additive (3D printing) technology. Prints by curing layers of plastic resin with UV light.
- **FDM:** Fused Deposition Modeling, an additive (3D printing) technology. Prints by forcing plastic filament through a nozzle and depositing layers. FDM is the technology most desktop 3D printers use.
- **CNC:** Computer Numerical Control, a traditional subtractive manufacturing process. Creates a part by cutting or milling away material.
