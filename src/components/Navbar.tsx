import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInput } from './SearchInput';

export const Navbar = () => {
  return (
    <HStack padding='10px'>
      <Link to='/'>
        <Image src={logo} width='60px' />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
