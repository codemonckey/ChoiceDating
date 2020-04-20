
import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    position: relative;
    left: 25%;
`

const H1 = styled.h1`
    margin-top: 40px;
    text-align: center;
    font-family: arial, sans-serif;
`

const Table = styled.tbody`
    text-align: center;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border: 3px solid #ddd;
    width: 100%;
    > :nth-child(2n+1){
        background: #f2f2f2;
      }
    > :hover{
        background: #ddd;
        cursor: pointer; 
    }
`

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: darkBlue;
    color: white;
    
`

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`

class DatesList extends Component {
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

    handleDetails = async event => {
        console.log();
    }

    renderTableHeader() {
        return  (
        <tr key = "title">
            <Th key="0">Name</Th>
            <Th key="1">Description</Th>
            <Th key="2">Type</Th>
            <Th key="3">Time</Th>
            <Th key="4">Rating</Th>
        </tr>
        )
     }

    renderTableData() {
    
        return this.state.dates.map((dates, index) => {
           const { id, name, description, type, time, rating } = dates
           let tempDesc = description;
           if(description.length > 25){
           tempDesc = description.substring(0, 20) + "...";
           }
           let tempName = name;
           if(name.length > 25){
            tempName = name.substring(0, 20) + "...";
            }
           if(type === "Date" || type === "Friends"){
           return (
              <tr onClick={this.handleDetails} key={index} data-item={id}>
                 <Td key={id}>{tempName}</Td>
                 <Td key={id}>{tempDesc}</Td>
                 <Td key={id}>{type}</Td>
                 <Td key={id}>{time}</Td>
                 <Td key={id}>{rating}</Td>
              </tr>
           );
           }
        })
     }

    render() {
        const { dates, isLoading } = this.state
        console.log('TCL: DatesList -> render -> dates', dates)

        return (
            <div>
            <H1 id='title'>Date Ideas</H1>
            <Wrapper>
            <table id='dates'>
               <Table>
                  {this.renderTableHeader()}
                  {this.renderTableData()}
               </Table>
            </table>
            </Wrapper>
            </div>
        )
    }
}

export default DatesList