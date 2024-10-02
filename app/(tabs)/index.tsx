import Banner from '@/components/Banner';
import GameCategories from '@/components/GameCategories';
import Header from '@/components/Header';
import { MarqueeText } from '@/components/MarqueeText';
import Slider from '@/components/Slider';
import SportsCategoriesListItem from '@/components/SportsCategoriesListItem';
import { Colors } from '@/constants/Colors';
import { StyleSheet, View , Text, ScrollView} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <MarqueeText />
      <SportsCategoriesListItem />
      <Slider/>
      <GameCategories/>
      <Banner imageOne={{uri:"https://iriscdn.b-cdn.net/kheloyaar360.net/banners/12758.png"}} imageTwo={{ uri: "https://iriscdn.b-cdn.net/kheloyaar360.net/banners/6189.png"}}/>
      <Banner imageOne={{uri:"https://iriscdn.b-cdn.net/kheloyaar360.net/banners/6190.png"}} imageTwo={{ uri : "https://iriscdn.b-cdn.net/kheloyaar360.net/banners/6186.png"}}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  scrollContainer:{
    paddingBottom: 50
  },
  marqueeText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
},
});
