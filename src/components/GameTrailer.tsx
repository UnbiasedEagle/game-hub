import { useTrailers } from '../hooks/useTrailers';

interface GameTrailerProps {
  gameId: number;
}

export const GameTrailer: React.FC<GameTrailerProps> = ({ gameId }) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error;
  }

  const first = data?.results[0];

  if (!first) {
    return null;
  }

  return <video controls src={first.data[480]} poster={first.preview}></video>;
};
