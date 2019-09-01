import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subTitle: "Just go outside."
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subTitle: "Take your umbrella."
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subTitle: "Bad weather."
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#373B44", "#4286F4"],
        title: "Thunderstorm",
        subTitle: "Just don't go outside."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subTitle: "You can't see The Sun."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "D39D38"],
        title: "Dusty",
        subTitle: "Thanks a lot China."
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subTitle: "Just don't go outside."
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName}
                    size={96} color="white" />

                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer,...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    );
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",
        textAlign: "left"
    },
    textContainer:{        
        paddingHorizontal: 20,
        alignItems: "flex-start"        
    }
});