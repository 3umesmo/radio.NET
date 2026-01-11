import { ImageMap } from '@/constants/musics/info/text';
import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './_layout';

import Banner from '@/components/banner';

export default function ItemScreen() {
  const { title, band, imgKey, url } = useLocalSearchParams();

  const imageSource = ImageMap[imgKey as keyof typeof ImageMap];

  return (
    <View style={{ flex: 1 }}>
      <Banner 
        title={String(title)} 
        subtitle={String(band)} 
        imgSrc={imageSource} 
      />
      <View style={styles.container}>
      <Link href={String(url)} >
        <View style={styles.linkButton}>
          <Text style={styles.linkText}>Ir para youtube</Text>
        </View>
      </Link>
      </View> 
    </View>
  ); 
};

const styles = StyleSheet.create({
container: {
  flex: 1,                     
  justifyContent: 'center',    
  alignItems: 'center',        
},
linkButton: {
  backgroundColor: theme.button,
  flex: 1,                      
  justifyContent: 'center', 
  alignItems:'center',
  alignSelf:'center',
  height:50,
  borderRadius:20,
  marginTop:20,
  padding:20,
},
linkText: {
  color: theme.buttonText,
  marginVertical:'auto',
  fontSize:22,
  fontWeight: '800',
  fontFamily:'sans-serif'
}
})