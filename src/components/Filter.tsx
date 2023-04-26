import styled from 'styled-components';

interface Props {
  name?: string;
  active?: boolean;
  onClick?: () => void;
}

export const Filter = ({name, onClick, active}: Props) => {

  return (
    <Wrapper
      onClick={onClick}
      active={active}
    >
      {name}
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  color: ${({ theme, active}) => active ? theme.bgCard : theme.textTag};
  background-color: ${({theme, active}) => active ? theme.primary : theme.bgTag};
  font-weight: bold;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  margin-right: 10px;
  white-space: nowrap;
  width: fit-content;
`;
