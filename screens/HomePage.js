import { StatusBar } from 'expo-status-bar';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profiles from '../assets/profiles.png';
import { useRef, useState } from 'react';
//Tab icons...
import home from '../assets/homeicon.png';
import search from '../assets/search.png';
import Notifications from '../assets/bell.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';
//Menu
import menu from '../assets/mainM.png';
import close from '../assets/close.png';
import { Dimensions } from 'react-native';
//Photo 
import photo from '../assets/photo.jpg';
import { Feather } from '@expo/vector-icons';
import { ImageBackground } from 'react-native-web';
const HomePage = ({ navigation }) => {

    const [currentTab, setCurrentTab] = useState("Welcome");
    //navigation to profile page
    const handlePressProfile = () => {
        navigation.navigate('Profile');
    }

    const handlePressScanner = () => {
        navigation.navigate('Scanner');
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }} source={require("../assets/homeBackground1.png")}>

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginLeft: 350, marginTop: 20 }}>
                        <Image style={{ height: 35, width: 35 }} source={require("../assets/camera.png")} onPress={handlePressScanner} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{ fontSize: 20, marginLeft: 45, marginTop: 40, fontWeight: "700" }}>Welcome</Text>
                    <View style={{ marginTop: 230, marginLeft: 0, flexDirection: "row", justifyContent: "space-evenly" }}>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>Expense History </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: "700", borderColor:"black", borderBottomWidth:1 }} >View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: "70%" }}>

                    {TabButton(currentTab, setCurrentTab, "", home)}
                    {/* {TabButton(currentTab, setCurrentTab, "", search)} */}
                    {TabButton(currentTab, setCurrentTab, "", Notifications)}
                    <TouchableOpacity onPress={handlePressProfile}>
                        <Image style={{ height: 35, width: 35, marginLeft: 45, marginTop: 10 }} source={require("../assets/user.png")}></Image>
                    </TouchableOpacity>
                    {TabButton(currentTab, setCurrentTab, "", logout)}


                </View>
            </ImageBackground>
        </View>
    );
}

const TabButton = (currentTab, setCurrentTab, title, image) => {
    return (
        <TouchableOpacity onPress={() => {
            if (title == "LogOut") {
                //log out function
            } else {
                setCurrentTab(title)
            }
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: 'center',

                backgroundColor: 'transparent',
                borderRadius: 8,
                marginTop: 10,
            }}>

                <Image source={image} style={{
                    width: 35, height: 35, marginLeft: 56

                    //  tintColor: currentTab == title ? "#5359D1" : "white"
                }}></Image>


            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});

export default HomePage;
