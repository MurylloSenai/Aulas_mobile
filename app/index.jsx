import { Button, Text, View, StyleSheet, TextInput } from "react-native";


//funçao tem retorno metodo nao;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// export default function App(){
//     return(
//         <View>
//             <Text style={estilo.texto}>  
//                 Hello World
//             </Text>
//             <Button 
//                 title="Clique em mim"
//             />
//         </View>
//     );
// }

export default function login(){
    return(
        <View>
            <View>
                <Text>Entrar</Text>
            </View>
            <View>
                <TextInput
                    placeholder="email"
                />
                <TextInput
                    placeholder="senha"
                />
            </View>
            <View>
             <Button title="entrar" />
             <Text>cadastre-se</Text>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    texto: {
        color:'#04bac3'
    }

});

