import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import style from "./style/style";
import json_rest_link from "@/data/json/json_rest_link.json"

export default function Join() {





    const [phoneNumber, setPhoneNumber] = useState("");


    const numberCheck = () => {
        if (phoneNumber.trim() === "") {
            Alert.alert("Error", "দয়া করে আপনার মোবাইল নাম্বার লিখুন");
        } else {
            return phoneNumber;
        }
    };






    return (
        <View style={style.viewBox}>
            <Text style={style.textCenter}>
                {"\n"}{"\n"}{"\n"}
                <Text style={style.bigText}>Join Now</Text>
                {"\n"}
                <Text>
                    আমাদের সাথে যোগ দিতে আপনার ফোন নাম্বার দিয়ে ফরম পূরণ করেন
                </Text>
                {"\n\n\n"}
            </Text>

            <View>
                <Text>
                    {"আপনার মোবাইল নাম্বার লিখুন "}
                    <Text style={style.cRed}>*</Text>
                </Text>
                <TextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    style={style.input}
                    keyboardType="numeric"
                    placeholder="e.g 01812345678"
                />

                <TouchableOpacity
                    onPress={numberCheck}
                    style={[style.btnT, style.btnCenter, style.btn]}
                >
                    <Text style={style.btnCenter}>Proceed</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

    
        try {
            const response = await fetch(json_rest_link.url_output);
            const data = await response.json();
            const dataContainer = document.getElementById("showData");
            const filteredData = data.filter(
                (data) =>
                    String(data.phone).toLowerCase().includes(phoneNumber.toLowerCase())
            );
            if (filteredData.length === 0) {
                Alert.alert("ok");
            }
        
        



}
