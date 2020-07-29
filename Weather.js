import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#215f00", "#e4e4d9"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#decba4", "#3e5151"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#d7d2cc", "#304352"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#525252", "#3d72b4"],
    title: "Cloudy",
    subtitle: "that's cool",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{Math.floor(temp)}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
    "Fog",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
