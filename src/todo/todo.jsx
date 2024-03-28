import React, { Component } from 'react'

import PageHeader from '../templete/pageheader'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
            </div>
        )
    }
}
