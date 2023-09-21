import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContainer } from './GameCardContainer';

import { GameQuery } from '../App';

interface GameGridProps {
  gameQuery: GameQuery;
}

export const GameGrid: React.FC<GameGridProps> = ({ gameQuery }) => {
  const { data: games, error, isLoading } = useGames(gameQuery);

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
          xl: 4,
        }}
        spacing={6}
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
