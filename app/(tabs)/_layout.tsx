import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const CustomCenterButton = ({ children, onPress }: { children: React.ReactNode; onPress?: (e: any) => void }) => (
    <TouchableOpacity style={styles.whatsappButton} onPress={onPress}>
      <View style={styles.glowingCircle}>
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.gold,
        tabBarInactiveTintColor: Colors.white,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: Colors.primary,
          height: 60,
          paddingBottom: 10,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Casinos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="whatsapp"
        options={{
          tabBarButton: (props) => (
            <CustomCenterButton {...props}>
              <Ionicons name="logo-whatsapp" size={25} color={Colors.white} />
            </CustomCenterButton>
          ),
        }}
      />
      <Tabs.Screen
        name="sports"
        options={{
          title: 'Sports',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'basketball' : 'basketball-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'grid' : 'grid-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  whatsappButton: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
  },
  glowingCircle: {
    width: 45,
    height: 45,
    borderRadius: 35,
    backgroundColor: Colors.whatsappGreen,
    justifyContent: 'center',
    alignItems: 'center',

  },
});
