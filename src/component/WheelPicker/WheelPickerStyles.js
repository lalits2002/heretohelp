import Colors from '../../Items/Colors';

const WheelPickerStyles = {
  selectionFrame: (offset, itemHeight) => ({
      position: 'absolute',
      width: '100%',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: Colors.picker_border,
      top: offset * itemHeight,
      height: itemHeight,
  })
}

export default WheelPickerStyles;