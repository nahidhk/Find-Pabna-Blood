import { View, Text , TextInput} from "react-native";
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
            <TextInput placeholder="apnar phone number">
            </TextInput>
        </View>
    );
}
