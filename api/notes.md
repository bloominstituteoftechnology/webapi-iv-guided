## Extract configuration values into environment variables

## Deploy a web API to Heroku

What is an environment? Apps need to support different environments. Computer where your software is going to be running on. Development environment. Staging environment: Testing env where QI engineers are working. Production environment where we deploy our tested SW. Your node app need to adapt and know where its running. 

Server: Process environment - The server should randomly assign the port. 

The node API runs in a process. Node.js

Environment = JS Obj - The API can read that obj - OS Admins can add properties to that JS obj - process.env

.env file never pushed to the code repo


## CD - Continuous Deployment

1. code
2. commit
3. push to the right branch --> 
4. Set up the collab between my github repo & heroku server
5. Heroku deploys automatically for you



