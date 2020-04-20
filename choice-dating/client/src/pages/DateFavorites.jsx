
import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Header = styled.p`
    postition: absolute;
    top: 5px;
    left: 5px;
    font-size: 125%;
    font-weight: bold;
`
const Description = styled.p`
    position: absolute;
    top: 25px;
    left: 5px;
`

const Time = styled.p`
    position: absolute;
    top: 5px;
    right: 5px;
`

const Rating = styled.p`

`

const Type = styled.p`

`

const Card = styled.div`
    border: 3px solid black;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    float: left;
    width: 40%;
    height: 150px;
    margin-right: 5%;
    margin-left: 5%;
    margin-top 10px;
`

const Wrapper = styled.div`
    > :hover{
        background: #ddd;
        cursor: pointer; 
    }
`

class DateFavorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dates: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllDates().then(dates => {
            this.setState({
                dates: dates.data.data,
                isLoading: false,
            })
        })
    }
    renderCard(){
        return this.state.dates.map((dates, index) => {
            return(
            <Card>
            <Header key = {dates.name}>{dates.name}</Header>
            <Description key = {dates.description}>{dates.description}</Description>
            <Rating key = {dates.rating}>{dates.rating}</Rating>
            <Time key = {dates.time}>{dates.time}m</Time>
            <Type key = {dates.type}>{dates.type}</Type>
            </Card>
            )
        });
    }

    render() {
        return (
            <Wrapper>
                {this.renderCard()}
            </Wrapper>
        )
    }
}

export default DateFavorites