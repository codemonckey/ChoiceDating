import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../address.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/dates/hello">
                <img src={logo} width="50" height="50" alt="sambarros.com" />
            </Wrapper>
        )
    }
}

export default Logo