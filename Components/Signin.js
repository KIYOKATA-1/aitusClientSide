import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Lstyle } from '../styles/login';

export default function Signin({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'teacher' && password === '123') {
            navigation.navigate('TeacherNav');
        } else {
            navigation.navigate('StudentNav');
        }
    };

    return (
        <SafeAreaView style={Lstyle.loginContainer}>
            <View>
                <Image source={require('../assets/img/aitu.png')} style={Lstyle.ImageStyle} />
            </View>
            <View style={Lstyle.inputContainer}>
                <TextInput
                    style={Lstyle.TextInputStyle}
                    placeholder="BARCODE"
                    placeholderTextColor={'black'}
                    onChangeText={text => setUsername(text)}
                    value={username}
                />
                <TextInput
                    style={Lstyle.TextInputStyle}
                    placeholder="PASSWORD"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <TouchableOpacity onPress={() => console.log("Forgot password was pressed")}>
                    <Text style={Lstyle.linkStyle}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={Lstyle.loginBtn} onPress={handleLogin}>
                <Text style={Lstyle.loginBtnText}>LOGIN</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
