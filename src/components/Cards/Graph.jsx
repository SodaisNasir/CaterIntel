import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";

import { Color } from "../../utils/Color";
import { LineChart } from "react-native-chart-kit";
import { GlobalStyle } from "../../Constants/GlobalStyle";
import { scale } from "react-native-size-matters";

const Graph = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: Color.Main,
          backgroundGradientFrom: Color.Main,
          backgroundGradientTo: Color.ThemeDarkGreen,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: Color.Main,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: scale(10),
          alignSelf: "center",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Graph;
