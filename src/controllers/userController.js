import userModel from '../models/userModel.js'

const getUserAuthentication = async (request, response) => {
    const { username, password } = request.body
    const user = await userModel.getUserAuthentication(username)

    if (!user) {
        return response.status(404).json({ message: "User not found." });
    }

    const { password: userPassword } = user;

    if(password == userPassword) {
        return response.status(200).json(user)
    } else {
        return response.status(409).json({message: "E-mail or password are invalid."})
    }
}

const createNewUser = async (request, response) => {
    const createdUser = await userModel.createNewUser(request.body)
    return response.status(201).json(createdUser)
}

const updateUserPoints = async (request, response) => {
    const {id, points} = request.body
    const updatedUser = await userModel.updateUserPoints(id, points)
    return response.status(201).json(updatedUser)
}
export default {
    createNewUser,
    getUserAuthentication,
    updateUserPoints
}