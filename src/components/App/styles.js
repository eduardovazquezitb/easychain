import styled from '@emotion/styled'

export const Frame = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
`

export const HighlightTitle = styled.h1`
    color: ${props => props.theme.colors.highlight};
`

export const ContentWrapper = styled.div`
    padding: 5px;
    margin: auto;
    @media (min-width: 800px){
        width: 90%;
    }
    @media (min-width: 1340px){
        max-width: 1349px;
    }
`
