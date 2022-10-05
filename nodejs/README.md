# nodejs boilerplate
simple rest API using nodejs, express, docker, and sequelize

## folder explanation
1. ``` mysql ``` init sql and docker file sql
2. ``` app ``` our source app for building api

## instalation
1. clone this project 
2. install docker
3. cd into our project
   ```
   cd nodejs
   ```
4. type in terminal
   ```
   docker-compose up
   ```

## unit-test
run unit test using this command
```
npm run test
```

## api
```
GET  localhost:6500/v1/user  get all user
POST localhost:6500/v1/user  insert new user
```