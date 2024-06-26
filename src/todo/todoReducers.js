

const INITIAL_STATE = {
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
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
    
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}
