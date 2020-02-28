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
This database use mysql, take a look (https://github.com/mysqljs/mysql)

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
(https://mitrais.heroku.com/auth/signup)

## Test unit
To run test unit scenario

```bash
$ yarn test
```