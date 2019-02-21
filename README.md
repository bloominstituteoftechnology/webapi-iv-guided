# Web API Deployment Guided Project

Guided project for **Web API IV** module.

In this project we will learn how to deploy a Web API to `heroku`'s free tier offering.

## Prerequisites

- Sign up for a [heroku](https://www.heroku.com/) free account.

## Instructions

Please **fork** this repository and follow along using your fork as the instructor deploys it to `heroku`.

## Starter Code

The starter code for this project can be found in [this repository](https://github.com/LambdaSchool/webapi-iv-guided).

## Configure a "server" Script

The server is not configure to run when typing `yarn server` or `npm run server`. It is also not using `nodemon` to restart on changes. Let's configure both:

- add `nodemon` as a development time dependency: `yarn add nodemon --dev`.
- open `package.json` and modify the "test" script to read:

```json
"server": "nodemon index.js"
```

- test it from a terminal.

**wait for students to catch up, use a `yes/no` poll to let students tell you when they are done**

When we deploy the API, `heroku` will look for a "start" script that uses `node` to run the server. We need to add that to `package.json`.

### You Do (estimated 2m to complete)

Ask student to add a "start" script that uses `node` instead of `nodemon` to run `index.js`.

The "scripts" section of `package.json` should look like so:

```json
"scripts": {
    "start": "node index.js",
    "server": "nodemon index.js"
  },
```

After this change `heroku` will know how to start our server, but, needs to be in control of which `port` will be used by the API. The port is hard-coded as 4000, we need to make it dynamic.

## Make the Port Dynamic

- introduce `process.env`.
- introduce the [dotenv npm module](https://www.npmjs.com/package/dotenv). Show the documentation on `npmjs.com`.
- install `dotenv` as a production dependency.
- change `index.js`:

```js
// it's recommended to load configuration for .env as early as possible
require('dotenv').config(); // add this line as the first thing to run1

const server = require('./api/server.js');

// we'll read the port from the server environment if it is there
// heroku will have the PORT environment variable set
const port = process.env.PORT || 5000;

// we can now use that port, if set up by heroku or read from .env or 5000 as a default if not set
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
```

- add a `.env` file to the root folder (next to `package.json`) with the following content

```txt
PORT=4000
```

Remember to mention that it is recommended to add `.env` to `.gitignore` to prevent it from being uploaded to GitHub.

The reason es that most systems will have configuration secrets added to that file that will be different between environments. Some examples are database connection credentials or API keys for external services.

- **stop the server** and restart it again, or the change to `.env` will not be detected.
- the API should be using port 4000 now as specified in `.env`.

**wait for students to catch up, use a `yes/no` poll to let students tell you when they are done**

## Setup Continuous Deployment from GitHub

- verify that all students have created a free account.
- walk students through creating an app using the heroku website.
- in the `Deploy` tab, select _GitHub_ in the `Deployment Method` section.
- GitHub will be ask to authorize access to `heroku`, approve access.
- search for the repository (their fork of the starter code) in the `Connect to GitHub` section and click _Connect_.
- in the `Automatic deploys` section, pick the `master` branch and click `Enable Automatic Deploys`.
- in the `Manual deploy` section, click on `Deploy Branch` to kick-start the first deploy.
- scroll to the top and move to the `Overview` tab to see the deployment in action.
- on the top right, click `Open App`.

The deployment succeeded, but opening the App fails because the fork on GitHub still have the old code without the dynamic port and new `start` script.

**Do a review of all the steps we went through in order to create the application and connect it to GitHub.**

**wait for students to catch up, use a `yes/no` poll to let students tell you when they are done**

Our application displays `Application Error` and information on how to open the logs. We can fix it by pushing our changes to the master branch on GitHub.

- commit and push the changes to the forked repository on GitHub
- check the `Overview` tab on `heroku` and wait for the message that the application was deployed.
- refresh the browser where the application is running, there should be an empty array. Success!

Have students share a link to their applications running on the web.

Use Postman to connect to the api and post a few shoutouts congratulating the students on their new deployment prowess.

An example:

```json
{
  "message": "to all students for successfully deploying an empty array for the world to see and marvel"
}
```

**wait for students to catch up, use a `yes/no` poll to let students tell you when they are done**

## Add an Environment Variable on Heroku

- change the GET to `/` endpoint to include a message of the day as part of the response.

```js
server.get('/', async (req, res) => {
  try {
    const shoutouts = await db('shoutouts');
    const messageOfTheDay = process.env.MOTD || 'Hello World!'; // add this line
    res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
});
```

- add the MOTD to the `.env` file.

```txt
PORT=4000
MOTD=Hello from my computer
```

- **restart the server** running on localhost.
- make a request to the api running on localhost to verify that the `motd` property is there.
- commit and push to GitHub.
- once the new changes are deployed, refresh the application on `heroku`. Note that we get the default `Hello World!` message because the environment variable does not exist on `heroku`.

Now we are going to add that configuration variable on Heroku.

- on `heroku`, go to the `Settings` tab.
- click on `Reveal Config Vars` in the `Config Vars` section.
- add a `MOTD` config var with the value _"Hello from the World Wide Web"_
- refresh the application.

Note that the environment variable on `heroku` overrides the value in code and the value in our local `.env` file. This could be used to store API keys, database connection information and any other secrets in a more secure manner.

**wait for students to catch up, use a `yes/no` poll to let students tell you when they are done**
