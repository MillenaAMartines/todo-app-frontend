

const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar Fatura do cartão',
        done: true
    }, {
        _id: 2,
        description: 'Prova Regimental',
        done: false

    }, {
        _id: 3,
        description: 'Consulta Media Quarta',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
            default: 
            return state
    }
}