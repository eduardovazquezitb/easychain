import styled from '@emotion/styled'

export const Frame = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    with:100%;
    height: 100%;
    perspective: 1000px;
    height: wrap-content;
`

export const FrameInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    ${props => props.hover ? 'transform: rotateY(180deg);' : ''}
`

export const FlipCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: ${props => props.theme.colors.secondary};;
    color: black;
`

export const FlipCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};;
    transform: rotateY(180deg);
`

// Some problems with this part but we'll fix it
export const SingleImage = styled.img`
    width: 100%;
    height: ${props => props.hidden ? '5px;' : ' auto;'}; 
`
