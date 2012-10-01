# Famlist

### Description
Open Source Family Shopping List

### Recommendations
* Use Linux or OS X (check known issues section)

### Installation
1. Install node.js 0.6.0 or greater
2. Install mongodb 2.0.7
3. Execute npm install from the source root directory
4. Start the mongodb demon. (example ./mongod)
5. Start the server with "node server.js"
6. Browse to http://localhost:8080

#### Required Modules
1. npm install express
2. nom install mongoose
2. npm install ejs

### Known Issues
1. mongodb module will not install on Windows due to the inability to compile bson. This is an issue with the bson module and not npm or this application.