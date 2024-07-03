import jwt from 'jsonwebtoken'

const secret = "myCat"

const payload = {
    sub: 1
}

const singToken = (payload, secret) => {
    return jwt.sign(payload, secret)
}

export { singToken}