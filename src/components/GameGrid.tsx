import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { GameQuery } from '../App';
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';
import { GameCardContainer } from './GameCardContainer';
import { GameCardSkeleton } from './GameCardSkeleton';

interface GameGridProps {
  gameQuery: GameQuery;
}

export const GameGrid: React.FC<GameGridProps> = ({ gameQuery }) => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Box padding='10px'>
      <SimpleGrid
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

        {games?.pages.map((page, index) => {
          return (
            <Fragment key={index}>
              {page.results.map((game) => {
                return (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                );
              })}
            </Fragment>
          );
        })}
      </SimpleGrid>
      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </Box>
  );
};
