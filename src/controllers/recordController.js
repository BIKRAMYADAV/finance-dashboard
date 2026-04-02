exports.createRecord = async (req, res) => {
     try {
        const { amount, type, category, date, notes } = req.body
        if (!amount || !type || !category || !date) {
            return res.status(400).json({
                message: 'amount, type, category and date are required'
            })
        }
        const newRecord = await Record.create({
            amount,
            type,
            category,
            date,
            notes,
            userId: req.user.id//for ownership
        })
        return res.status(201).json({
            message: 'record created',
            data: newRecord
        })
    } catch (error) {
        console.log('error creating record', error)
        return res.status(500).json({
            message: 'server error',
            error
        })
    }
}

exports.getRecord = async (req, res) => {
    try {
        const {type, category, endDate, startDate} = req.body 
        const filter = {
            userId: req.user.id 
        }
        if(type){
            filter.type = type
        }
        if(category){
            filter.category = category 
        }
        if(endDate || startDate) {
            filter.date = {}
            if(startDate){
                filter.date.$gte = new Date(startDate)
            }
            if(endDate){
                filter.date.$lte = new Date(endDate)
            }
        }
        const records = await Record.find(filter).sort({date: -1})
        return res.status(200).json({
            message: 'record retrieved successfully',
            data: records
        })
    } catch (error){
        console.log('There was an error in getting records', error)
        res.status(500).json({
            message: 'server error',
            error
        })
    }
}