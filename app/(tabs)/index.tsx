import GameCategories from '@/components/GameCategories';
import Header from '@/components/Header';
import HorizontalMenu from '@/components/HorizontalMenu';
import { MarqueeText } from '@/components/MarqueeText';
import SportsCategoriesListItem from '@/components/SportsCategoriesListItem';
import SportsFlags from '@/components/SportsFlags';
import TabMenu from '@/components/TabMenu';
import MatchCard from '@/components/MatchCard';
import { Colors } from '@/constants/Colors';
import { StyleSheet, View, ScrollView } from 'react-native';
import MatchHeader from '@/components/MatchHeader';
import PopularGamesHeader from '@/components/PopulartGamesHeader';
import HorizontalGameList from '@/components/HorizontalGameList';
import HorizontalAds from '@/components/HorizontalAds';
import Footer from '@/components/Footer';
import FooterBottom from '@/components/FooterBottom';
import { banners, gameMenus, games, images } from '@/services/db';
import SmallBanner from '@/components/SmallBanner';
import MainBanner from '@/components/MainBanner';
import ImageSlider from '@/components/Slider';

import VirtualGameHeader from '@/components/GameHeader';
import CollapasbleText from '@/components/FooterText';
export default function HomeScreen() {
  const handleViewAllPress = () => {
    console.log('See All button pressed!');
  };
  const handleGamePress = (id: string) => {
    console.log('Game pressed:', id);
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <MarqueeText />
        <SportsCategoriesListItem />
        <ImageSlider />
        <GameCategories data={gameMenus} />
        <SmallBanner imageOne={{ uri: banners.imageOne }} imageTwo={{ uri: banners.imageTwo }} />
        <SmallBanner imageOne={{ uri: banners.imageThree }} imageTwo={{ uri: banners.imageFour }} />
        <SportsFlags />
        <TabMenu />
        <HorizontalMenu />
        <MatchCard
          time="Tomorrow, 04:30"
          team1="Los Angeles Knight Riders"
          team2="Seattle Orcas"
          odds={[
            { value: '1.78', color: Colors.evenblue, stake: '' },
            { value: '1.78', color: Colors.evenpink, stake: '' },
            { value: '', color: Colors.oddblue, stake: '' },
            { value: '', color: Colors.oddpink, stake: '' },
            { value: '1.78', color: Colors.evenblue, stake: '' },
            { value: '1.78', color: Colors.evenpink, stake: '' }
          ]}
        />
        <VirtualGameHeader />
        <MatchHeader />
        <PopularGamesHeader title="Popular Games" actionText="See All" onPress={handleViewAllPress} />
        <HorizontalGameList games={games} onPress={handleGamePress} />
        <MainBanner />
        <PopularGamesHeader title="MultiPlayer Games" actionText="See All" onPress={handleViewAllPress} />
        <HorizontalGameList games={games} onPress={handleGamePress} />
        <PopularGamesHeader title="Indian Casino" actionText="See All" onPress={handleViewAllPress} />
        <HorizontalGameList games={games} onPress={handleGamePress} />
        <HorizontalAds images={images} />
        <CollapasbleText />
        <Footer />
        <FooterBottom />
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
  scrollContainer: {
    paddingBottom: 50
  },
  marqueeText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
