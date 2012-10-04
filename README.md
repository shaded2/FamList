# Famlist

### Description
Open Source Family Shopping List

### Recommendations
* Use Linux or OS X (check known issues section)

### Installation
1. Install node.js 0.6.0 or greater (Choose one of the options below)
	* Parkage management Installtion: https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager
	* Download from http://nodejs.org/download/
2. Install mongodb 2.0.7
	* Get it from http://www.mongodb.org/downloads
	* Extract the compressed file in any location of you choice
3. Install all the needed modules
	* In the terminal, change directory to the root location of the application
	* Type: npm install (all the needed modules will be resolved from the package.json file)
4. Start the mongodb demon
	* In another terminal, change directory to bin directory of your extracted mongodb database
	* Start the demon with ./mongod
	* You can connect to the server from another terminal using ./mongo
5. Start the server with "node server.js" using the terminal created in step 3
6. Browse to http://localhost:8080

### Known Issues
1. mongodb module will not install on Windows due to the inability to compile bson. This is an issue with the bson module and not npm or this application.