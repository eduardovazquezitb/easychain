import styled from '@emotion/styled'

export const Frame = styled.div`
    width: 100%;
    height: fit-content;
    display: block;
    margin: auto;
    text-align: center;
    position: relative;
`

export const Title = styled.h1`
    position: absolute;
    font-size: ${props => props.theme.sizes.veryBig};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.7s;
    opacity: ${props => props.hover ? '1' : '0'};
`

export const StyledImage = styled.img`
    transition: 0.7s;
    opacity: ${props => props.hover ? '0' : '1'};
    @media (max-width: 800px){
        width: 100%;
        height: auto;
    }
`
