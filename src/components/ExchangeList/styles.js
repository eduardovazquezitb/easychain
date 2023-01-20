import styled from '@emotion/styled'

export const Frame = styled.table`
    margin-top: 15px;
    width: 85%;
    border-collapse:separate;
    border-spacing:0 10px;
    * {
        vertical-align: middle;
        font-size: ${props => props.theme.sizes.normal};
    }
    @media (max-width: ${props => props.theme.sizes.phoneSize}){
        margin-left: auto;
        margin-right: auto;
    }
`

export const Header = styled.thead`
    text-align: left;
`

export const LastColumnHeader = styled.th`
    text-align: right;
`

export const LastColumnBody = styled.td`
    text-align: right;
`

export const Hyperlink = styled.a`
    margin-left: 15px;
    :link{
        text-decoration: none;
        color: ${props => props.theme.colors.highlight};
    }
    :hover {
        text-decoration: underline;
    }
    :visited{
        color: ${props => props.theme.colors.primary};
    }
    @media (max-width: ${props => props.theme.sizes.phoneSize}){
        margin-left: 0px;
        margin-right: 15px;
    }
`

export const BodyRow = styled.tr`
`
