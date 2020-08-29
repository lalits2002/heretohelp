import React, { useState } from "react";
import { View, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const CalenderComponent = () => {
  const getMarkedDate = () => {
    return new Date().toISOString().substring(0, 10);
  };

  const [markedDate, nextOne] = useState(getMarkedDate(null));

  return (
    <View style={{
      flex: 1,
      marginTop: '25%'
    }}>

      <CalendarList
        onDayPress={(day) => {
          nextOne(day.dateString);
        }}

       
        horizontal={true}
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
          backgroundColor: "black",
          calendarBackground: "white",
          textSectionTitleColor: "#011131",
          monthTextColor: 'blue',
          textMonthFontSize: 28,
        }}
      />
      <Text> {markedDate} </Text>
    </View>
  );
};

export default CalenderComponent;
