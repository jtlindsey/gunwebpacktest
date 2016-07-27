/*
import React from 'react';
import ReactDOM from 'react-dom';
*/



require('gun');
var endpoints;
var gun = Gun(endpoints);
gun.path('name.first').put('Dave')
gun.put({Hello:"world"}).key('Hello');  // Store a json { Hello: 'World'} at path 'Hello'

var HelloContainer = gun.get('Hello');  // Retrieve json from key 'Hello'
HelloContainer.on(function(data){
	console.log(data);       // Retrieve json from key 'Hello'
});

/*
ReactDOM.render(
  React.createElement('h1', null, 'Hello from gundb!'),
  document.getElementById('gundb')
);
*/
