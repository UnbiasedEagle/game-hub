import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FormEvent, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useGameQueryStore } from '../store';

export const SearchInput = () => {
  const navigate = useNavigate();

  const searchText = useGameQueryStore((state) => state.setSearchText);

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (ref.current) {
      searchText(ref.current.value);
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder='Search games...'
          variant='filled'
        />
      </InputGroup>
    </form>
  );
};
