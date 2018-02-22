/**
 * Retorna o alcance médio de um post ou usuário.
 *
 * @public
 * @param {int} likes Quantidade likes de um post ou usuário
 * @return {float} Alcance de um post
 */
function reach (likes) {
  return 6.058640 * likes
}

module.exports = reach
