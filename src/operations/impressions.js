/**
 * Retorna as impressões média de um post ou usuário.
 *
 * @public
 * @param {int} likes Quantidade likes de um post ou usuário
 * @return {float} Impressões de um post
 */
function impressions (likes) {
  return 8.305094 * likes
}

module.exports = impressions
