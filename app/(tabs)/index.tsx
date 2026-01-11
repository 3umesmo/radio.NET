import { FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import bannetImg from '@/assets/images/bgImg.jpg';
import Banner from '@/components/banner';

import Item from '@/components/item';
import infoItens from '@/constants/musics/info/text';

export default function HomeScreen() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            ListHeaderComponent={<Banner title='Radio.NET' subtitle='Coleção das melhores musicas!' imgSrc={bannetImg}/>}
            data={infoItens}
            renderItem={({item}) => <Item imgKey={item.imgKey} title={item.title} disc={item.disc} band={item.band} duration={item.duration} />}
            keyExtractor={item => item.id.toString()}
          />
        </SafeAreaView>
      </SafeAreaProvider>
  );
};
