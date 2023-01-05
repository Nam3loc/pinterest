import styled from "@emotion/styled";
import Pin from "../Pin";
import './Mainboard.module.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { indexPin } from "../../utilities/pin-api";
import EditPin from '../../pages/EditPin/EditPin';
import DeletePin from "../DeletePin/DeletePin";

export default function MainBoard(props) {

    const [createdPins, setCreatedPins] = useState('');

    useEffect(function () {
        console.log('in useEffect')
        async function getPins() {
            const fetchingPins = await indexPin();
            setCreatedPins(fetchingPins);
        }
        getPins();
        console.log(createdPins)
    }, []);

    return (
        //     <Wrapper>
        //         <Container className="mainboard_container">
        //             <div>
        //                 {createdPins[0].picture} <br /><br />
        //                 {createdPins[0].title} < br /> <br />
        //                 {createdPins[0].description} <br /><br />
        //                 {createdPins[0].link}
        //             </div>
        //      </Container>
        //      {/* <EditPin />
        //      <DeletePin /> */}
        //  </Wrapper>

        <div>
            {
            createdPins &&
            createdPins.map((pin, idx) => {
                <Link to='/pins'>
                    <Pin pin={pin} />
                </Link>
                })
            }
            {createdPins[0].picture} <br /><br />
            {createdPins[0].title} < br /> <br />
            {createdPins[0].description} <br /><br />
            {createdPins[0].link}
            <br />
            <br />
            <EditPin />
            <br />
            <br />
            <DeletePin />
        </div>
    )
}

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 50px;
`

const Container = styled.div`
    margin: 0 auto;
    height: 100%;
    background-color: white;
`