import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { useGenres } from '../hooks/useGenres';
import { getCroppedImageUrl } from '../services/image-url';

export const GenreList = () => {
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
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};
