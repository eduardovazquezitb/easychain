import styled from '@emotion/styled'

export const StyledForm = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    @media (max-width: ${props => props.theme.sizes.phoneSize}) {
        flex-direction: column;
        align-items: stretch;
    }

    * {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        font-size: ${props => props.theme.sizes.normal};
    }

    * {
        @media (max-width: ${props => props.theme.sizes.phoneSize}) {
            flex-direction: column;
            align-items: stretch;
            font-size: ${props => props.theme.sizes.phoneNormal};
      }
    }
`

export const StyledInput = styled.input`
    vertical-align: middle;
    margin: 0;
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.disabled};
    @media (max-width: ${props => props.theme.sizes.phoneSize}) {
        margin-bottom: 5px;
    }
`

export const StyledSelect = styled.select`
    vertical-align: middle;
    margin: 0;
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.disabled};
    @media (max-width: ${props => props.theme.sizes.phoneSize}) {
        margin-bottom: 5px;
    }
`

export const StyledOption = styled.option`
    vertical-align: middle;
    margin: 0;
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.disabled};
    @media (max-width: ${props => props.theme.sizes.phoneSize}) {
        margin-bottom: 5px;
    }
`

export const StyledSubmit = styled.input`
    padding: 10px 20px;
    margin: 0;
    background-color:  ${props => props.theme.colors.highlight};
    border: 1px solid ${props => props.theme.colors.disabled};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.colors.strongHighlight};
    }
    @media (max-width: ${props => props.theme.sizes.phoneSize}) {
        margin-bottom: 5px;
    }
`
