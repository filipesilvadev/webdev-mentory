class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')    
        this._listaNegociacoes = new ListaNegociacoes()
        this.negociacoesView = new NegociacoesView($('#tabela-resultados'))
        this.negociacoesView.update(this._listaNegociacoes)
    }

    adiciona(evento) {
        evento.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNengociacao())
        this.negociacoesView.update(this._listaNegociacoes)
        this._limpaFormulario()
        
    }

    _criaNengociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario() {
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }
    
    
}
