import styled from "@emotion/styled";
import Pin from "../Pin";
import './Mainboard.module.css';
import { Link } from "react-router-dom";

export default function MainBoard(props) {
    let { pins } = props;

    return (
        // <Wrapper>
        //     <Container className="mainboard_container">
        //         {pins.map((pin, idx) => {
        //             let { urls } = pin;
        //             <Link to='/pins/:id'>
        //                 <Pin key={idx} urls={urls} />
        //             </Link>
        //         })}
        //     </Container>
        // </Wrapper>

        <div>
            {/* {
                pins.map((pin, idx) => {
                    let { urls } = pin;
                    <Link to='/pins/:id'>
                        <Pin key={idx} urls={urls} />
                    </Link>
                })
            } */}
            <Pin />
        </div>
    )
}

// const Wrapper = styled.div`
//     background-color: white;
//     display: flex;
//     justify-content: center;
//     height: 100%;
//     width: 100%;
//     margin-top: 50px;
// `

// const Container = styled.div`
//     margin: 0 auto;
//     height: 100%;
//     background-color: white;
// `