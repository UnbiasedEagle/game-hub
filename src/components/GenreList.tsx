import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { Genre, useGenres } from '../hooks/useGenres';
import { getCroppedImageUrl } from '../services/image-url';

interface GenreListProps {
  selectedGenreId?: number;
  onSelectedGenre: (genre: Genre) => void;
}

export const GenreList: React.FC<GenreListProps> = ({
  selectedGenreId,
  onSelectedGenre,
}) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading marginTop={9} marginBottom={3} fontSize='2xl'>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => {
          return (
            <ListItem paddingY='5px' key={genre.id}>
              <HStack>
                <Image
                  objectFit='cover'
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize='32px'
                  borderRadius={8}
                />
                <Button
                  whiteSpace='normal'
                  textAlign='left'
                  fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
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
    </>
  );
};
