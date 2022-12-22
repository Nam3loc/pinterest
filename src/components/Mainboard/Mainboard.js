import styled from "@emotion/styled";
import Pin from "../Pin";
import './Mainboard.module.css';

export default function MainBoard(props) {
    let { pins } = props;

    return (
        <Wrapper>
            <Container className="mainboard_container">
                {pins.map((pin, idx) => {
                    let { urls } = pin;
                    return <Pin key={idx} urls={urls} />
                })}
            </Container>
        </Wrapper>
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