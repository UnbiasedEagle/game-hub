import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContainer } from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface GameGridProps {
  selectedGenre: Genre | null;
}

export const GameGrid: React.FC<GameGridProps> = ({ selectedGenre }) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding='10px'
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => {
            return (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            );
          })}
        {games.map((game) => {
          return (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
};
