import styled from 'styled-components';


export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const P = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.paragraph};
`;