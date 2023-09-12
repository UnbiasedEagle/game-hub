import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import { PlatformIconList } from './PlatformIconList';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
};
