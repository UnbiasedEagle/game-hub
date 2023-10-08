import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface ExpandableTextProps {
  children: string;
}

export const ExpandableText: React.FC<ExpandableTextProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) {
    return null;
  }

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.slice(0, limit) + '...';

  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!expanded)}
        colorScheme='yellow'
        fontWeight='bold'
        size='xs'
        marginLeft={1}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </Button>
    </Text>
  );
};
