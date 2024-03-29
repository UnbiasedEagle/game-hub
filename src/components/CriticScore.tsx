import { Badge } from '@chakra-ui/react';

interface CriticScoreProps {
  score: number;
}

export const CriticScore: React.FC<CriticScoreProps> = ({ score }) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>
      {score}
    </Badge>
  );
};
