import React, { useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SmoothPicker from "react-native-smooth-picker";

const dataCity = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const opacities = {
  0: 1,
  1: 1,
  2: 0,
  3: 0,
  4: 0,
};
const sizeText = {
  0: 22,
  1: 15,
  2: 7,
};

const Item = React.memo(({ opacity, selected, vertical, fontSize, name }) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          opacity,
          borderColor: selected ? "#64666D" : "transparent",
          width: vertical ? 200 : "auto",
        },
      ]}
    >
      <Text style={{ fontSize }}>{name}</Text>
    </View>
  );
});

const ItemToRender = ({ item, index }, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 4) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  return (
    <Item
      opacity={opacity}
      selected={selected}
      vertical={vertical}
      fontSize={fontSize}
      name={item}
    />
  );
};

const Hour = (props) => {
  function handleChange(index) {
    setSelected(index);
    refPicker.current.scrollToIndex({
      animated: false,
      index: index,
      viewOffset: -50,
    });
  }

  const [selected, setSelected] = useState(0);
  const refPicker = useRef(null);
  // this is added if user doesn't happen to select any value
  props.getHour(dataCity[selected]);

  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.selected}

      <View style={styles.wrapperVertical}>
        <SmoothPicker
          initialScrollToIndex={selected}
          refFlatList={refPicker}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={dataCity}
          scrollAnimatio={false}
          onSelected={({ item, index }) => {
            handleChange(index);
            props.getHour(item);
          }}
          selectOnPress={true}
          renderItem={(option) => ItemToRender(option, selected, true)}
          magnet={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#F5FCFF',
  },
  wrapperVertical: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    color: "black",
    // backgroundColor: '#218291',
  },
  OptionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    marginBottom: 3,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    height: 55,
    borderWidth: 3,
    borderRadius: 10,
  },
});

export default Hour;
