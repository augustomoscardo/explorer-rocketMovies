const { sign } = require('jsonwebtoken')
const { compare } = require('bcryptjs')

const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const authConfig = require('../configs/auth')


class SessionsController {
  async create(request, response) {
    const { email, password } = request.body

    //check user exists
    const user = await knex("users").where({
      email
    }).first()

    if (!user) { throw new AppError("E-mail e/ou senha incorreta", 401) }

    //check password match
    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreta", 401)
    }

    //generate token
    const { secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return response.json({ user, token })
  }
}

module.exports = SessionsController