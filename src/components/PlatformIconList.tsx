import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Platform } from '../hooks/usePlatforms';

interface PlatformIconListProps {
  platforms: Platform[];
}

const iconMap: Record<string, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

export const PlatformIconList: React.FC<PlatformIconListProps> = ({
  platforms,
}) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        return (
          <Icon
            key={platform.id}
            color='gray.500'
            as={iconMap[platform.slug]}
          />
        );
      })}
    </HStack>
  );
};
