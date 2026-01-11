import { ImageMap } from '@/constants/musics/info/text';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import Banner from '@/components/banner';

export default function ItemScreen() {
  const { title, band, imgKey } = useLocalSearchParams();

  const imageSource = ImageMap[imgKey as keyof typeof ImageMap];

  return (
    <View style={{ flex: 1 }}>
      <Banner 
        title={String(title)} 
        subtitle={String(band)} 
        imgSrc={imageSource} 
      />
    </View>
  );
};
