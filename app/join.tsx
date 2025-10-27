import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    Modal,
} from "react-native";
import style from "./style/style";
import json_rest_link from "@/data/json/json_rest_link.json";
import { useRouter } from "expo-router";
import ErrJsonx from "@/components/ErrJsonx";

export default function Join() {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(json_rest_link.url_output)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                setError(true);
            });
    }, []);
    if (error) {
        return <ErrJsonx />;
    }
    const numberCheck = () => {
        if (
            phoneNumber.trim() === "" ||
            phoneNumber.length !== 11 ||
            !phoneNumber.startsWith("01")
        ) {
            Alert.alert(
                "ত্রুটি",
                "দয়া করে সঠিক মোবাইল নাম্বার লিখুন (১১ ডিজিট, 01 দিয়ে শুরু , +৮৮ বাদে লিখুন )"
            );
            return;
        }
        const teleNumber = phoneNumber.slice(1);
        setLoading(true);

        const filteredData = users.filter((item) =>
            String(item.phone).includes(teleNumber)
        );

        if (filteredData.length === 0) {

            Alert.alert(
                "ADD PROFILE",
                `+880${teleNumber} এই নম্বর দিয়ে প্রোফাইল তৈরি করতে "OK" প্রেস করুন`,
                [
                    {
                        text: "Cancel",
                        style: "cancel",
                    },
                    {
                        text: "OK",
                        onPress: () => {
                            router.push({
                                pathname: "/NewAdd",
                                params: { mobileNumber: teleNumber },
                            });
                        },
                    },
                ],
                { cancelable: false }
            );

        }

        const user = filteredData[0];
        setCurrentUser(user);
        setModalVisible(true);
        setLoading(false);
    };

    return (
        <View style={style.viewBox}>
            <Text style={style.textCenter}>
                {"\n\n\n"}
                <Text style={style.bigText}>Create Profile</Text>
                {"\n"}
                <Text>
                    আমাদের সাথে যোগ দিতে আপনার ফোন নাম্বার দিয়ে ফরম পূরণ করেন
                </Text>
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
                    placeholderTextColor="#888"
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


            {/*  Already Created Modal */}
            {currentUser && (
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(0,0,0,0.5)",
                        }}
                    >
                        <View style={style.popup}>
                            <Text style={style.bigText}>Already Created</Text>
                            <Text style={style.upper}>
                                +880{phoneNumber.slice(1)} এই নাম্বার ব্যবহার করে ইতিমধ্যে প্রোফাইল তৈরি করা হয়েছে {"\n"}
                                ID: {currentUser.id} {"\n"}
                                নাম: {currentUser.name} {"\n"}
                                ঠিকানা: {currentUser.address} {"\n"}
                                রক্ত : {currentUser.blood}
                            </Text>

                            <View
                                style={{
                                    marginTop: 10,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(false);
                                        setEditModalVisible(true);
                                    }}
                                    style={{
                                        backgroundColor: "#fff",
                                        paddingHorizontal: 12,
                                        paddingVertical: 8,
                                        borderRadius: 5,
                                    }}
                                >
                                    <Text style={{ color: "#4680ff", fontWeight: "600" }}>
                                        Edit Profile
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => setModalVisible(false)}
                                    style={{
                                        backgroundColor: "#fff",
                                        paddingHorizontal: 12,
                                        paddingVertical: 8,
                                        borderRadius: 5,
                                    }}
                                >
                                    <Text style={{ color: "#ff0000", fontWeight: "600" }}>
                                        Close
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}

            {/*  Edit Profile Modal */}
            <Modal
                transparent={true}
                visible={editModalVisible}
                animationType="slide"
                onRequestClose={() => setEditModalVisible(false)}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                >
                    <View style={style.popup}>
                        <Text style={style.bigText}>Edit Profile</Text>
                        <Text>

                        </Text>
                        <TextInput
                            defaultValue={currentUser ? currentUser.name : ""}
                            placeholder="নাম পরিবর্তন করুন"
                            style={style.input}
                        />
                        <TextInput
                            defaultValue={currentUser ? currentUser.address : ""}
                            placeholder="ঠিকানা পরিবর্তন করুন"
                            style={style.input}
                        />
                        <TextInput
                            defaultValue={currentUser ? currentUser.blood : ""}
                            placeholder="রক্তের গ্রুপ পরিবর্তন করুন"
                            style={style.input}
                        />

                        <View
                            style={{
                                marginTop: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => Alert.alert("Profile Updated!")}
                                style={{
                                    backgroundColor: "#fff",
                                    paddingHorizontal: 12,
                                    paddingVertical: 8,
                                    borderRadius: 5,
                                }}
                            >
                                <Text style={{ color: "#4680ff", fontWeight: "600" }}>
                                    Sand Mail
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setEditModalVisible(false)}
                                style={{
                                    backgroundColor: "#fff",
                                    paddingHorizontal: 12,
                                    paddingVertical: 8,
                                    borderRadius: 5,
                                }}
                            >
                                <Text style={{ color: "#ff0000", fontWeight: "600" }}>
                                    Close
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
