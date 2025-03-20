import { View } from "react-native";
import { Subtitulo, Titulo } from "./style"

export default function Title({texto, flag}){
    return(
        <View>
        {flag == true?
            <Titulo>{texto}</Titulo>
            :   
            <Subtitulo>{texto}</Subtitulo>   
        }
        </View>
    )
}