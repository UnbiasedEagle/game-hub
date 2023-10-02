import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Platform, usePlatforms } from '../hooks/usePlatforms';

interface PlatformSelectorProps {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
}

export const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  selectedPlatformId,
  onSelectPlatform,
}) => {
  const { data: platforms, error } = usePlatforms();

  if (error) {
    return null;
  }

  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => {
          return (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
