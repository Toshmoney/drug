const User = require("../model/User")
const Drug = require("../model/Drug")

const dashboardData = async (user) => {
    const userDrug = await Drug.findOne({
        user: user._id
    })

    const userProfile = await User.findOne({
        email : user.email
    })

    const user_data = {
        name: user.name,
        email: user.email,
    }
    const data = {
        user: user_data,
        drug: userDrug,
        profile : userProfile
    }
    
    return data
}

module.exports = dashboardData;