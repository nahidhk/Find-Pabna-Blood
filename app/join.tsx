import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, Modal } from "react-native";
import style from "./style/style";
import json_rest_link from "@/data/json/json_rest_link.json";

export default function Join() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetch(json_rest_link.url_output)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Fetch Error:", err));
    }, []);

    const numberCheck = () => {
        if (
            phoneNumber.trim() === "" ||
            phoneNumber.length !== 11 ||
            !phoneNumber.startsWith("01")
        ) {
            Alert.alert("Error", "দয়া করে সঠিক মোবাইল নাম্বার লিখুন (১১ ডিজিট, 01 দিয়ে শুরু , +৮৮ বাদে লিখুন )");
            return;
        }

        const teleNumber = phoneNumber.slice(1);
        setLoading(true);

        const filteredData = users.filter(
            (item) => String(item.phone).includes(teleNumber)
        );

        if (filteredData.length === 0) {
            Alert.alert("Number add নাই");
        } else {
            const user = filteredData[0];
            setCurrentUser(user);
            setModalVisible(true);
        }

        setLoading(false);
    };

    return (
        <View style={style.viewBox}>
            <Text style={style.textCenter}>
                {"\n\n\n"}
                <Text style={style.bigText}>Create Profile</Text>
                {"\n"}
                <Text>আমাদের সাথে যোগ দিতে আপনার ফোন নাম্বার দিয়ে ফরম পূরণ করেন</Text>
                {"\n\n\n"}
            </Text>

            <View>
                <Text>
                    আপনার মোবাইল নাম্বার লিখুন <Text style={style.cRed}>*</Text>
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
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#ffffff" />
                    ) : (
                        <Text style={style.btnCenter}>Proceed</Text>
                    )}
                </TouchableOpacity>
            </View>

            {/*  Modal*/}
            {currentUser && (
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
                        <View style={style.popup}>
                            <Text style={style.bigText}>Already Created</Text>
                            <Text>+880{phoneNumber.slice(1)} এই নাম্বার ব্যবহার করে ইতিমধ্যে প্রোফাইল  তৈরি করা হয়েছে | {"\n"}
                                ID: {currentUser.id} {"\n"}
                                নাম: {currentUser.name}{"\n"}
                                ঠিকানা: {currentUser.address}{"\n"}
                                রক্ত : {currentUser.blood}
                            </Text>
                        </Text>



                        <TouchableOpacity style={{ marginTop: 10, backgroundColor: "#fff", display: "flex", flexDirection: "row", justifyContent: 'space-between', }}>
                            <Text style={{ backgroundColor: "#ffffffff", color: "#4680ff", padding: 8, textAlign: "center", margin: 3, }}>
                                Edit Profile
                            </Text>
                            <Text onPress={() => setModalVisible(false)} style={{ color: "#ff0000ff", padding: 8, textAlign: "center", margin: 3 }}>
                                Close
                            </Text >
                        </TouchableOpacity>



                    </View>
                </View>
                </Modal>
    )
}
        </View >
    );
}
