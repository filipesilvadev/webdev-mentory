class ListaNegociacoes{
    constructor(armadinha){
        this._negociacoes = []
        this._armadilha = armadinha
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao)
        this._armadilha(this)
    }

    deleta(){
      this._negociacoes = []
      this._armadilha(this)
    }

    get negociacoes() {
      return [].concat(this._negociacoes)
  }

}