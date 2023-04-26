import './App.css';
import styled from 'styled-components';
import { HomePage } from './pages/HomePage';

function App() {

  return (
    <AppWrapper>
      <HomePage />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
`;
