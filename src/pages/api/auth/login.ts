import auth0 from '@/lib/auth0';

export default async (req, res) => {
  try {
    if(req.query.redirectTo === '/') req.query.redirectTo = '/?loggedin=true';

    await auth0.handleLogin(req, res);
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
};
