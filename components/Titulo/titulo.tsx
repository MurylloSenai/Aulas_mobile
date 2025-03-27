import { View } from "react-native";
import { Subtitulo, Titulo } from "./style"

type TitleProps = {
    texto : string,
    flag : boolean
}

export default function Title({texto, flag} : TitleProps){
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