import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeUser, add_user, clear_user } from '../actions/UserActions'


function UserForm(props) {

    return (
    

        <div className="form">
            <div className="row" >
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" className="form-control"
                            name="nomeusuario"
                            value={props.user.nomeusuario}
                            onChange={props.changeUser}
                            placeholder="Digite o nome"
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="form-group col-12 col-md-3">
                    <label>Login:</label>
                    <input type="text" className="form-control"
                        name="loginusuario"
                        value={props.user.loginusuario}
                        onChange={props.changeUser}
                        placeholder="Digite o Login"
                    />
                </div>
                <div className="form-group col-12 col-md-3">
                    <label>Senha:</label>
                    <input type="password" className="form-control"
                        name="senhausuario"
                        value={props.user.senhausuario}
                        onChange={props.changeUser}
                        placeholder="Digite a senha"
                    />
                </div>
            </div>
            <hr />

            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary"
                        onClick={() => props.add_user(props.user)}>
                        Salvar
                        </button>

                    <button className="btn btn-secondary ml-2"
                        onClick={() => props.clear_user()}
                    >
                        cancelar
                        </button>
                </div>
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        user: state.usercrud.user
    }
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({ changeUser, add_user, clear_user }, dispatch)
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(UserForm)