const Q = require('@nmq/q/client');

const db = new Q('database');

db.subscribe('delete', payload => {
  console.log('delete happened', payload);
});
db.subscribe('create', payload => {
  console.log('create happened', payload);
});
db.subscribe('update', payload => {
  console.log('update happened', payload);
});
db.subscribe('get', payload => {
  console.log('get happened', payload);
});
