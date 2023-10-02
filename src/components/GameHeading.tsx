import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import { useGenres } from '../hooks/useGenres';
import { usePlatforms } from '../hooks/usePlatforms';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export const GameHeading: React.FC<GameHeadingProps> = ({ gameQuery }) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading marginY={5} fontSize='5xl' as='h1'>
      {heading}
    </Heading>
  );
};
