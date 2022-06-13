# XDC Twitter Simulator Webapp

- The ideology of developing another simulator containing twitter’s data is to showcase the XinFin network nodes' speed at which it can transact i.e TPS (Transactions per Second).
- The webportal visitor visits the landing page of the Twitter archive site. The user will be provided with a textbox and a submit button for archiving a tweet using the copied Twitter URL. There will also be links that will enable the user to view the list of archived tweets by date in a calendar format.

## Usage

Follwing features are included in this webapp

- Graphical representation of reading & writing speeds
- Top 20 trending hashtags with its map coordinates
- Count of nodes
- Nodes plotted on map
- Can see the archived tweet by simple searching
- TPS accuracy

## Steps for local setup

- clone the repository in your local system
- run `npm install` : To install the dependencies
- run `npm start` : It will start your server on your local machine
- Dependencies : Defined under `package.json`
- Deployment instructions : Docker based deployment, Dockerfile is there in parent directory

## About env file

This file is having different types of variables like:

- All the microservice url that is required in webapp
- API endpoints
- URL genre keywords
- etc.
