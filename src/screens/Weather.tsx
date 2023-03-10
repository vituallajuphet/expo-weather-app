import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, RefreshControl, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import axios from 'axios'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';

export const Weather = () => {
  const [result, setResult] =useState<any>(undefined)

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const tw = useTailwind()
  const [fontsLoaded] = useFonts({
    'Levitation': require('../../assets/fonts/Levitation.otf'),
    'RachelBrown': require('../../assets/fonts/RachelBrown.otf'),
  });

  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/current.json?key=9b0f565dc91a4716bbd75427231003&q=cebu&aqi=no').then(res => {
      setResult(res.data)
    })
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log('loaded')
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  
  if(!result) {
    return <View>
      <Text>Loading...</Text>
    </View>
  }

  const { location, current } = result

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}  />
      }
      contentContainerStyle={styles.scrollView}
    >
    <View style={tw('flex-col items-center bg-yellow-200 flex-1')} onLayout={onLayoutRootView}>
            <View style={tw('flex-[3] items-center justify-center')}>
              <View style={tw('items-center justify-center')}>
                <Text style={[styles.heading, tw('text-gray-700 text-[25px]')]}>Location</Text>
                <Text style={[styles.text, tw('text-gray-600 mt-2 text-[18px]')]}>{location.region + ' ' + location.country}</Text>
              </View>

              <View style={tw('justify-center items-center mt-10')}>
                <View>
                  <Text style={[styles.text, tw('text-gray-600 text-[100px] font-normal')]}>{current.temp_c}</Text>
                  <Text style={tw('absolute right-[-1.5rem] top-[-1rem] text-[70px] text-gray-600')}>°</Text>
                </View>
                <Text style={[styles.text, tw('text-gray-600 text-[18px] font-normal')]}>{current.condition.text}</Text>
              </View>
            </View>
            

            
            <View style={tw('flex-[1]')}>
              <Text>Location: Cebu</Text>
            </View>
            <View style={tw('flex-[1]')}>
              <Text>Location: Cebu</Text>
            </View>
        </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Levitation',
  },
  text: {
    fontFamily: 'RachelBrown',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
})
