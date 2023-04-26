import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  color: string;
}

export const Tag = ({name, color}: Props) => {
  const [nameTag, setNameTag] = useState(name);
  const [colorTag, setColorTag] = useState(color);

  useEffect(() => {
    setNameTag(name);
    setColorTag(color);
  }, [name, color]);

    
  return (
    <Wrapper style={{backgroundColor: colorTag}}>
      {nameTag}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${({ theme }) => theme.bgCard};
  background-color: ${({theme}) => theme.bgTag};
  text-align: center;
  padding: 8px;
  width: fit-content;
  border-radius: 8px;
  margin-right: 10px;
  white-space: nowrap;
`;
