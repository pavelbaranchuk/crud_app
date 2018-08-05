# CRUD Application

Basic CRUD application that allows you to:
* Create a comment
* Edit comment
* Delete comment (You will need to confirm this action in a popup)
* You wil be able to click the "Reply button" and create a reply to an existing message. This reply will be saved to a database but will not be shown on UI (will be implemented in a future releases)
* Scroll-to-the-top functionality was added for convenience
* Web app is responsive
* Empty field validation is built in
* You are allowed to choose avatars in "jpg" & "png" formats only (validated on client, server validation will be added soon)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You would need the following software installed on your computer

```
Node
MongoDB 3.2.20
Loopback
React
```

### Installing

A step by step series of examples that tell you how to get a development env running

Let's install mongodb:

```
install MongoDB
cd into bin
mongod --direcrotyperdb--dbpath [your mongodb location]\data\db --logpath [your mongodb location]\log\mongo.log --logappend --rest --install
net start MongoDB
```
Let's install loopback

```
npm install -g loopback-cli
"use windows command prompt in case you will not see the questions/options to choose from"
lb
(?What's the name of your application?) commentz
(?What loopback version do you3 use?) 3.x
(?What kind of application do you have in mind?) api-server

npm install --save loopback-connector-mogodb
lb datasource mongoDS --connector mongoDB
(?Enter the datasource name:) mongoDS
(?Select the connector for mongoDS:) MongoDB
(?host:) localhost
(?port:) 27017
(?database:) commentz-app

lb model
(?Name:) comments
(?Choose:) db
(?Model:) PersistedModel
(?Expose comments via REST API:) Yes
(?Common or server:) Common
(?Model:) PersistedModel

(?Properties:) comment
string
required
(?Properties:) name
string
required
(?Properties:) avatarka
string
required
(?Properties:) replies
array
not required

lb datasource
(?Name) local-storage
(?Connector) other
(?Connector's module name) loopback-component-storage
(?Install) Yes

lb model
(?Name) Container
(?Choose) local-storage
(?Expose) Yes
(?Common) common

npm start
```
Let's create react app
```
cd client_src
npm install -g create-react-app
create-react-app .
npm start
```
here is the picture of an application that you will see https://www.screencast.com/t/hXQOMofy2

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Loopback](https://loopback.io/) - The Node framework used
* [MongoDB](https://www.mongodb.com/) - Used to store the data

## Author

* **Pavel Baranchuk**
