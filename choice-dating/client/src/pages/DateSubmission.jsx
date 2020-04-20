import React, { Component } from 'react'
import Dropdown from 'react-dropdown';
import api from '../api'

import styled from 'styled-components'

const options = [
    'Date', 'Friends'
  ];

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 30px 30px;
`

const Label = styled.label`
    margin: 5px;
`

const Label1 = styled.label`
    margin: 5px;
    margin-top: 55px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

const DropDown = styled(Dropdown)`
    margin: 15px 15px 15px 5px;
    min-width: 150px;
    position: absolute;
    z-index: 1000;
    flex-direction: column;
    border: 1px solid #e5e5e5;
    background-color: white;

`

class DateSubmission extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            rating: '',
            type: '',
            time: '',
        }
    }
    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputTime = async event => {
        const time = event.target.validity.valid
        ? event.target.value
        : this.state.time
        
        this.setState({ time })
    }

    handleChangeInputType = async event => {
        const type = event.label
        this.setState({ type })
    }

    handleChangeInputDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }


    handleIncludeDate = async () => {
            this.state.rating = 0;
            this.state.type= this.state.type + "*";
            const { name, description, type, rating, time } = this.state
            const payload = { name, description, type, rating, time}
    
            await api.insertDate(payload).then(res => {
                window.alert(`Movie inserted successfully`)
                this.setState({
                    name: '',
                    description: '',
                    rating: '',
                    type: '',
                    time: '',
                })
            })
        }


    render() {
        const defaultOption = this.state.type
        //const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
        const { name, description, type, time } = this.state

        console.log(this.state);
        return (
            <Wrapper>
                <Title>Submit New Date Idea!</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                
                <Label>Description: </Label>
                <InputText
                    type="text"
                    value={description}
                    onChange={this.handleChangeInputDescription}
                />

                <DropDown options={options} onChange={this.handleChangeInputType} value={defaultOption} placeholder="Select a Type" />

                <Label1>Time (Minutes) : </Label1>
                <InputText
                    type="number"
                    lang="en-US"
                    min="0"
                    max="600"
                    pattern="^([1-5][0-9][0-9]|600)$"
                    value={time}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleIncludeDate}>Add Date</Button>
                <CancelButton href={'/dates/list'}>Cancel</CancelButton>

            </Wrapper>
        )
    }
}

export default DateSubmission