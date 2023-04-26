import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { H3 } from '../styles';
import { IProject } from '../interfaces';
import { ProgressBar } from './ProgressBar';

interface Props {
  project: IProject;
  completedTasks: number;
  totalTasks: number;
}

export const Project = ({project, completedTasks, totalTasks}: Props) => {
  const [projectState, setProjectState] = useState(project);

  useEffect(() => {
    setProjectState(project);
  }, [project]);

  return (
    <Wrapper>
      <Cover src={projectState.coverImage} alt="project cover"/>
      <NameProject>{projectState.name}</NameProject>
      <ProgressBar completedTasks={completedTasks} totalTasks={totalTasks} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.bgCard};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.938rem 0.063rem rgba(0, 0, 0, 0.08);
  padding: 0.625rem;
  flex: 0 0 auto;
  margin-right: 1rem;
  width: 180px;
`;

const Cover = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 11.875rem;
  object-fit: cover;
`;

const NameProject = styled(H3)``;

