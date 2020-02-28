# Mitraistest-backend

## Rest Full API 
Server technology use Node JS Javascript language
Standart javascript lints use airbnb guide lines
Another plugin use @babel/plugin-transform-flow-strip-types take a look (https://babeljs.io)

## Table of Contents
- [Database](#database)
- [API](#api)
- [Test unit](#testunit)

## Database
Use tools sequelize to manage the database, take a look (https://sequelize.org/v5/). Make sure install sequelize-cli with:

```bash
$ npm install --save-dev sequelize-cli
```

Run boilerplate sequelize

```bash
$ yarn sequelize-mysql init
```

> **Note**: Directory reserved by sequelize boilerplate inside of src/ config migrations models and seeders. sequelize-mysql command inside package.json create already. 

## API
Registration API including data
```
{
    mobileNumber: String,
    firstName: String,
    lastName: String,
    dob: DATETIME,
    gender: Number,
    email: String
}
```

The url api available on 
(https://mitrais.heroku.com/api/v1/registration)

## Test unit
To run test unit scenario

```bash
$ yarn test
```