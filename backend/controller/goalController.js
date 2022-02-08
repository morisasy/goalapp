const asynchandler = require('express-async-handler')
// @desc  Get getGoals
// @route Get /api/goals
// @access Private
const  getGoals = asynchandler(async(req, res) =>{
   res.status(200).json({message: 'Get goals'})
})


// @desc  POST setGoals
// @route POST /api/goals
// @access Private
const  setGoal = asynchandler(async(req, res) =>{
  if (!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({message: 'Set goals'})
})


// @desc  UPDATE getGoals
// @route UPDATE /api/goals/:id
// @access Private
const  updateGoal = asynchandler(async(req, res) =>{

   res.status(200).json({message:`Update goal ${req.params.id}`})
})

// @desc  DELETE getGoals
// @route DELETE /api/goals/:id
// @access Private
const  deleteGoal = asynchandler(async(req, res) =>{
   res.status(200).json({message:`Delete goal ${req.params.id}`})
})



module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}
