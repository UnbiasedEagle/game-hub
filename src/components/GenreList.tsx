import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { Genre, useGenres } from '../hooks/useGenres';
import { getCroppedImageUrl } from '../services/image-url';

interface GenreListProps {
  onSelectedGenre: (genre: Genre) => void;
}

export const GenreList: React.FC<GenreListProps> = ({ onSelectedGenre }) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <List>
      {genres.map((genre) => {
        return (
          <ListItem paddingY='5px' key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize='32px'
                borderRadius={8}
              />
              <Button
                onClick={() => onSelectedGenre(genre)}
                variant='link'
                fontSize='lg'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};
