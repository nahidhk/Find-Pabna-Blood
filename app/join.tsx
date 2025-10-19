import { View, Text, TextInput, TouchableOpacity } from "react-native";
import style from "./style/style";


export default function Join() {
    return (
        <View style={style.viewBox}>

            <Text style={style.textCenter}>
                {"\n"}{"\n"}{"\n"}
                <Text style={style.bigText}>
                    Join Now
                </Text>
                {"\n"}
                <Text>
                    আমাদের সাথে যোগ দিতে আপনার ফোন নাম্বার দিয়ে ফরম পূরণ করেন
                </Text>
                {"\n\n\n"}
            </Text>
            <Text>
                {"আপনার মোবাইল নাম্বার লিখুন "}<Text style={style.cRed}>*</Text>
            </Text>
            <TextInput style={style.input} keyboardType="numeric" placeholder="e.g 01812345678">
            </TextInput>

            <TouchableOpacity style={[style.btnT, style.btnCenter , style.btn]}>
                <Text style={style.btnCenter}>
                   Proceed
                </Text>
            </TouchableOpacity>

        </View>
    );
}
