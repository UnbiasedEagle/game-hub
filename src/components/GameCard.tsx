import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../entities/Game';
import { PlatformIconList } from './PlatformIconList';
import { CriticScore } from './CriticScore';
import { getCroppedImageUrl } from '../services/image-url';
import { Emoji } from './Emoji';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack marginBottom={3} justifyContent='space-between'>
            <PlatformIconList
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize='2xl'>{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </Link>
  );
};
