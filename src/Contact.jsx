import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
  GridItem,Spacer
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon} from '@chakra-ui/icons'


const Contact = () => {
  return (
    <Container maxW="container.xl" p={{ base: 4, sm: 5, md: 5, lg: 5, xl: 8 }}>
      <Flex direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} py={{ base: 4, sm: 6, md: 10, lg:9, xl: 9 }} gap={{ base: 4, sm: 6, md: 10, lg: 12, xl: 16 }}>

        {/* Message section */}
        <Box boxShadow='2xl' bgGradient='linear(gray.100 0%, white.100 25%, yellow.100 50%)' w={{ base: '100%', sm: '100%', md: '60%', lg: '60%', xl: '60%' }} h="auto" p={{ base: 4, sm: 8, md: 50 }}>
          <VStack alignItems="flex-start" w="100%">

            {/* Title & Subtitle */}
            <VStack spacing={1} alignItems={'flex-start'}>
              <Text color='#3bb77e'fontWeight="400" fontSize={{ base: "18px", sm: "17px", md: "20px", lg: "18px", xl: "23px" }}>Get in touch</Text>
              <Heading fontSize={{ base: "20px", sm: "26px", md: "28px", lg: "28px", xl: "30px" }}>Write Us A Message</Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} columnGap={8} rowGap={3} spacing={16} marginTop={8} width="100%">

              {/* Name Input box */}
              <GridItem colSpan={{ base: 1, sm: 1, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel>Your Name </FormLabel>
                  <Input height="40px" type='text' name='name' focusBorderColor="#3bb77e" errorBorderColor="red.500"/>
                </FormControl>
              </GridItem>

              {/* Subject Input box */}
              <GridItem colSpan={{ base: 1, sm: 1, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel>Your Subjects </FormLabel>
                  <Input height="40px" type='text' name='subject'  focusBorderColor="#3bb77e" errorBorderColor="red.500" />
                </FormControl>
              </GridItem>

              {/* Email Input box */}
              <GridItem colSpan={{ base: 1, sm: 1, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel>Your Email </FormLabel>
                  <Input height="40px" type='email' name='email'  focusBorderColor="#3bb77e" errorBorderColor="red.500" />
                </FormControl>
              </GridItem>

              {/* Phone Input box */}
              <GridItem colSpan={{ base: 1, sm: 1, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel>Your Phone </FormLabel>
                  <Input height="40px" type='tel' name='phone'  focusBorderColor="#3bb77e" errorBorderColor="red.500" />
                </FormControl>
              </GridItem>

              {/* Message box */}
              <GridItem colSpan={{ base: 2, sm: 1, md: 2 }}>
                <FormControl isRequired>
                  <FormLabel>Your message </FormLabel>
                  <Textarea width="100%" height={120} focusBorderColor="#3bb77e" isInvalid></Textarea>
                </FormControl>
              </GridItem>

              {/* Button */}
              <GridItem colSpan={{ base: 2, sm: 1, md: 1 }}>
                <Button bg='#3bb77e' color={'white'} size='md' mt={{ base: 4, sm: 4, md: 4, lg: 8, xl: 12 }} >SEND MESSAGE</Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Box>

        {/* Info section */}
        <Box boxShadow='2xl' bgGradient='linear(gray.100 0%, white.100 25%, yellow.100 50%)' w={{ base: '100%', sm: '100%', md: '40%', lg: '40%', xl: '40%' }} h="auto" p={{ base:20, sm: 8, md: 30 }}>
          <SimpleGrid spacing={{base:20,sm:6,md:12}} p={{base:7}} >

            <GridItem bg="gray.50" p={3}>
              <VStack alignItems='flex-start' >
               
                <Heading fontSize={{ base: "20px", sm: "21px", md: "22px", lg: "25px", xl: "27px" }} color='#3bb77e'><PhoneIcon boxSize={5} mr={3} color={'gray'}/>Call us Now:</Heading>
                <Text>9911568871 / 8004214285</Text>
              </VStack>
            </GridItem>

            <GridItem bg="gray.50" p={3}>
              <VStack alignItems='flex-start' >
                <Heading fontSize={{ base: "20px", sm: "21px", md: "22px", lg: "25px", xl: "27px" }} color='#3bb77e' ><EmailIcon boxSize={5} mr={3} color={'gray'}/>Email At:</Heading>
                <Text>example@gmail.com</Text>
              </VStack>
            </GridItem>

            <GridItem bg="gray.50" p={3}>
              <VStack alignItems='flex-start' >
                <Heading fontSize={{ base: "20px", sm: "21px", md: "22px", lg: "25px", xl: "27px" }} color='#3bb77e'><PhoneIcon boxSize={5} mr={3} color={'gray'}/>Our Address:</Heading>
                <Text>Registered Address Prop- 73, Third Floor, Pocket-1, Sector-25, North West, New Delhi-110085, India Corporate Address 408, 4th Floor, Naval Kishore Road, Prince Market, Hazratganj, Lucknow 226001, UP, India</Text>
              </VStack>
            </GridItem>
          </SimpleGrid>
        </Box>

      </Flex>
    </Container>
  )
}

export default Contact;
