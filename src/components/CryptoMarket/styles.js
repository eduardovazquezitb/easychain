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
    @media (max-width: 800px){
        margin-left: auto;
        margin-right: auto;
        font-size: ${props => props.theme.sizes.small};
    }
`

export const TableHeader = styled.thead`
    text-align: left;
    * {
        border: 1px solid ${props => props.theme.colors.disabled};
        border-style: none none solid none;
    }
`

export const LastColumnHeader = styled.th`
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
    @media (max-width: 800px){
        margin-left: 0px;
        margin-right: 15px;
    }
`

export const BodyRow = styled.tr`
`

export const FlexBox = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
`

export const Header = styled.div`
    flex: 0 1 auto;
`

export const Content = styled.div`
    flex: 1 1 auto;
    position: relative;
`

export const StyledImage = styled.img`
    width: 25px;
    height: 25px;
`

export const LogoPlusName = styled.td`
    *{
        display: inline;
        margin-right: 10px;
    }
`
export const PercentageChange = styled.td`
    color: ${props => props.isPositive ? props.theme.colors.positive : props.theme.colors.negative};
`

export const PercentageChangeLast = styled(PercentageChange)`
    text-align: right;
`
