# Guildly

[guildly.netlify.app](https://guildly.netlify.app/)

## Introduction

Guildly is a desktop design tool for gardeners with an emphasis on education and a holistic approach to growing. It aims to help users apply their creativitiy whilst providing the information needed to create resilient and multifunctional plant communities.

## How it works

Users are provided with a plant database to browse and choose plants for their design. Plants are added to the design canvas and can be moved around. Since the plant database will always be limited, users can add their own custom plants and set their sizes. There is also the option to add rectangles which can be use for creating boundaries or structues such as a plant bed or shed.

## Run the project locally

`npm i`
`npm run emulator` --> starts up a local instance of firestore and populates it with test data
`npm start`

## Run Unit Tests

Some unit tests rely on the firebase emulator to be running:
`npm run emulator`
`npm test`

## Run Cypress BDD tests

`npm run cypress:open`

## Deployment

Deployment is done through Netlify once a pull request is merged.
