import styled from '@emotion/styled';
// import styles from './Pin.module.css';

export default function Pin({picture, title, description, link}) {
    // let {urls} = props;
    // const {picture, title, description, link} = this.props.pin;

    return (
            <Wrapper>
                <Container>
                    <img src={`${picture}`} alt={`${title}`} />
                    <h2>{`Title: ${title}`}</h2>
                    <p>{`Description: ${description}`}</p>
                    <p>{`Link: ${link}`}</p>
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