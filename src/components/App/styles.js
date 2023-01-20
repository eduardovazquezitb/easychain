import styled from '@emotion/styled'

export const Frame = styled.div`
    position: relative;
    width: 100vw;
    height: fit-content;
    min-height: 100vh;
    background-image: url('${props => props.background}'); 
    background-repeat: repeat;
    background-size: cover;
`

export const ContentWrapper = styled.div`
    padding: 5px;
    margin: auto;
    min-height: calc(100vh - 3.5rem);
    @media (min-width: ${props => props.theme.sizes.phoneSize}){
        width: calc(85% - 200px);
        padding-left: 15px;
        padding-right: 15px;
    }
    @media (min-width: 1340px){
        max-width: 1349px;
    }
`
