### TODO

- Implement a CSS framework
- Reset password
- Tests

### Setup

- express 4
- express handlebars as motor view engine
- express router
- express session
- mysql

### Views

- index
- login
- signup
- articles
- article and comments

### Endpoints API

- /articles
- /articles/:id

### Start

- npm run start

### Seed Database

- npm run seeddata

### Debug

- DEBUG=app:\* node src/run.js
- DEBUG=\* node src/run.js

### Lint

- npm install -D eslint eslint-config-standard

### Setup Database

- mysql -u root

```mysql
create database sampledb;
create user sampleuser  identified by 'samplepass';
grant all privileges on sampledb.* to sampleuser;
flush privileges;
```
