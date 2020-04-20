import React, { Component } from 'react'
import api from '../api'
import img from '../images/Card_Background.png'
import styled from 'styled-components'
import Dropdown from 'react-dropdown';

const options = [
    'Date', 'Friends'
  ];

let type;

const Wrapper = styled.div`
width: 50%;
height: 200px;
text-align: center;
background-image: url(${img});
border: 1px solid black;
margin: 20px;
`

const Selector = styled.div`
width: 50%;
height: 200px;
text-align: center;
background-image: url(${img});
border: 1px solid black;
margin: 20px;
`
const Text = styled.div`
  font-weight: bold;
`

const Button = styled.button`
width: 200px;
height: 100px;
text-align: center;
margin: 10px;
color: white;
font-size: 24px;
background-color: darkblue;
border-radius: 4%;
`

const DropDown = styled(Dropdown)`
position: absolute;
left: 14.5%;
    text-align: center;
    width: 200px;
    border: 1px solid #e5e5e5;
    background-color: darkblue;
    color: white;
`
const Div = styled.div`
    text-align: center;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 60%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`
class DateTests extends Component {
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
            if((this.state.dates[i].type).includes(type) && (this.state.dates[i].type).includes("*")){
                sorted.push(this.state.dates[i]);
            }
        }
        if(sorted.length > 0){
        const date = sorted[Math.floor(Math.random() * sorted.length)];
        this.props.history.push({pathname: '/dates/active', data: date});
        }
        else{
            window.alert("There is no open things to test, you could submit your own!");
            return;
        }
    }

    handleChangeInputType  = async (event) => {
        type = event.label
    }

    render() {
        return (
            <Div>
                <Wrapper>
                    <Text>This is using dates that have no been considered worthy for public yet</Text>
                    <Text><br/>Please feel free to leave poor reviews on awful posts and to leave astounding reviews on great ones.</Text>
                </Wrapper>
                <Selector>
                    <Button onClick={this.RandomDate} href={'/dates/submit'}>I'm bored</Button>
                    <DropDown options={options} onChange={this.handleChangeInputType} value={type} placeholder="Select a Type" />
                </Selector>
            </Div>
        )
    }
}

export default DateTests