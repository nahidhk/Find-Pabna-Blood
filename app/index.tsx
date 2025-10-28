import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import style from "./style/style";
import Loadding from "@/components/Loadding";
import ErrJsonx from "@/components/ErrJsonx";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://tdxserver.site/api/pabnaBloodFind/ruqust_output_json.php")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch Error:", err);
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) return <Loadding />;
  if (error) return <ErrJsonx />;

  return (
    <ScrollView>
      <View style={style.viewBox}>
        {users.map((user, index) => (
          <View key={index} style={style.userBox}>
            {/* Profile Image Placeholder */}
            <Image
              source={{ uri: user.profile_image || "https://via.placeholder.com/80" }}
              style={style.profileImage}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={style.userName}>
                {user.name}{" "}
                {user.v_blood === 1 && (
                  <MaterialIcons name="verified" size={18} color="#007bff" />
                )}
              </Text>

              <Text style={style.userDetail}>📞 +880{user.phone}</Text>

              <Text style={style.userDetail}>
                🩸 Blood:{" "}
                <Text style={[{ color: "red", fontWeight: "bold", fontSize: 20 }, style.upper]}>
                  {user.bloodgroup}
                </Text>
              </Text>

              <Text style={style.userDetail}>📍 {user.address}</Text>
              <Text style={style.userDetail}>{user.gender}</Text>

              <View style={style.socialRow}>
                {/* WhatsApp */}
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(`https://wa.me/${user.whatsapp_number}`)
                  }
                >
                  <FontAwesome name="whatsapp" size={27} color="#25D366" />
                </TouchableOpacity>

                {/* Phone */}
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:+880${user.phone}`)}
                  style={{ marginLeft: 10 }}
                >
                  <FontAwesome name="phone-square" size={25} color="#4680ff" />
                </TouchableOpacity>

                {/* Facebook */}
                {user.facebook && (
                  <TouchableOpacity
                    onPress={() => Linking.openURL(user.facebook)}
                    style={{ marginLeft: 10 }}
                  >
                    <FontAwesome name="facebook-square" size={25} color="#1877F2" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
