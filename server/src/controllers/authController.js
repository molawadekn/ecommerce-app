import Login from '../models/loginModel.js';

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Login.findOne({ where: { username, password } });

  if (user) {
    req.session.user = user;
    res.json({ message: 'Logged in successfully' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to log out' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
};