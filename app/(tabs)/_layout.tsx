import { Tabs } from 'expo-router';
import React from 'react';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
//pega as preferencias salvas no navegador/dispositivo do usuario (dark mode, etc)
import { Appearance } from 'react-native';

//pega o tema (dark ou light)
export const theme = Appearance.getColorScheme() === 'dark' ? Colors.dark : Colors.light;

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerStyle:{
          backgroundColor: theme.headerBackground
        },
        headerTintColor: theme.text,
        headerShadowVisible:false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false,
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown:true,
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="item"
        options={{
          headerShown:true,
          title: 'Item',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
