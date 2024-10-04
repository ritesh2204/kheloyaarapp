import { Colors } from '@/constants/Colors';
import Texts from '@/constants/Text';
import { Marquee } from '@animatereactnative/marquee';
import { Text , StyleSheet} from 'react-native';

export function MarqueeText() {
  return (
    <Marquee spacing={10} speed={1}>
      <Text style={styles.marqueeText}>{Texts.marqueetext}</Text>
    </Marquee>
  );
}

const styles = StyleSheet.create({
  marqueeText: {
    color: Colors.white,
    marginTop: 10,
    marginBottom: 10
  }
})