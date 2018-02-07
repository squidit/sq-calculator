const path = require('path')
const rootPath = require('app-root-dir').get()

class Calculator {

  /**
   * Construtor da classe
   */
  constructor (userPosts, userFollowers) {
    this._mountPackageInfo()
    this._followers = userFollowers
    this._posts = userPosts
  }

  /**
   * Retorna o nome do pacote do usuário que será usado
   *
   * @public
   * @return {string} Nome do pacote
   */
  get packageName () {
    return this._packageName
  }

  /**
   * Seta o nome do pacote do usuário que será usado
   *
   * @public
   * @param {string} name Nome do pacote
   */
  set packageName (name) {
    this._packageName = name
  }

  /**
   * Retorna a versão do pacote do usuário que será usado
   *
   * @public
   * @return {string} Versão do pacote
   */
  get packageVersion () {
    return this._packageVersion
  }

  /**
   * Seta a versão do pacote do usuário que será usado
   *
   * @public
   * @param {string} version Versão do pacote
   */
  set packageVersion (version) {
    this._packageVersion = version
  }

  /**
   * Retorna o número de followers que será usado nos calculos.
   *
   * @public
   * @return {int} Número de followers
   */
  get followers () {
    return this._followers
  }

  /**
   * Seta o número de followers que será usado nos calculos.
   *
   * @public
   * @param {int} followers Número de followers
   */
  set followers (followers) {
    this._followers = followers
  }

  /**
   * Retorna o array de posts do usuário que seŕa usado nos calculos.
   *
   * @public
   * @return {array} Array de objetos dos posts de um usuário
   */
  get posts () {
    return this._posts
  }

  /**
   * Seta o array de posts do usuário que seŕa usado nos calculos.
   *
   * @public
   * @param {array} posts Array de objetos dos posts de um usuário
   */
  set posts (posts) {
    this._posts = posts
  }

  /**
   * Monta as informações internas do pacote
   * @private
   * @return void
   */
  _mountPackageInfo () {
    this._packageName = require(path.join(rootPath, 'package.json')).name || 'Unknown package'
    this._packageVersion = require(path.join(rootPath, 'package.json')).version || '0.0.0'
  }

  /**
   * Retorna o total de um tipo de dado de acordo com o tipo especificado.
   *
   * @private
   * @param {array} posts Array de Objeto de posts
   * @param {string} field Tipo de campo a retornar o total
   * @return {int} Número total da informação solicitada
   */
  _getTotal (posts, field) {
    return posts.reduce((init, item) => init + item[field] || 0, 0)
  }

  /**
   * Retorna todos os dados calculados com as informações passadas no construtor.
   *
   * @public
   * @return {Object} Objeto de elementos calculados.
   */
  calculate () {
    var likesCount = 0
    var commentsCount = 0
    var likeAverage = 0
    var commentAverage = 0
    var engagementRate = 0

    if (this._posts.lenght > 0) {
      likesCount = this._getTotal(this._posts, 'upvotes')
      commentsCount = this._getTotal(this._posts, 'comentarios')
      likeAverage = likesCount / this._posts.length
      commentAverage = commentsCount / this._posts.length

      if (this._followers > 0) {
        engagementRate = ((likesCount + commentsCount) / this._posts.length) / this._followers
      }
    }

    return {
      likes: {
        count: likesCount,
        average: likeAverage
      },
      comments: {
        count: commentsCount,
        average: commentAverage
      },
      engagementRate: engagementRate
    }
  }
}

module.exports = Calculator
