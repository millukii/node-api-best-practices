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
