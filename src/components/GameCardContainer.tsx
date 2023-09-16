import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

export const GameCardContainer: React.FC<GameCardContainerProps> = ({
  children,
}) => {
  return (
    <Box width='300px' borderRadius={10} overflow='hidden'>
      {children}
    </Box>
  );
};
