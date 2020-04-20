import React, { Component } from 'react'
import api from '../api'
import img from '../images/Card_Background.png'
import styled from 'styled-components'
import Dropdown from 'react-dropdown';

const options = [
    'Date', 'Friends'
  ];

let type;

const Button = styled.button`
    width: 200px;
    height: 100px;
    text-align: center;
    background-image: url(${img});
    border-radius: 4%;
`
const Wrapper = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

const DropDown = styled(Dropdown)`
    margin: 15px 15px 15px 5px;
    min-width: 150px;
    position: absolute;
    top: 100%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    flex-direction: column;
    border: 1px solid #e5e5e5;
    background-color: white;
`

class FrontPage extends Component {
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


    RandomDate = async (event) => {

        if(type != "Friends" && type != "Date"){
            window.alert(`Must Pick Type`);
            return;
        }

        var sorted = [];
        for(let i=0; i< this.state.dates.length; i++){
            if((this.state.dates[i].type).includes(type)){
                sorted.push(this.state.dates[i]);
            }
        }

        const date = sorted[Math.floor(Math.random() * sorted.length)];
        this.props.history.push({pathname: '/dates/active', data: date});
    }

    handleChangeInputType  = async (event) => {
        type = event.label
    }

    render() {
        return (
            <Wrapper>
                <Button onClick={this.RandomDate} href={'/dates/submit'}>I'm bored</Button>
                <DropDown options={options} onChange={this.handleChangeInputType} value={type} placeholder="Select a Type" />
            </Wrapper>
        )
    }
}

export default FrontPage