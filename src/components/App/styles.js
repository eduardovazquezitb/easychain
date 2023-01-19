import styled from '@emotion/styled'

export const Frame = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url('${props => props.background}'); 
    background-size: cover;
`

export const ContentWrapper = styled.div`
    padding: 5px;
    margin: auto;
    height: 100%;
    @media (min-width: 800px){
        width: 90%;
    }
    @media (min-width: 1340px){
        max-width: 1349px;
    }
`
