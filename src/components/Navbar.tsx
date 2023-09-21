import { HStack, Image } from '@chakra-ui/react';
import { ColorModeSwitch } from './ColorModeSwitch';
import logo from '../assets/logo.webp';
import { SearchInput } from './SearchInput';

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} width='60px' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
