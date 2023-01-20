import { useState } from 'react'
import { StyledForm, StyledSelect, StyledInput, StyledSubmit, StyledOption } from './styles'

const FilterInput = ({ options = [], onChange = null }) => {
  const [propIndex, setPropIndex] = useState(0)
  const propKey = options[propIndex].name
  let propValue = options[propIndex].type === 'text' ? '' : options[propIndex].options[0]

  const handleSubmit = (event) => {
    event.preventDefault()
    const prop = { key: propKey, value: propValue }
    if (onChange) { onChange({ prop }) }
  }

  const InputSelect = () => {
    if (options[propIndex].type === 'text') {
      return (
        <StyledInput
          type='text'
          placeholder='search...'
          defaultValue={propValue}
          onChange={(e) => { propValue = e.target.value }}
          data-testid='filter-input-text'
        />
      )
    }
    return (
      <StyledSelect
        onChange={(e) => { propValue = e.target.value }}
        defaultValue={propValue}
        data-testid='filter-input-select'
      >
        {options[propIndex].options.map((option, index) =>
          <StyledOption key={index} value={option} data-testid='filter-input-option'>
            {option}
          </StyledOption>
        )}
      </StyledSelect>
    )
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputSelect />
      <StyledSelect
        onChange={(e) => { setPropIndex(e.target.selectedIndex) }}
        defaultValue={0}
        data-testid='filter-select-element'
      >
        {options.map((option, index) =>
          <StyledOption key={index} value={option.name} data-testid='filter-select-option'>
            {option.name}
          </StyledOption>
        )}
      </StyledSelect>
      <StyledSubmit type='submit' data-testid='submit-button' />
    </StyledForm>
  )
}

export default FilterInput
