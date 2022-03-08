import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { resetPassword } from '../services';
import { ImageBackground } from 'react-native-web';

const ForgetPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const reset = () => {
        resetPassword(email)
        navigation.navigate("Login")
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={{ height: "100%", width: "100%" }} source={require("../assets/backImg.png")}>
                <Text style={styles.forgotDesign}>Forgot Password</Text>
                <Text style={{marginLeft:80, marginTop:50}}>Please enter your email to reset password</Text>
                <TextInput
                    style={styles.fieldInput_a}
                    placeholder='Enter your email address'
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <TouchableOpacity onPress={reset} style={styles.loginButton}>
                    <Text style={{color:"white"}}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.labelBtn}>Sign In</Text>
                </TouchableOpacity>

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
    forgotDesign:{
         fontSize:18,
        alignSelf:"center",
        justifyContent:"center",
        marginTop:180,
    },
    fieldInput_a: {
        backgroundColor: '#F1F0F0',
        width: 250,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
        //  marginTop: 180,
        
        borderColor: "#fff",
        keyboardType: "numeric",
        alignSelf:"center",
        justifyContent:"center",
    },
    loginButton: {
        height: 40,
        width: 250,
        color: '#FFC0CB',
        paddingHorizontal: 100,
        paddingVertical: 5,
        backgroundColor: '#E605EE',
        opacity:0.6,
        borderRadius: 60,
        alignSelf:"center",
        justifyContent:"center",
        marginTop:10    ,
    },
    img: {
        height: 150,
        width: 70,
        marginBottom: 70, //nb
        borderRadius: 10,

    },
    fieldText_Design: {
        backgroundColor: '#F1F0F0',
        width: 250,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    textDesign: {
        color: '#808080',
        fontSize: 30,
        marginBottom: 80,
        // fontFamily: 'brush-script mt',
    },
    textDesign3: {
        color: '#000',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 40,
        marginBottom: 20,
    },
    textDesign4: {
        color: '#FFFFFF',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginLeft: 0,
        marginTop: 20,
    },
    textDesign5: {
        color: '#808080',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    signUpText_Design: {
        color: '#808080',
        marginTop: 55,
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginTop: 10,

    },
    viewDirection: {
        flexDirection: 'row',
        // marginTop:100,
    },
    labelBtn: {
        color: 'grey',
        fontSize: 13,
        marginLeft: 280,
        marginTop: 20,
    },
    viewDirection2: {
        flexDirection: 'row',
        marginLeft: 140,
    },
    controlView: {
        marginTop: 350,
    },
});
export default ForgetPassword;
