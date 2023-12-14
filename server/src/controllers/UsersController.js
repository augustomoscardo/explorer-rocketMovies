const { hash, compare } = require('bcryptjs')
const AppError = require('../utils/AppError')

const sqliteConnection = require("../database/sqlite");
const e = require('express');

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    if (!name) {
      throw new AppError('O nome é obrigatório');
    }

    //conect DB
    const database = await sqliteConnection()
    const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    //check if user exists
    if (checkUserExists) {
      throw new AppError('Este e-mail já está em uso')
    }

    //Encrypt password
    const hashedPassword = await hash(password, 8)

    //if user don't exist => insert into table
    await database.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    )

    return response.status(201).json({ message: 'Usuário cadastrado com sucesso' })
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const user_id = request.user.id

    //conect DB
    const database = await sqliteConnection()

    //check if found user: if not return
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [user_id])

    if (!user) {
      throw new AppError('Usuário não encontrado.')
    }

    //get the email of the found user
    const userEmailAlreadyExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    //check if e-mail is in use and check user from params is different from user from email
    if (userEmailAlreadyExists && userEmailAlreadyExists.id !== user.id) {
      throw new AppError('Este e-mail já está em uso.')
    }

    //If user has not informed name and email in request => use name and email from user found with request.params
    user.name = name ?? user.name
    user.email = email ?? user.email

    //check if user informed password, if true must inform old_passowrd in the request
    if (password && !old_password) {
      throw new AppError('Você precisa informar a senha antiga para definir a nova senha.')
    }

    //check if password and old_password matches.
    if (password && old_password) {
      const checkPassword = await compare(old_password, user.password)

      if (!checkPassword) {
        throw new AppError('A senha antiga não confere.')
      }

      user.password = await hash(password, 8)
    }

    //update user
    await database.run(`
      UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        updated_at = DATETIME('now')
      WHERE id = (?)
    `, [user.name, user.email, user.password, user_id])

    return response.json({ message: 'Usuário atualizado!', user })
  }
}

module.exports = UsersController