import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

export const GameCardContainer: React.FC<GameCardContainerProps> = ({
  children,
}) => {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.15s ease-in',
      }}
      borderRadius={10}
      overflow='hidden'
    >
      {children}
    </Box>
  );
};
