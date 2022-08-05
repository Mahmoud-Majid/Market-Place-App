// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = [
  ['Home', ''],
  ['Projects', 'projects'],
  ['Services', 'services'],
  ['About', 'about'],
  ['Contact', 'contact'],
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`/${children[1]}`}
  >
    {children[0]}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('#f6d193', 'gray.900')}
        px={4}
        borderRadius={'xl'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box alignItems={'center'}>
              <Avatar
                size={'md'}
                src={
                  'https://media.istockphoto.com/photos/golden-eco-house-logo-illustration-graphic-design-3d-render-picture-id679675932?b=1&k=20&m=679675932&s=170667a&w=0&h=z5PNoSmtQg4yi3Ye3vxCy3dmHcKrB_Dtb4LB1XcEQ-4='
                }
                _hover={{
                  borderColor: 'yellow.500',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  transition: 'all 0.2s ease-in-out',
                }}
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link[0]}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link[0]}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
