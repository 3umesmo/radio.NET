import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

interface BannerProps {
    title: string;
    subtitle: string;
    imgSrc: ImageSourcePropType;
};

export default function Banner({title, subtitle, imgSrc}: BannerProps){
    return(
        <View style={styles.bannerContainer}>
            <ImageBackground source={imgSrc}  style={styles.bannerBackground}>
                <View style={styles.bannerContent}>
                    <Text style={[styles.bannerText, styles.bannerTitle]}>{title}</Text>
                    <Text  style={styles.bannerText}>{subtitle}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        display:'flex',
        height:500,
    },
    bannerBackground: {
        width: '100%',
        height: '100%',
        objectFit:'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerTitle: {
        fontSize:42,
    },
    bannerText: {
        color:'rgb(255, 255, 255)',
        marginHorizontal:'auto',
    },
    bannerContent: {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.5)',
        padding:20,
    }
});