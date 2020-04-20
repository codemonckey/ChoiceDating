
import React, { Component } from 'react'
import api from '../api'
import img from '../images/Card_Background.png'
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
    width: 80%;
`

const Time = styled.p`
    position: absolute;
    top: 5px;
    right: 5px;
`

const Rating = styled.p`
    position: absolute;
    top: 25px;
    right: 5px;
`

const Type = styled.p`
    position: absolute;
    top: 120px;
    right: 5px;
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
    background-image: url(${img});
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

    clickHandler = async (event, id) => {
        await api.getDateById(id).then(date => {
            this.setState({
                date: date.data.data,
                isLoading: false,
            })
        })
        console.log(this.state.date);
    }
    
    renderCard(){



        return this.state.dates.map((dates, index) => {
            return(
            <Card key = {index} onClick={(event)=>{this.clickHandler(event, dates._id)}} id = {dates.id}>
            <Header>{dates.name}</Header>
            <Description>{dates.description}</Description>
            <Rating>Rating: {dates.rating}</Rating>
            <Time>Time: {dates.time}m </Time>
            <Type>Type: {dates.type}</Type>
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