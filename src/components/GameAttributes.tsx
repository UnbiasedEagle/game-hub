import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game } from '../entities/Game';
import { CriticScore } from './CriticScore';
import { DefinationItem } from './DefinationItem';

interface GameAttributesProps {
  game: Game;
}

export const GameAttributes: React.FC<GameAttributesProps> = ({ game }) => {
  return (
    <SimpleGrid columns={2} as='dl'>
      <DefinationItem term='Platforms'>
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem term='Metascore'>
        <CriticScore score={game.metacritic} />
      </DefinationItem>
      <DefinationItem term='Genres'>
        {game.genres.map((genre) => {
          return <Text key={genre.id}>{genre.name}</Text>;
        })}
      </DefinationItem>
      <DefinationItem term='Publishers'>
        {game.publishers?.map((publisher) => {
          return <Text key={publisher.id}>{publisher.name}</Text>;
        })}
      </DefinationItem>
    </SimpleGrid>
  );
};
