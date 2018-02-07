/**
 * Retorna a média.
 *
 * @public
 * @param {int} sum Soma dos elementos
 * @param {int} quantity Quantidade total de elementos comtemplados
 * @return {float} Média
 */
function average (sum, quantity) {
  return (quantity > 0) ? sum / quantity : 0
}

module.exports = average
