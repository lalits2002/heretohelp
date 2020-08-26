import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions, Alert } from "react-native";

import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const CalenderComponent = () => {
  const getMarkedDate = () => {
    return new Date().toISOString().substring(0, 10);
  };

  const [markedDate, nextOne] = useState(getMarkedDate());

  return (
    <CalendarList
      onDayPress={(day) => {
        nextOne(day.dateString);
      }}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={0}
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
          selectedColor: "blue",
        },
      }}
      theme={{
        backgroundColor: "#f2f2f2",
        calendarBackground: "#f2f2f2",
        textSectionTitleColor: "#011131",
      }}
    />
  );
};

export default CalenderComponent;
