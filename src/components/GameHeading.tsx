import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export const GameHeading: React.FC<GameHeadingProps> = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;
  return (
    <Heading marginY={5} fontSize='5xl' as='h1'>
      {heading}
    </Heading>
  );
};
