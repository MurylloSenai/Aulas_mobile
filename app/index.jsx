
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";


export default function Login() {
  return (
    <View style={styles.container}>
  
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
        <Image
          source={require('./assets/images/user-profile-icon-free-vector.jpg')} // Atualize o caminho conforme necessário
          style={styles.profileIcon}
        />
      </View>

     {/* inputs para escrever */}
      <View style={styles.campos}>
        <TextInput
          style={styles.campoTexto}
          placeholder="email..."
        />
        <TextInput
          style={styles.campoTexto}
          placeholder="********"
        />
        <Text style={styles.esqueci_senha}>esqueci a senha</Text>
      </View>
      

      {/* acoes fa tela */}
      <View style={styles.acoes}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>entrar</Text>
        </Pressable>
        <Text style={styles.cadastrar}>Cadastre-se</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B263B",
    padding: 26,
  },

  header: {
    marginTop: 80,
    marginBottom: 110,
  },

  title: {
    fontSize: 60,
    color: "#EDF2F4",
    fontWeight: 'semibold',
  },
  
  profileIcon: {
    width: 60, // Ajuste a largura da imagem
    height: 60, // Ajuste a altura da imagem
    marginTop: 10,
  },

  campos: {
    gap: 15,
    alignItems: 'center',
  },
  
  campoTexto: {
    width: 344,
    height: 60,
    backgroundColor: "#EDF2F4",
    borderRadius: 20,
    textAlignVertical: 'center',
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000",
    borderColor: "#88CFEC",
    borderWidth: 3,
  },

  esqueci_senha: {
    color: '#88CFEC',
    alignSelf: 'flex-end',
    marginRight: 16,
    marginBottom: 20,
    fontSize: 14,
  },
  
  acoes: {
    gap: 20,
    marginTop: 10,
  },

  button: {
    width: 294, 
    height: 50,
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#88CFEC',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center', 
},

  buttonText: {
    color: "#000",
    fontSize: 25,
    fontWeight: 'regular',
    
  },
  cadastrar: {
    color: "#88CFEC",
    fontSize: 14,
    textAlign: 'center'
  },
});
