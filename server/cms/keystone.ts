// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core';

// to keep this file tidy, we define our schema in a different file
import { lists } from './schema';

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './auth';
import { postApplication } from './routes/applyForm';
const bodyParser = require('body-parser');
const cors  = require('cors');



export default withAuth(
  config({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    // db: {
    //   provider: 'postgresql',
    //   url: 'postgres://admin:12345678@localhost:5432/fastdb',
    //   onConnect: async context => { console.log("success fast") },
    //   // Optional advanced configuration
    //   // enableLogging: true,
    //   // idField: { kind: 'uuid' },
    //   // shadowDatabaseUrl: 'postgres://dbuser:dbpass@localhost:5432/shadowdb'
    // },
    server: {      
      cors: { origin: ['http://35.201.191.117'], credentials: false },
      extendExpressApp: (app, commonContext) => {
        app.use(bodyParser.json())        
        app.use(bodyParser.urlencoded({ extended: false }))
        // app.get('/_version', (req, res) => {
        //   res.send('v6.0.0-rc.2');
        // });
        app.post('/rest', async (req, res, next) => {
          (req as any).context = await commonContext.withRequest(req, res);
          next();
        });
        app.post('/rest/application',postApplication);
      }
    },
    lists,
    session,
  })
);


