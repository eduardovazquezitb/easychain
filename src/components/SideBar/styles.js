import styled from '@emotion/styled'

export const Frame = styled.ul`
    padding: 50px 30px 0 15px;
    height: 100%;
    position: fixed !important;
    z-index: 1;
    overflow: auto;
    border: 1px solid ${props => props.theme.colors.disabled};
    border-style: none solid none none;
    *{
        padding: 15px;
        font-size: ${props => props.theme.sizes.phoneNormal};
    }
    @media (max-width: 1750px){
        * {
            padding: 0;
            margin-bottom: 15px;
        }
    }
`

export const ListItem = styled.li`
    display: block;
    width: 100%;
    margin-left: 15px;
    :link{
        text-decoration: none;
        color: ${props => props.theme.colors.highlight};
    }
    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
    :visited{
        color: ${props => props.theme.colors.primary};
    }
    @media (max-width: ${props => props.theme.sizes.phoneSize}){
        margin-left: 0px;
        margin-right: 15px;
    }
`
