// setting up the right express server with the right imports and exports is a common issue when using node modules. 
// This is because of the way node handles modules and the different ways to import and export them. In this case, we 
// are using the ES6 module syntax, which requires us to use the "type": "module" field in our package.json file. T
// his tells node that we are using ES6 modules and allows us to use the import and export syntax. Additionally, 
// we need to make sure that we are using the correct file extension for our modules, which is .js for JavaScript files. 
// With these changes, we should be able to run our express server without any issues.

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello from aquisitions!');
});

export default app;