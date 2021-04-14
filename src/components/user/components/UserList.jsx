import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { read_user } from '../actions/UserActions'

class UserList extends Component {

    constructor(props) {
        super(props)
        //console.log(props.list)
        this.props.read_user()
    }


    render() {

        const renderRows = () => {
            const list = this.props.list || []
            return list.map(user => (
                <tr key={user.idusuario}>
                    <td>{user.idusuario}</td>
                    <td>{user.nomeusuario}</td>
                    <td>{user.loginusuario}</td>
                </tr>
            ))
        }

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Login</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.usercrud.list
    }
}

function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({ read_user }, dispatch)
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList)