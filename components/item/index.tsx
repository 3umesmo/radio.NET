import { ImageMap } from '@/constants/musics/info/text';
import { useRouter } from 'expo-router';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';


interface ItemProps{
    imgKey:string;
    title: string;
    disc: string;
    band: string;
    duration: string;
}

export default function Item({imgKey, title,disc, band, duration}:ItemProps){
    const router = useRouter();
    
    const selectedImg = ImageMap[imgKey as keyof typeof ImageMap];

    return(
        <Pressable onPress={() => {
            router.push({
            pathname: '/item',
            params: { title, band, imgKey }
            });
        }} style={styles.itemContainer}>
            <ImageBackground source={selectedImg} style={styles.itemContent}>
                <View style={styles.itemTextContent}>
                    <Text style={[styles.itemTitle, styles.itemText]}>{title}</Text>
                    <Text style={[styles.itemDisc, styles.itemText]}>{disc}</Text>
                    <Text style={[styles.itemBand, styles.itemText]}>{band}</Text>
                    <Text style={[styles.itemDuration, styles.itemText]}>{duration}</Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    itemContainer: {
        width:400,
        height:400,
        marginHorizontal:'auto',
        borderRadius: 20,
        overflow: 'hidden',
        margin:20
    },
    itemContent: {  
        height:'100%',
        flex: 1, 
        justifyContent: 'flex-end',
        width:'100%'
    },
    itemTextContent: {
        padding: 16,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    itemTitle: {
        fontSize: 38,
    },
    itemDisc: {
        fontSize: 8,
    },
    itemBand: {

    },
    itemDuration: {

    },
    itemText: {
        color: 'white'
    }
});