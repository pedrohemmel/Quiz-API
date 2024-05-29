import connection from '../helpers/dbConnection.js'


const getUserAuthentication = async (username) => {
    console.log("\n\n\n\n\nOi " + username + "\n\n\n\n\n")
    const [user] = await connection.execute('SELECT id, name, username, password, points FROM user WHERE username = ?', [username])
    console.log("\n\n\n\n\nOI\n\n\n\n\n")
    return user[0]
}

const createNewUser = async (user) => {
    const { name, username, password, points } = user
    const query = 'INSERT INTO user (name, username, password, points) VALUES (?, ?, ?, ?)'
    const [createdUser] = await connection.execute(query, [name, username, password, points])
    return {insertId: createdUser.insertId}
}

export default {
    createNewUser,
    getUserAuthentication
}