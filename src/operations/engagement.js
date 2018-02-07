/**
 * Retorna o calculo de engajamento.
 *
 * @public
 * @param {int} likesCount Total de likes
 * @param {int} commentsCount Total de comentários
 * @param {int} postsLength Total de posts
 * @param {int} followers Total de seguidores
 * @return {float} Taxa de engajamento
 */
function engagement (likesCount, commentsCount, postsLength, followers) {
  return (postsLength > 0 && followers > 0) ? ((likesCount + commentsCount) / postsLength) / followers : 0
}

module.exports = engagement
