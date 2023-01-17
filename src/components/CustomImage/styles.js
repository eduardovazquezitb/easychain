import styled from '@emotion/styled'

export const Frame = styled.div`
    width: 100%;
    height: fit-content;
    height: wrap-content;
    * {
        background-color: transparent;
    }
`

export const FrameInner = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    text-align: center;
`

export const FlipCardFront = styled.div`
    width: 100%;
    height: fit-content;
    transition: 0.7s;
    opacity: ${props => props.hover ? '0' : '1'};
`

export const FlipCardBack = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: fit-content;
    color: ${props => props.theme.colors.primary};
    opacity: ${props => props.hover ? '1' : '0'};
    transition: 0.7s;
`

// Some problems with this part but we'll fix it
export const SingleImage = styled.img`
    width: 100%;
    height: auto;
`
