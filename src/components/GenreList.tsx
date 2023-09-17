import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { useGenres } from '../hooks/useGenres';
import { getCroppedImageUrl } from '../services/image-url';

export const GenreList = () => {
  const { data: genres } = useGenres();

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
