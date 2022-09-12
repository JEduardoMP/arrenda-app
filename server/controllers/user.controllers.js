const arrendaModels = require('../models/index.models')

// (/user).post
const postUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await arrendaModels.user.findOne({
      email,
      password
    })
    if (!user) {
      const newUser = new arrendaModels.user({
        email,
        password,
      });
      await newContact.save();
      const nUser = await arrendaModels.user.findOne({
        email,
        password
      })
      res.cookie('userId', nUser._id)
      res.status(202).json({
        message: 'User created as successfully',
        id: nUser._id
      })
    } else {
      res.cookie('userId', user._id)
      res.status(202).json({
        message: 'User created as successfully',
        id: user._id
      }) 
    }
  } catch (e) {
    next(e)
  }
}

module.exports = {
  postUser,
}