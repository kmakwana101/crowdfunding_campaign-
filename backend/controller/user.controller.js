let USER = require('../model/user.model')

exports.Login = async (req, res) => {
  try {
    const { username, password, category } = req.body
    if (!username, !password, !category) throw new Error('please enter valid fields')

    if (category === "owner") {
      req.body.campaignOwner = true
    } else {
      req.body.donator = true
    }

    let user = await USER.create(req.body)

    res.status(201).json({
      status: "success",
      message: "user create successfully",
      user
    })

  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message
    })
  }
}