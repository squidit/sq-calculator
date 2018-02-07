/**
 * Retorna o calculo de engajamento.
 *
 * @public
 * @param {int} likesCount Total de likes
 * @param {int} commentsCount Total de comentários
 * @param {int} postsLenght Total de posts
 * @param {int} followers Total de seguidores
 * @return {float} Taxa de engajamento
 */
function engagement (likesCount, commentsCount, postsLenght, followers) {
  return (postsLenght > 0 && followers > 0) ? ((likesCount + commentsCount) / postsLenght) / followers : 0
}

module.exports = engagement
