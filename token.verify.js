import jwt from 'jsonwebtoken'

const secret = "myCat"

const verifyToken = (token, secret) => {
    return jwt.verify(token, secret)
}

export { verifyToken}