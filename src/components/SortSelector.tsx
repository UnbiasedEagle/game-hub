import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { useGameQueryStore } from '../store';

const sortOrders = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average Rating' },
];

export const SortSelector = () => {
  const sortOrder = useGameQueryStore((store) => store.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((store) => store.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => {
          return (
            <MenuItem
              onClick={() => setSortOrder(sortOrder.value)}
              value={sortOrder.value}
              key={sortOrder.value}
            >
              {sortOrder.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
