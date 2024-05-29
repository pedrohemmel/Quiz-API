import connection from '../helpers/dbConnection.js'


const getUserAuthentication = async (username) => {
    const [user] = await connection.execute('SELECT id, name, username, password, points FROM user WHERE username = ?', [username])
    return user[0]
}

const createNewUser = async (user) => {
    const { name, username, password, points } = user
    const query = 'INSERT INTO user (name, username, password, points) VALUES (?, ?, ?, ?)'
    const [createdUser] = await connection.execute(query, [name, username, password, points])
    return {insertId: createdUser.insertId}
}

const updateUserPoints = async (id, points) => {
    console.log("updated")
    const query = 'UPDATE user SET points = ? WHERE id = ?'
    const [updatedUser] = await connection.execute(query, [points, id])
    return updatedUser
}

export default {
    createNewUser,
    getUserAuthentication,
    updateUserPoints
}