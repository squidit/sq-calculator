const path = require('path')
const rootPath = require('app-root-dir').get()
const count = require('./operations/count')
const average = require('./operations/average')
const impressions = require('./operations/impressions')
const reach = require('./operations/reach')
const engagement = require('./operations/engagement')

class Calculator {

  /**
   * Construtor da classe
   *
   * @param {int} userPosts posts do usuário que deve ter esse formato:
   * [{upvotes: 0, comentarios: 0}]
   * @param {int} userFollowers valor inteiro do número de seguidores do usuário
   */
  constructor (userPosts, userFollowers) {
    this._mountPackageInfo()
    this._followers = userFollowers
    this._posts = userPosts

    this._likesCount = count(this._posts, 'upvotes')
    this._likesAverage = average(this._likesCount, this._posts.length)

    this._commentsCount = count(this._posts, 'comentarios')
    this._commentsAverage = average(this._commentsCount, this._posts.length)

    this._impressions = impressions(this._likesCount)
    this._reach = reach(this._likesCount)
    this._engagementRate = engagement(this._likesCount, this._commentsCount, this._posts.length, this._followers)
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
   * @return {array} Array de objetos de posts de um usuário
   */
  get posts () {
    return this._posts
  }

  /**
   * Seta o array de posts do usuário que seŕa usado nos calculos.
   *
   * @public
   * @param {array} posts Array de objetos de posts de um usuário
   */
  set posts (posts) {
    this._posts = posts
  }

  /**
   * Retorna o valor inteiro da quantidade likes de todos os posts do usuário.
   *
   * @public
   * @return {int} valor inteiro da quantidade likes de todos os posts do usuário
   */
  get likesCount () {
    return this._likesCount
  }

  /**
   * Seta o valor inteiro da quantidade likes de todos os posts do usuário.
   *
   * @public
   * @param {int} likesCount valor inteiro da quantidade likes de todos os posts do usuário
   */
  set likesCount (likesCount) {
    this._likesCount = likesCount
  }

  /**
   * Retorna o valor inteiro da quantidade comentários de todos os posts do usuário.
   *
   * @public
   * @return {int} valor inteiro da quantidade comentários de todos os posts do usuário
   */
  get commentsCount () {
    return this._commentsCount
  }

  /**
   * Seta o valor inteiro da quantidade comentários de todos os posts do usuário.
   *
   * @public
   * @param {int} commentsCount valor inteiro da quantidade comentários de todos os posts do usuário
   */
  set commentsCount (commentsCount) {
    this._commentsCount = commentsCount
  }

  /**
   * Retorna a média de likes do usuário.
   *
   * @public
   * @return {float} média de likes do usuário
   */
  get likesAverage () {
    return this._likesAverage
  }

  /**
   * Seta a média de likes do usuário.
   *
   * @public
   * @param {float} likesAverage média de likes do usuário
   */
  set likesAverage (likesAverage) {
    this._likesAverage = likesAverage
  }

  /**
   * Retorna a média de comentários do usuário.
   *
   * @public
   * @return {float} média de comentários do usuário
   */
  get commentsAverage () {
    return this._commentsAverage
  }

  /**
   * Seta a média de comentários do usuário.
   *
   * @public
   * @param {float} commentsAverage média de comentários do usuário
   */
  set commentsAverage (commentsAverage) {
    this._commentsAverage = commentsAverage
  }

  /**
   * Retorna as impressões médias.
   *
   * @public
   * @return {float} impressões médias
   */
  get impressions () {
    return this._impressions
  }

  /**
   * Seta as impressões médias.
   *
   * @public
   * @param {float} impressions impressões médias
   */
  set impressions (impressions) {
    this._impressions = impressions
  }

  /**
   * Retorna a taxa de alcance.
   *
   * @public
   * @return {float} taxa de alcance do usuário
   */
  get reach () {
    return this._reach
  }

  /**
   * Seta a taxa de alcance.
   *
   * @public
   * @param {float} reach taxa de alcance do usuário
   */
  set reach (reach) {
    this._reach = reach
  }

  /**
   * Retorna o calculo da taxa de engajamento do usuário.
   *
   * @public
   * @return {float} Calculo da taxa de engajamento do usuário
   */
  get engagementRate () {
    return this._engagementRate
  }

  /**
   * Seta o calculo da taxa de engajamento do usuário.
   *
   * @public
   * @param {float} engagementRate Calculo da taxa de engajamento do usuário.
   */
  set engagementRate (engagementRate) {
    this._engagementRate = engagementRate
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
}

module.exports = Calculator
