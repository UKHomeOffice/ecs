'use strict';

process.env.NODE_ENV = 'test';

global.reqres = require('hof').utils.reqres;

global.chai = require('chai');
global.should = chai.should();
global.expect = chai.expect;
