import { HStack, Image } from '@chakra-ui/react';
import { ColorModeSwitch } from './ColorModeSwitch';
import logo from '../assets/logo.webp';

export const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} width='60px' />
      <ColorModeSwitch />
    </HStack>
  );
};
