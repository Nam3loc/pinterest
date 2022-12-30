import styled from '@emotion/styled';
// import styles from './Pin.module.css';

export default function Pin(props) {
    let {urls} = props;

    return (
        // <main className={styles.Pin}>
            // <div className="wrapper">
                // <div className="container">
            <Wrapper>
                <Container>
                    <img src={urls?.regular} alt='pin' />
                </Container>
            </Wrapper>
                // </div>
            // </div>
        // </main>
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