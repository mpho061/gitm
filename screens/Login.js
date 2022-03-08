import { View, Text, StyleSheet, TextInput, Image, ImageBackground, Pressable } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../config/firebaseConfig';
import { signIn } from '../services';
require('firebase/auth')
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [passwordh, setPasswordh] = useState('');

    const handlePress = () => {
        if (!email) {
            alert('Email field is required*.');
        }

        if (!password) {
            alert('Password field is required*.');
        }

        signIn(email, password).then(() => {
            let user = firebase.auth().currentUser
            if (user) {
                console.log(user)
                navigation.navigate('Homepage');
                setEmail('');
                setPassword('');
            }
        });
        ff6787
    };
    return (
        <View style={styles.container}>
            <ImageBackground style={{ height: "100%", width: "100%" }} source={require("../assets/backImg.png")}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.LoginBtna}> Login</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
                            <Text style={styles.signUpBtn}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textDesign3}>Welcome</Text>
                    <TextInput
                        style={styles.fieldInput_a}
                        placeholder='Email Address'
                        value={email}
                        onChangeText={(email) => setEmail(email)} />
                    <TextInput
                        style={styles.fieldInput_b}
                        placeholder='Password' value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={passwordVisibility}
                    />
                    <Pressable style={{position:"relative", bottom:30, left:100}} onPress={handlePasswordVisibility}>
                        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                    </Pressable>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                    <Text style={styles.labelBtn}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 10, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
                        <Text style={{ color: "white" }}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.labelText}>OR</Text>

                </View >

                <View style={{ marginTop: 40, flexDirection: "row", justifyContent: "space-evenly" }}>
                    <Image style={styles.imgA} source={require("../assets/twitter.png")} />
                    <Image style={styles.imgA} source={require("../assets/facebook.png")} />
                    <Image style={styles.imgA} source={require("../assets/google.png")} />


                </View>
                {/* <Image style={styles.imgB} source={require("../assets/flower.jpg")} /> */}


                {/* <Text style={styles.textDesign}>CodeTribe Sanitary</Text> */}

                {/* <Text style={styles.textDesign3}>Welcome Back</Text>

               
               

                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View >
               
                 */}

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

    loginButton: {
        height: 40,
        width: 250,
        color: '#FFC0CB',
        paddingHorizontal: 15,
        paddingVertical: 5,
        //backgroundColor: '#ff6787',
        backgroundColor:"#E605EE",
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        opacity:0.6,
    },
    imgA: {
        height: 25,
        width: 25,
        marginBottom: 70, //nb
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 0,
    },
    imgB: {
        height: 150,
        width: 250,
        marginBottom: 10, //nb
        borderRadius: 10,
        marginRight: 70,
    },
    fieldInput_a: {
        backgroundColor: '#F1F0F0',
        width: 250,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 30,
        //  marginTop: 180,
        //    marginLeft: 67,
        borderColor: "#fff",
        keyboardType: "numeric",
    },
    fieldInput_b: {
        backgroundColor: '#F1F0F0',
        width: 250,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        // marginLeft: 67,
    },

    textDesign: {

        color: '#000',
        marginBottom: 60, //nb
        fontSize: 30,
        marginLeft: 0,
    },
    textDesign3: {
        color: '#000',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 190,
        marginTop: 20,
    },
    LoginBtna: {
        color: 'black',
        fontSize: 13,
        // fontFamily: 'brush-script mt',
        // marginRight: 145,
        marginTop: 160,
        height: 25,
        width: 130,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 40,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: "black",
    },
    signUpBtn: {
        color: '#fff',
        fontSize: 13,
        // fontFamily: 'brush-script mt',
        // marginRight: 145,
        marginTop: 160,
        height: 25,
        width: 130,
        //backgroundColor: '#ff6787',
        backgroundColor:"#E605EE",
        opacity:0.6,
        borderRadius: 10,
        paddingHorizontal: 40,
        paddingVertical: 2,
        marginLeft: 10,
    },
    labelBtn: {
        color: 'grey',
        fontSize: 13,
        marginLeft: 225,
        marginBottom: 20,
    },
    labelText: {
        color: 'grey',
        fontSize: 13,
        marginTop: 40,
    },
    textDesign5B: {
        color: '#000',
        fontSize: 13,
        // fontFamily: 'brush-script mt',

        marginTop: 20,
    },
    signUpText_Design: {
        color: '#FFC0CB',
        marginTop: 55,
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginTop: 10,

    },
    viewDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:100,
    },
    viewDirection_a: {
        flexDirection: 'row'
    },
    controlView: {
        marginTop: 350,
    },
});

export default Login;
