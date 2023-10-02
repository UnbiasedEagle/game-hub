import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import { useGenre } from '../hooks/useGenre';
import { usePlatform } from '../hooks/usePlatform';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export const GameHeading: React.FC<GameHeadingProps> = ({ gameQuery }) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading marginY={5} fontSize='5xl' as='h1'>
      {heading}
    </Heading>
  );
};
