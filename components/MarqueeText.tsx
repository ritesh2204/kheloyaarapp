import { Colors } from '@/constants/Colors';
import Texts from '@/constants/Text';
import { Marquee } from '@animatereactnative/marquee';
import { Text } from 'react-native';

export function MarqueeText() {
  return (
    <Marquee spacing={10} speed={1}>
      <Text style={{color: Colors.white}}>{Texts.marqueetext}</Text>
    </Marquee>
  );
}