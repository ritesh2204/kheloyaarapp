import { Image, useWindowDimensions } from "react-native";

const MainBanner = () => {
    const { width } = useWindowDimensions();
    const imageHeight = (width * 8) / 16;
    let uriLink = "https://iriscdn.b-cdn.net/kheloyaar360.net/banners/12776.png";
    
    return (
        <Image
            source={{uri: uriLink}}
            style={{ width: '100%', height: imageHeight, resizeMode: "contain" }}
        />
    );
}

export default MainBanner;