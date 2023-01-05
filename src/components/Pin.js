import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { indexPin } from '../utilities/pin-api';
// import styles from './Pin.module.css';

export default function Pin(props) {
    // let { picture, title, description, link } = props;
    const {picture, title, description, link} = this.props.pinDetails;
    // console.log(props.pin)

    const handleChange = (evt) => {
        this.props.pinDetails(evt.target.value);
    }

    return (
        <Wrapper>
            <Container>
                <img src={`${picture}`} alt={`${title}`} onChange={handleChange} />
                <h2 onChange={handleChange}>{`Title: ${title}`}</h2>
                <p onChange={handleChange}>{`Description: ${description}`}</p>
                <p onChange={handleChange}>{`Link: ${link}`}</p>
            </Container>
        </Wrapper>

        // <div>
        //     <img>src={`${picture}`} alt={`${title}`}</img>
        //     <h2>{`Title: ${title}`}</h2>
        //     <p>{`Description: ${description}`}</p>
        //     <p>{`Link: ${link}`}</p>
        // </div>
    )
}

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;
    img {
        display: flex;
        width: 100%;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }   
`