/*
const Component = require('./Component');
const lodash = require('lodash');
require('./styles.css'); */

import lodash from 'lodash';
import './styles.css';
import useless, * as MyMath from './MyMath';
import Component from './Component';
import renderUserCard from './UserCard';
console.log(useless);

console.log(MyMath);

const component = new Component();
component.render();
console.log(lodash.random(0,200));
console.log('test');

const user = {
  name: 'Ivan Ivanov',
  description: 'lorem123',
}

renderUserCard(user)