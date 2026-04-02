const Record = require('../models/recordModel')

exports.summary = async (req, res) => {
    try {
        const records = await Record.find({userId: req.user.id})
        let totalIncome = 0
        let totalExpense = 0

        const categoryMap = {}

        records.forEach(record => {
            const amount = record.amount
            if(record.type == "income"){
                totalIncome += amount
            } else if (record.type == "expense"){
                totalExpense += amount
            }
            if(!categoryMap[record.category]){
                categoryMap[record.category] = 0
            }
            categoryMap[record.category] += amount
        })
        const categoryToArray = Object.keys(categoryMap).map(category => ({
            category,
            total: categoryMap[category]
        }))

        const recentTransaction = await record.find({
            userId: req.user.id 
        }).sort({date: -1}).limit(5)

        return res.status(200).json({
            message: 'dashboard summary fetched successfully',
            data: {
                totalIncome,
                totalExpense,
                netBalance: totalIncome-totalExpense,
                categoryToArray,
                recentTransaction
            }
        })

    } catch (error) {
        console.log('There was an error in getting the summary', error)
        res.status(500).json({
            message: 'server error',
            error
        })
    }
}