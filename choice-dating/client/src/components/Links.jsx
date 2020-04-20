import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})`
`

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/dates/hello" className="navbar-brand">
                    Idea->Fresh
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/dates/list" className="nav-link">
                                List Date Ideas
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/dates/submit" className="nav-link">
                                Submit Date Idea
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/dates/favorites" className="nav-link">
                                Top Rated Dates
                            </Link>
                        </Item>          
                        <Item>
                            <Link to="/dates/tests" className="nav-link">
                                Test Proposed Dates
                            </Link>
                        </Item>                 
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links