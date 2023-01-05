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
    // const pinId = props.pin.id;

    useEffect(function () {
        console.log('in useEffect')
        async function getPins() {
            const fetchingPins = await indexPin();
            setCreatedPins(fetchingPins);
        }
        getPins();
        console.log(createdPins)
    }, []);

    const loaded = () => {

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
                <EditPin id={createdPins[0]._id} />
                <br />
                <br />
                <DeletePin id={createdPins[0]._id} />
            </div>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        createdPins ? loaded() : loading()
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