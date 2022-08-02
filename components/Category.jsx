import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  useBoolean,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import Image from 'next/image'
import search from '../public/sale.png';
// const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
const IMAGE = search;

export default function Category({ url, title, link}) {
  const [flag, setFlag] = useBoolean();

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'200px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Link
          href={link}
        >
        <Box
        as={motion.div}
        animate={{ scale: flag ? 1.1 : 1 }}
         role={'group'}
         p={6}
         maxW={'200px'}
         w={'full'}
         rounded={'lg'}
         backgroundImage={`url(${url})`}
         onMouseEnter={setFlag.on}
         onMouseLeave={setFlag.off}
         height={'150'}
        //  backgroundPosition="center"
         backgroundRepeat="no-repeat"
         backgroundSize="cover"
        />
        </Link>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'lg'} fontFamily={'body'} fontWeight={400}>
            {title}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}



