/**
 * Retorna a porcentagem de um número
 *
 * @public
 * @param {float} number Número a ser calculado a porcentagem
 * @param {int} percent Porcentagem a ser calculada
 * @return {float} Porcentagem calculada do número informado
 */
function percentage (number, percentage) {
  return number * (percentage / 100)
}

module.exports = percentage
