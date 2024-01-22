let CAMPAIGN = require('../model/campaign.model')

exports.add = async (req, res) => {
    try {
        const { username, amount, expirationDate } = req.body
        if (!username, !amount, !expirationDate) throw new Error('please enter valid fields')
        
        let user = await CAMPAIGN.create(req.body)
        console.log(req.body);

        res.status(201).json({
            status: "success",
            message: "campaign create successfully",
            user
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
};

exports.show = async (req, res) => {
    try {

        let user = await CAMPAIGN.find()

        res.status(201).json({
            status: "success",
            data : user
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
};

exports.donate = async (req, res) => {
    try {
        console.log(req.body);
        const data = await CAMPAIGN.findByIdAndUpdate(
            req.query.id,
            { $inc: { donatedAmount: Number(req.body.donatedAmount) } },
            { new: true }
        );

        res.status(201).json({
            status: "success",
            data
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
};