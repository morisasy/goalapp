const asynchandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')
// @desc  Get getGoals
// @route Get /api/goals
// @access Private
const  getGoals = asynchandler(async(req, res) =>{
  const goals = await Goal.find({user: req.user.id})
   res.status(200).json(goals)
})


// @desc  POST setGoals
// @route POST /api/goals
// @access Private
const  setGoal = asynchandler(async(req, res) =>{
  if (!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  })
  res.status(200).json(goal)
})


// @desc  UPDATE getGoals
// @route UPDATE /api/goals/:id
// @access Private
const  updateGoal = asynchandler(async(req, res) =>{
   const goal = await Goal.findById(req.params.id)
   if(!goal){
     res.status(400)
     throw new Error('Error not found')
   }

   //const user = await User.findById(req.user.id)
   // check for user
   if (!req.user){
     res.status(401)
     throw new Error('User not found')
   }

   // make sure the logged in user matches the goal user
   if(goal.user.toString() !== req.user.id){
     res.status(401)
     throw new Error('User not authorized')
   }


   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})
   res.status(200).json(updatedGoal)
})

// @desc  DELETE getGoals
// @route DELETE /api/goals/:id
// @access Private
const  deleteGoal = asynchandler(async(req, res) =>{
  const goal = await Goal.findById(req.params.id)
  if(!goal){
    res.status(400)
    throw new Error('Error not found')
  }

     //const user = await User.findById(req.user.id)
     // check for user
     if (!req.user){
       res.status(401)
       throw new Error('User not found')
     }

     // make sure the logged in user matches the goal user
     if(goal.user.toString() !== req.user.id){
       res.status(401)
       throw new Error('User not authorized')
     }

  await goal.remove()
   res.status(200).json({id: req.params.id})
})



module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}
