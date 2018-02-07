const path = require('path')
class Calculator {

    /**
   * Construtor da classe
   */
  constructor () {
    this._mountPackageInfo()
  }

  /**
   * Monta as informações internas do pacote
   * @private
   * @return void
   */
  _mountPackageInfo () {
    /* istanbul ignore next */
    this._packageName = require(path.join(require('app-root-dir').get(), 'package.json')).name || 'Unknown package'
    /* istanbul ignore next */
    this._packageVersion = require(path.join(require('app-root-dir').get(), 'package.json')).version || '0.0.0'
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
   * Seta a versão do pacote do usuário que será usado
   *
   * @public
   * @param {string} version Versão do pacote
   */
  set packageVersion (version) {
    this._packageVersion = version
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
   * Retorna a versão do pacote do usuário que será usado
   *
   * @public
   * @return {string} Versão do pacote
   */
  get packageVersion () {
    return this._packageVersion
  }

}

module.exports = Calculator
