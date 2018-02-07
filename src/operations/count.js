/**
 * Retorna o total de um dado de post com variação no tipo especificado.
 *
 * @public
 * @param {array} posts Array de Objeto de posts
 * @param {string} field Tipo de campo a retornar o total
 * @return {int} Número total da informação solicitada
 */
function count (posts, field) {
  return posts.reduce((init, item) => init + item[field] || 0, 0)
}

module.exports = count
