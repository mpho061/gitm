import { View, Text, StyleSheet, Image, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { registration } from '../services';
import { ImageBackground } from 'react-native-web';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';


const signUp = ({ navigation }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordconfirm, setPasswordconfirm] = useState('');

    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } = useTogglePasswordVisibility();
    const [passwordh, setPasswordh] = useState('');

    const handlePress = () => {
        if (!firstname) {
            alert('Enter your Firtsname*.');
        }

        if (!email) {
            alert('Email field is required*.');
        }

        if (!password) {
            alert('Password field is required*.');
        }
        if (!passwordconfirm) {
            alert('Password field is required*.');
        }
        if (firstname && email && password && passwordconfirm) {
            registration(email, password, lastname, firstname);
            navigation.navigate("Homepage");

            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setPasswordconfirm('');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground style={{ height: "100%", width: "100%" }} source={require("../assets/backImg.png")}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.signUpBtn}> Login</Text>
                        </TouchableOpacity>

                        <Text style={styles.LoginBtna}> Sign Up</Text>

                    </View>

                    <Text style={styles.textDesign3}>Let's get started</Text>
                    <TextInput
                        style={styles.fieldText_Design}
                        placeholder='Enter full name'
                        value={firstname}
                        onChangeText={(firstname) => setFirstname(firstname)}

                    />
                    <TextInput
                        style={styles.fieldText_Design}
                        placeholder='Enter your email address'
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />

                    <TextInput
                        style={styles.fieldText_Design}
                        placeholder='Password'
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={passwordVisibility}
                    />

                    <TextInput
                        style={styles.fieldText_Design}
                        placeholder='Confirm Password'
                        onChangeText={(passwordconfirm) => setPasswordconfirm(passwordconfirm)}
                        secureTextEntry={passwordVisibility2}
                    />
                    <Pressable style={{ position: "relative", bottom: 80, left: 100 }} onPress={handlePasswordVisibility}>
                        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                    </Pressable>

                    <Pressable style={{ position: "relative", bottom: 50, left: 100 }} onPress={handlePasswordVisibility2}>
                        <MaterialCommunityIcons name={rightIcon2} size={22} color="#232323" />
                    </Pressable>

                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
                            <Text style={{color:"white"}}>Register</Text>
                        </TouchableOpacity>
                    </View >
                    <View style={styles.viewDirection}>
                        <Text style={styles.textDesign5}>Registered?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.textDesign4}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',


    },
    LoginBtna: {
        color: 'black',
        fontSize: 13,
        // fontFamily: 'brush-script mt',
        // marginRight: 145,
        marginTop: 160,
        height: 25,
        width: 131,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 40,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: "black",
        marginLeft: 10,
    },
    signUpBtn: {
        color: '#fff',
        fontSize: 13,
        // fontFamily: 'brush-script mt',
        // marginRight: 145,
        marginTop: 160,
        height: 25,
        width: 130,
        backgroundColor: '#E605EE',
        opacity:0.6,
        borderRadius: 10,
        paddingHorizontal: 40,
        paddingVertical: 2,
        
    },
    fieldText_Design: {
        backgroundColor: '#F1F0F0',
        width: 250,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    loginButton: {
        height: 40,
        width: 250,
        color: '#FFC0CB',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#E605EE',
        opacity:0.6,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    textDesign: {
        color: '#000',
        marginBottom: 60,
        fontSize: 30,
        marginRight: 3,
        // fontFamily: 'brush-script mt',
    },
    textDesign3: {
        color: '#000',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 147,
        marginTop: 20,
        marginBottom: 20,

    },
    textDesign4: {
        color: '#ff6787',
        fontSize: 13,
        // fontFamily: 'brush-script mt',
        marginRight: 5,
        marginBottom: 70,
    },
    textDesign5: {
        color: '#808080',
        fontSize: 13,
        // fontFamily: 'brush-script mt',
        marginRight: 5,
        marginBottom: 70,
    },
    viewDirection: {
        flexDirection: 'row',
        // marginTop:100,
    },
    img: {
        height: 150,
        width: 70,
        marginBottom: 50,
        borderRadius: 10,
        marginRight: 3,
    },



});
export default signUp;
