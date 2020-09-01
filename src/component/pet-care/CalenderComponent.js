import React, { useState } from "react";
import { View, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import Colors from "../../Items/Colors";

const CalenderComponent = (props) => {
  const getMarkedDate = () => {
    return new Date().toISOString().substring(0, 10);
  };

  const [markedDate, nextOne] = useState(getMarkedDate(null));
  // this is added if user doesn't happen to select any value
  props.dateGetter(markedDate);

  return (
    <View style={{}}>
      <CalendarList
        onDayPress={(day) => {
          nextOne(day.dateString);
          props.dateGetter(day.dateString);
        }}
        horizontal={true}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={2}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={12}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        minDate={getMarkedDate()}
        markedDates={{
          [markedDate]: {
            selected: true,
            marked: true,
            selectedColor: Colors.primary2,
          },
        }}
        theme={{
          backgroundColor: "black",
          calendarBackground: "#ffffff",
          textMonthFontWeight: "bold",
          monthTextColor: Colors.primary2,
          textMonthFontSize: 22,
          textDayFontSize: 15,
        }}
      />
    </View>
  );
};

export default CalenderComponent;
