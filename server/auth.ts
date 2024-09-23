
import { statelessSessions } from '@keystone-6/core/session';
import { config, list } from '@keystone-6/core';
import { text, password, checkbox } from '@keystone-6/core/fields';
import { createAuth } from '@keystone-6/auth';


const { withAuth } = createAuth({
  // Required options
  listKey: 'tUsers',
  identityField: 'username',
  secretField: 'password',
});

const sessionMaxAge = 60 * 60 * 24 * 30
const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: process.env.SESSION_SECRET,
})

export { withAuth, session }
