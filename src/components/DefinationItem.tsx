import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface DefinationItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

export const DefinationItem: React.FC<DefinationItemProps> = ({
  term,
  children,
}) => {
  return (
    <Box marginY={5}>
      <Heading as='dt' fontSize='md' color='gray.600'>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};
