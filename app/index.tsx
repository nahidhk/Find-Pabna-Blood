import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import style from "./style/style";
import Loadding from "@/components/Loadding";
import ErrJsonx from "@/components/ErrJsonx";
import serverLink from "@/components/ServerLink";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [icxData, setIcxData] = useState([])

 useEffect(() => {
  const fetchData = async () => {
    try {
      const icx = await serverLink(); 
      setIcxData(icx);

      if (icx.serverLink) {
        const res = await fetch(icx.serverLink); 
        const data = await res.json();
        setUsers(Array.isArray(data) ? data : []);
      }

      setLoading(false);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(true);
      setLoading(false);
    }
  };

  fetchData();
}, []);


  function genderX(gender) {
    if (!gender) return "⚧ Unknown";
    const male = "♂️ Male";
    const female = "♀️ Female";
    if (gender.toLowerCase() === "male") return male;
    if (gender.toLowerCase() === "female") return female;
    return "⚧️ Other";
  }

 
  function getFirstLetter(name) {
    if (!name) return "?";
    return name.charAt(0).toUpperCase();
  }

  if (loading) return <Loadding />;
  if (error) return <ErrJsonx />;

  return (
    <ScrollView style={{ backgroundColor: "#f9f9f9" }}>
      <View style={style.viewBox}>
        {users.length === 0 ? (
          <Text style={{ textAlign: "center", marginTop: 20, color: "#999" }}>
            No user data found 😕
          </Text>
        ) : (
          users.map((user, index) => (
            <View key={index} style={style.userBox}>
              {user.avater_url ? (
                <Image
                  source={{ uri: user.avater_url }}
                  style={style.profileImage}
                />
              ) : (
                
                <View
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: "#007bff",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 32,
                      fontWeight: "bold",
                    }}
                  >
                    {getFirstLetter(user.name)}
                  </Text>
                </View>
              )}

              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={style.userName}>
                  {user.name}{" "}
                  {user.v == 1 && (
                    <MaterialIcons name="verified" size={18} color="#007bff" />
                  )}
                </Text>

                <Text style={style.userDetail}>📞 +880{user.phone}</Text>

                <Text style={style.userDetail}>
                  🩸 Blood:{" "}
                  <Text
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: 18,
                      textTransform: "uppercase",
                    }}
                  >
                    {user.bloodgroup}
                  </Text>
                </Text>

                <Text style={style.userDetail}>📍 {user.address}</Text>
                <Text style={style.userDetail}>{genderX(user.gender)}</Text>

                <View style={style.socialRow}>
                  {user.whatsapp_number && (
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(`https://wa.me/${user.whatsapp_number}`)
                      }
                    >
                      <FontAwesome
                        name="whatsapp"
                        size={27}
                        color="#25D366"
                      />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity
                    onPress={() => Linking.openURL(`tel:+880${user.phone}`)}
                    style={{ marginLeft: 10 }}
                  >
                    <FontAwesome
                      name="phone-square"
                      size={25}
                      color="#4680ff"
                    />
                  </TouchableOpacity>

                  {user.facebook && (
                    <TouchableOpacity
                      onPress={() => Linking.openURL(user.facebook)}
                      style={{ marginLeft: 10 }}
                    >
                      <FontAwesome
                        name="facebook-square"
                        size={25}
                        color="#1877F2"
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}
