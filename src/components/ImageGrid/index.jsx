import { FlexBox, FlexColumn, FlexCell } from './styles'

const ImageGrid = ({ children, parts = 3 }) => {
  const distributedSlice = []
  for (let i = 0; i < children.length; i += children.length / parts) {
    distributedSlice.push(children.slice(i, i + children.length / parts))
  }
  return (
    <FlexBox>
      {distributedSlice.map((columnData, index) =>
        <FlexColumn key={index}>
          {columnData.map((image, index) =>
            <FlexCell key={index}>
              {image}
            </FlexCell>
          )}
        </FlexColumn>
      )}
    </FlexBox>
  )
}

export default ImageGrid
