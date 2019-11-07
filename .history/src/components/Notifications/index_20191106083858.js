import * as React from 'react';
import styled from 'styled-components';
// import Container from 'reactstrap/lib/Container';
const Container = style.div`
    background-color: #444;
    color: white;
    padding: 16px;
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 999;
    transition: top 0.5s ease;
`;

export default class Notifications extends React.Component {
    render(){
        return(
            <Container>Example text here</Container>
        )
    }
}