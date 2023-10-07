import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { usePlatform } from '../hooks/usePlatform';
import { usePlatforms } from '../hooks/usePlatforms';
import { useGameQueryStore } from '../store';

export const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  const selectedPlatformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  );

  const setSelectedPlatformId = useGameQueryStore(
    (store) => store.setPlatformId
  );

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => {
          return (
            <MenuItem
              onClick={() => setSelectedPlatformId(platform.id)}
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
