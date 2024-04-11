import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} name="search" size={size} />
          ),
        }}
      />
        <Tabs.Screen
            name="wishlist"
            options={{
            tabBarLabel: "Wishlist",
            tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name="heart" size={size} />
            ),
            }}
        />
        <Tabs.Screen name="trips"
        options={{
            tabBarLabel:"Trips",
            tabBarIcon: ({color, size })=><FontAwesome5 color={color} name="airbnb" size={size} />
        }} />
        <Tabs.Screen name="inbox" 
        options={{
            tabBarLabel:"Inbox",
            tabBarIcon: ({color, size })=><MaterialCommunityIcons color={color} name="message-outline" size={size} />
        }} />
        <Tabs.Screen name="profile" 
        options={{
            tabBarLabel:"Profile",
            tabBarIcon: ({color, size })=><Ionicons color={color} name="person-circle-outline" size={size} />
        }}/>
    </Tabs>
  );
};

export default Layout;
