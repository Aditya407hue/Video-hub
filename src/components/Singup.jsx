import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Singup = () => {
  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
        <VStack alignItems={'stretch'} spacing={'8'}
        w={['full','96' ]} m={'auto'}>
            <Heading>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'20'}/>
            < Input placeholder={'Name'}
            type={'text'}
            required 
            focusBorderColor={'purple.500'}/>
           
            < Input placeholder={'Email'}
            type={'email'}
            required 
            focusBorderColor={'purple.500'}/>
            < Input placeholder={'Password'}
            type={'password'}
            required 
            focusBorderColor={'purple.500'}/>

         <Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>

            <Text textAlign={'right'}> Already a user ? {'   '}
            <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'}>Login</Link>
            </Button>
            </Text>
         
        </VStack>
    </form>
  </Container>
}

export default Singup