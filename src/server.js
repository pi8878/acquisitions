// All about making sure everything is set up correctly to run the express server without any issues. This includes setting the "type":
// module" field in the package.json file, using the correct file extension for modules, and making sure that the imports
// and exports are done correctly. With these changes, we should be able to run our express server without any issues.

import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
