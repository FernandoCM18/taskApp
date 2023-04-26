import styled from 'styled-components';
import { P } from '../styles';
import { useEffect, useState } from 'react';

interface ProgressBarProps {
  completedTasks: number;
  totalTasks: number;
}

export const ProgressBar = ({completedTasks, totalTasks}: ProgressBarProps) => {
  const [completed] = useState(completedTasks);
  const [total] = useState(totalTasks);
  const [percentCompleted, setPercentCompleted] = useState(() => (completed / total) * 100);

  useEffect(() =>{
    setPercentCompleted((completed / total) * 100);
  }, [completed, total, percentCompleted]);


  return (
    <WrapperProgressBar>
      <CounterTask>
        <span><span>{completed}</span>/{total} task </span><span>{percentCompleted}%</span>
      </CounterTask>
      <ProgressBarBackground>
        <ProgressBarFill style={{width: `${percentCompleted}%`}} />
      </ProgressBarBackground>
    </WrapperProgressBar>
  );
};

const WrapperProgressBar = styled.div``;

const CounterTask = styled(P)`
  display: flex;
  justify-content: space-between;
  color: ${({theme}) => theme.paragraph};

  div span {
    color: ${({theme}) => theme.text} !important;
  }
  
  span:last-child {
    color: ${({theme}) => theme.primary};
  }
`;

const ProgressBarBackground = styled.div`
  width: 100%;
  height: 0.625em;
  border-radius: 0.625em;
  background-color: #eee;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 0.625em;
  background-color: ${({theme}) => theme.primary};
  transition: width 0.5s ease-in-out;
`;

