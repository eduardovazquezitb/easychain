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
    height: calc(100% - 3.5rem);
    @media (min-width: ${props => props.theme.sizes.phoneSize}){
        width: calc(85% - 200px);
        padding-left: 15px;
        padding-right: 15px;
    }
    @media (min-width: 1340px){
        max-width: 1349px;
    }
`
