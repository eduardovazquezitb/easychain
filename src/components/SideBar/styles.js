import styled from '@emotion/styled'

export const Frame = styled.div`
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

export const ListItem = styled.div`
    width: 100%;
    :hover{
        cursor: pointer;
    }
`
