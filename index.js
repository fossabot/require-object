'use strict';

/* This is not the NPM module. This is the testing environment. For the module go to ./simulated-node_modules/require-object. This file will change a lot as it is not part of the core NPM module, Do not expect it to behave nicely, It's just here for debugging. */

const path = require('path');

const root = require(path.resolve(__dirname, 'simulated-node_modules', 'require-object'));

// console.log(root);

/* This is just to make sure this testing environment exists
before continuing with tests. */
module.exports = 'hPfYDvYxb6srd2a0ixzjqQi1IchENnOU';
