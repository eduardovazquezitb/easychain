import styled from '@emotion/styled'

export const Frame = styled.nav`
    margin: auto;
    @media (min-width: ${props => props.theme.sizes.phoneSize}){
        width: calc(90% - 200px);
    }
    @media (min-width: 1340px){
        max-width: 1349px;
    }
    height: 3.5rem;
    direction: rtl;
    position: relative;
    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.highlight};
    border-style: none none solid none;
    *{
        vertical-align: middle;
        display: inline;
        margin-right: 0.5vw;
        :hover{
            cursor: pointer;
        }
    }
`

export const StyledImage = styled.img`
    height: 100%;
    width: auto;
`

export const Title = styled.div`
    font-size: ${props => props.theme.sizes.big};
`

export const SideBarButton = styled.img`
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 0.25rem;
    left: 0.25rem;
    background-color: red;
`
