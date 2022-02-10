const jwt = require('jsonwebtoken')
const asynchandler = require('express-async-handler')
const User = require('../models/userModel')


const protect = asynchandler(async (req, res, next) => {
  //let token = req

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      // Get token from headers
      token = req.headers.authorization.split('')[1]

      // verify token
      const decoded = jwt.verify(toke, process.env.JWT_SECRET)

      // GeT user from the token
      req.user = await User.findById(decoded.id).select('-password')
      next()
    }catch(error){
      console.log(error)
      res.status(401)
      throw new Error('Unauthorized')

    }

  }
  if(!token){
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})


module.exports = {protect}
