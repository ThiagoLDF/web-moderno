import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Thiago" sobrenome="Lucena">
            <Filho nome="Davi" />
        </Pai>
    </div>,
    document.getElementById('root'))