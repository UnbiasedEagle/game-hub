import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { useGenres } from '../hooks/useGenres';
import { getCroppedImageUrl } from '../services/image-url';
import { useGameQueryStore } from '../store';

export const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((state) => state.setGenreId);

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
                  onClick={() => setSelectedGenreId(genre.id)}
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
