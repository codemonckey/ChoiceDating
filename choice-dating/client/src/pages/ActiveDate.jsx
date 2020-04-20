import React, { Component } from 'react'
import img from '../images/Card_Background.png'
import styled from 'styled-components'
import api from '../api'

const Name = styled.p`

`

const Description = styled.p`
    
`

const Time = styled.div`
    
`

const Rating = styled.p`
    
`

const Button = styled.a`
   background-color: white;
   font: bold 24px Arial;
   text-color: black;
   width: 100px;
   heigh: 60px;
   border-top: 1px solid #CCCCCC;
   border-right: 1px solid #333333;
   border-bottom: 1px solid #333333;
   border-left: 1px solid #CCCCCC;
   margin: 5px;
`

const Wrapper = styled.div`
text-align: center;
background-image: url(${img});
border 1px solid black;
margin: 20px;
`
const Label = styled.p`
    
`

const Div = styled.div`
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
text-align: center;
`
const InputText = styled.input`
    margin: 5px;
    wdith: 120px;
`


class ActiveDate extends Component {

    constructor(props) {
        super(props)
        const { data } = this.props.location
        this.state = {
            id: data._id,
            name: data.name,
            description: data.description,
            rating: data.rating,
            type: data.type,
            time: data.time,
            temp_rating: '',
        }
    }

    submitRating = async event => {
        let average = (this.state.temp_rating + this.state.rating)/2;
        console.log(this.state.temp_rating );
        console.log(average);
        this.handleUpdateMovie();
    }

    handleChangeInputRating = async event => {
        const temp_rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

            this.setState({ temp_rating })
    }

    handleUpdateMovie = async event => {
        const { id, name, description, time } = this.state
        var type, rating;
        if((this.state.type).includes('**')){
        type = (this.state.type).substring(0,this.state.type.length-2);
        }
        else if((this.state.type).includes('*')){
        type = this.state.type + '*';
        }
        else{
        type = this.state.type;
        }
        rating = (this.state.rating + this.state.temp_rating)/2;
        if(rating > 10){
            rating = 10;
        }
        const payload = { name, description, rating, type, time}
        console.log(payload);
        console.log(id);
        await api.updateDateById(id, payload).then(res => {
            window.alert(`Date updated successfully`)
            this.setState({
                name: '',
                description: '',
                rating: '',
                type: '',
                time: '',
            })
        })
        this.props.history.push('/dates/hello');
    }

    render() {
        return (
            <Div>
            <Wrapper>
                <Name>{this.state.name}</Name>
                <Description>{this.state.description}</Description>
                <Time><b>Expected Time:</b> {this.state.time}</Time>
                <Rating><b>Rating:</b> {this.state.rating}</Rating>
            </Wrapper>
            <Wrapper>
            <Button href ={'/dates/hello'}>Home</Button>

            <Label>Submit Rating When Completed: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={this.state.temp_rating}
                    onChange={this.handleChangeInputRating}
                />
                <button onClick={this.submitRating}>Submit</button>
            </Wrapper>
            </Div>
        )

}
}

export default ActiveDate