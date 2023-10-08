import { Image, SimpleGrid } from '@chakra-ui/react';
import { useScreenshots } from '../hooks/useScreenshots';

interface GameScreenshotsProps {
  gameId: number;
}

export const GameScreenshots: React.FC<GameScreenshotsProps> = ({ gameId }) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => {
        return <Image key={file.id} src={file.image} />;
      })}
    </SimpleGrid>
  );
};
