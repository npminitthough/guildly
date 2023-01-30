# Guildly

[guildly.netlify.app](https://guildly.netlify.app/)

## Introduction

Guildly is a desktop design tool for gardeners with an emphasis on education and a holistic approach to growing. It aims to help users apply their creativitiy by providing information about plant properties that help the soil, wildlife and people. With this information users can come up with plant guilds suitable for their growing space.

## How it works

Users are provided with a plant database to browse and choose plants for their design. Plants are added to the design canvas and can be moved around or deleted. Since the plant database will always be limited, users can add their own custom plants and set their sizes. There is also the option to add rectangles which can be use for creating boundaries or structues such as a plant bed or shed.

## Run the project locally

`npm i`
`npm start`

## Run Cypress BDD tests

`./node_modules/.bin/cypress open -e "TAGS=not @documentation-only"`

## Deployment

Deployment is done through Netlify once a pull request is merged.
