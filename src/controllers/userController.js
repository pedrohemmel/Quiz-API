import userModel from '../models/userModel.js'

const getUserAuthentication = async (request, response) => {
    const { username, password } = request.body
    const user = await userModel.getUserAuthentication(username)
    const { password: userPassword } = user

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
export default {
    createNewUser,
    getUserAuthentication
}