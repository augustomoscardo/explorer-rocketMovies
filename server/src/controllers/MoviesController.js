const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class MoviesController {
  async index(request, response) {
    //extract user_id, title or tags from query
    const { title, tags } = request.query
    const user_id = request.user.id

    let movies;

    //if user informed tags, search using them and title (if informed). If not, just get the movies by user_id and title (if informed)
    if (tags) {
      const filterTags = tags.split(',').map(tag => tag.trim()) //[ 'aventura', 'ação' ]

      //select movies.td, movies.title & movies.user_id
      //where movies.user_id = user_id
      //where movies.title like %title%
      //where tags.name in title
      //join movies table when movies.id = tags.movie_id
      movies = await knex('tags')
        .select(['movies.id', 'movies.title', 'movies.description', 'movies.rating', 'movies.user_id', 'movies.created_at', 'movies.updated_at'])
        .where('movies.user_id', user_id)
        .whereLike('movies.title', `%${title}%`)
        .whereIn('name', filterTags)
        .innerJoin('movies', 'movies.id', 'tags.movie_id')
        .orderBy('movies.title')
    } else {
      // select * from movies
      //where movies.user_id = user_id
      // where movies.title like %title%
      movies = await knex('movies')
        .where({ user_id })
        .whereLike('title', `%${title}%`)
        .orderBy('title')
    }

    const userTags = await knex('tags').where({ user_id })
    const moviesWithTags = movies.map(movie => {
      const movieTags = userTags.filter(tag => tag.movie_id === movie.id)

      return {
        ...movie,
        tags: movieTags
      }
    })

    return response.json(moviesWithTags)
  }

  async create(request, response) {
    const { title, description, rating, tags } = request.body
    const user_id = request.user.id

    if (rating < 1 || rating > 5) {
      throw new AppError('Insira uma nota entre 1 e 5.')
    }

    const [movie_id] = await knex('movies').insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return {
        movie_id,
        name,
        user_id
      }
    })

    await knex('tags').insert(tagsInsert)

    return response.status(201).json({ message: 'Filme cadastrado com sucesso' })
  }

  async show(request, response) {
    const { id } = request.params

    const movie = await knex('movies').where({ id }).first()
    const tags = await knex('tags').where({ movie_id: id }).orderBy('name')
    const author = await knex('users').where({ id: movie.user_id }).first()

    return response.json({
      ...movie,
      author: author,
      tags
    })
  }

  async delete(request, response) {
    const { id } = request.params

    await knex('movies').where({ id }).delete()

    return response.status(201).json({ message: 'Filme deletado com sucesso.' })
  }

}

module.exports = MoviesController