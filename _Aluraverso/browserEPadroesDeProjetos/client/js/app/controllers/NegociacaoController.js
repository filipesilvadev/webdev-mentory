class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')    
        this._listaNegociacoes = new ListaNegociacoes(
            model => this._negociacoesView.update(model)
        )

        this._negociacoesView = new NegociacoesView($('#tabela-resultados'))
        this._negociacoesView.update(this._listaNegociacoes)

        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagens'))
        this._mensagemView.update(this._mensagem)

    }

    adiciona(evento) {
        evento.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNengociacao())
        
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem)
        
        this._limpaFormulario()
    }

    _criaNengociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    deleta() {
      this._listaNegociacoes.deleta();
  
      this._mensagem.texto = 'Negociações apagadas com sucesso';
      this._mensagemView.update(this._mensagem);
  }

    _limpaFormulario() {
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }
    
    
}
