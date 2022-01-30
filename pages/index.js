
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json'
import React from 'react';
import { useRouter } from 'next/router'

function Title(props) {
    console.log(props);
    const Tag = props.tag || 'h1';
    return(
        <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
            ${Tag} {
            color: ${appConfig.theme.colors.neutrals["000"]};
            font-size: 24px;
            font-weight: 600;
            }
            `}</style>
            </>
    );
}
{/*
//isto é um componente react
function HomePage() {
    //JSX
    return (
    <div>
        <GlobalStyle />
        <Titulo tag="h2">Open your door!</Titulo>
        <h2>Welcome</h2>
        </div>
    )
  }
  
  export default HomePage
*/}
export default function PaginaInicial() {
   //the variable and who I shoul warn when this variable changes
    const [username, setUsername] = React.useState("");
    const roteamento = useRouter();
    setUsername
  
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary["050"],
            backgroundImage: 'url(https://images.unsplash.com/photo-1527276826904-9c2275f441e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={(event) =>{
                event.preventDefault();
                console.log('someone submited the form');
                //Next.js routes it to us
                //window.location.href='/chat'
                roteamento.push('/chat')
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Welcome!</Title>
              <Title tag="h2">Insert your key and open your door</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
             
              <TextField
                value={username}
                onChange={(event) => {
                console.log('the user typed: ' + event.target.value);
                //Where is the value?
                if (event.target.value.length >= 2){
                const valor = event.target.value;
                //Change the value with React
                }
                setUsername(valor);
                
              }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary["050"],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              /> 
            
              <Button
                type='submit'
                label='Login'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[400],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }