
const INITIAL_STATE = {
    description: 'Ler Livro',
    user: {
        nomeusuario: "",
        loginusuario: "",
        senhausuario: "",
        ativo: true,
        tmdataultimoacesso: null
    },
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_CHANGED':
            const user = { ...state.user }
            user[action.payload.name] = action.payload.value
            return { ...state, user: user }
        case 'READ_USER':
            return { ...state, list: action.payload.data }
        case 'CREATE_USER':
            return {
                ...state, user: {
                    nomeusuario: "",
                    loginusuario: "",
                    senhausuario: "",
                    ativo: true,
                    tmdataultimoacesso: null
                }
            }
        case 'CLEAR_USER':
            return {
                ...state, user: {
                    nomeusuario: "",
                    loginusuario: "",
                    senhausuario: "",
                    ativo: true,
                    tmdataultimoacesso: null
                }
            }
        default:
            return state

    }
}