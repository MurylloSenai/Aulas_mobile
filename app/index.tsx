// npm run start --tunel
//npx expo install --check
// npm run start --clear


import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons"; // Para projetos Expo
import styled from "styled-components/native";
import Titulo from "../components/Titulo/titulo";
import { useEffect, useState } from "react";
import { TextInputProps } from "react-native";
import CampoTexto from "@/components/Input/input";

export default function Login() {

    const [email, setEmail] = useState('example@example.com')
    const [ErrorEmail, setErrorEMail] = useState(false)

    const [senha, setSenha] = useState('@Example123')
    const [ErrorSenha, setErrorSenha] = useState(false)
    const [mostrarSenha, setMostrarSenha] = useState(false);


    useEffect(()=>{

      // Significa que a o texto que a pessoa digitar deve ser um email valido
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(!emailRegex.test(email))
      {
          // Se o texto não incluir o caractere @ e tiver menos que 3 carateres
          // sera mostrado o campo como incorreto
          setErrorEMail(true)
      }
      else{

          // Quando a pessoa inserir um email valido, as bordas vermelhas vão sumir
          setErrorEMail(false)
      }
  },[email])

  useEffect(()=>{
    //  Usando expressão regular para diminuir a quantidade 
    //  de condicionais para testar a senha
    //  Esse Regex testa se a senha:
    //  * Pelo menos 8 caracteres
    //  * Pelo menos uma letra maiúscula
    //  * Pelo menos um número
    //  * Pelo menos um caractere especial (!@#$%^&*)
    
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if(!passwordRegex.test(senha))
    {
        setErrorSenha(true)
    }
    else
    {
        setErrorSenha(false)
    }
},[senha])

useEffect(() => {
  console.log(`Visibilidade da senha alterada: ${mostrarSenha ? "Mostrar" : "Ocultar"}`);
}, [mostrarSenha]);

  return (
    <Container>
      <Titulo 
          texto ="Olá"
          flag={true}
      />
      <Titulo
          texto={"Bem vindo ao app"}
          flag={false}
      />
      <Header>
        <Title>Login</Title>
        <Icon source={require('./icon_perfil.png')} />
      </Header>

      <Campos>
      <EmailContainer>
      <CampoTexto 
                erro={ErrorEmail}
                placeholder="Digite seu email..."
                onChangeText={Text => setEmail(Text)}
            />
            {ErrorEmail ? 
              <TextErrorHint>Email Invalido!!</TextErrorHint>
              :
              null  
          }
           </EmailContainer>
        <SenhaContainer>
          <CampoTexto 
            erro={false}
            placeholder="Digite sua senha..."
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={!mostrarSenha}
          />
          <Pressable onPress={() => setMostrarSenha(!mostrarSenha)} style={{ position: 'absolute', right: 20, top: 18 }}>
            <Ionicons
              name={mostrarSenha ? "eye-off" : "eye"} // Ícone de olho
              size={24}
              color="#88cfec"
            />
          </Pressable>
            {ErrorSenha ?
              <TextErrorHint>Senha Incorreta!!</TextErrorHint>
              :
              null
          }
        </SenhaContainer>
        <EsqueciSenha>esqueci a senha</EsqueciSenha>
      </Campos>

      <Acoes>
        <Button>
          <ButtonText>entrar</ButtonText>
        </Button>
        <Cadastrar>Cadastre-se</Cadastrar>
      </Acoes>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  background-color: #1b263b;
  padding: 26px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 110px;
  margin-left: 6px;
  gap: 20px;
`;

const Title = styled.Text`
  font-size: 60px;
  color: #edf2f4;
  font-weight: 600;
`;

const Icon = styled.Image`
  width: 60px;
  height: 60px;
`;

const Campos = styled.View`
  gap: 15px;
  align-items: center;
`;

const SenhaContainer = styled.View`
  position: relative;
  width: 100%;
  align-items: center;
`;

const EsqueciSenha = styled.Text`
  color: #88cfec;
  align-self: flex-end;
  margin-right: 16px;
  margin-bottom: 15px;
  font-size: 14px;
`;

const Acoes = styled.View`
  gap: 20px;
  margin-top: 10px;
`;

const Button = styled.Pressable`
  width: 294px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #88cfec;
  border-radius: 20px;
  padding: 10px;
  align-self: center;
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: 400;
`;

const Cadastrar = styled.Text`
  color: #88cfec;
  font-size: 14px;
  text-align: center;
`;

const TextErrorHint = styled.View`
  font-size: 14px;
  color: #ca0717;
  margin-right: 210px;
`;

const Olho = styled.Pressable`
color:  #88cfec;
`
const EmailContainer = styled.View`
 position: relative;
  width: 100%;
  align-items: center;
`
