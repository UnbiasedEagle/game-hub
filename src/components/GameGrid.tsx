import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
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
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const fetchedGamesCount =
    games?.pages.reduce((result, page) => {
      return result + page.results.length;
    }, 0) || 0;

  return (
    <InfiniteScroll
      loader={<Spinner />}
      next={fetchNextPage}
      hasMore={Boolean(hasNextPage)}
      dataLength={fetchedGamesCount}
    >
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
    </InfiniteScroll>
  );
};
