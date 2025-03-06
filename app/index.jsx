import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";

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
                <Text>Login</Text>
            </View>
            <View>
                <TextInput
                    placeholder="email"
                />
                <TextInput
                    placeholder="senha"
                />
                <Text>esqueci a senha</Text>
            </View>
            <View>
             <Pressable>
                <Text>Entrar</Text>
             </Pressable>
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

