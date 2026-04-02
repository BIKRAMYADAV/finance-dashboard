const user = require('../models/userModel')

exports.createUser = async (req, res) => {
    try {
        const {name, email, role} = req.body
        if(!name || !email || !role){
            return res.status(400).json({
                message: 'name, email and role are required'
            })
        }
        const userExists = user.findOne({email})
        if(userExists){
            return res.status(400).json({
                message: 'user already exists',
            })
        }
        const newUser = await user.create({
            name, 
            email, role
        })
        return res.status(201).json({
            message: 'user created successfully',
            data: newUser
        })
    } catch (error){
        console.log('There was an error in creating the users', error)
        return res.status(500).json({
            message : 'server error',
            error
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const users = await user.find()
        return res.status(200).json({
            message: 'users fetched successfully',
            data: users
        })
    } catch (error){
        console.log('server error while getting user', error)
        res.status(500).json({
            message: 'server error'
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const {id} = req.params 
        const {role, status} = req.body 
        if(!role && !status) {
            return res.status(400).json({
                message: 'at least one field (role or status) is required'
            })
        }
        const existinguser = await user.findById(id)
        if(!existinguser){
            return res.status(400).json({
                message: 'user does not exist'
            })
        }
        if(role) user.role = role
        if(status) user.status= status

        await user.save()
        return res.status(200).json({
            message: 'user updated successfully',
            data: user 
        })
    } catch (error) {
        console.log('server error')
        res.status(500).json({
            message: 'server error'
        })
    }
}