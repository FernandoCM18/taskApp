import { useEffect, useState } from 'react';
import { IProject } from '../interfaces';
import { WrapperScrollX } from '../styles';
import { Project } from './Project';

interface Props {
  projects: IProject[];
}

export const ProjectList = ({projects}: Props) => {
  const [projectsState, setProjectsState] = useState(projects);

  useEffect(() => {
    setProjectsState(projects);
  }, [projects]);

  return (
    <WrapperScrollX>
      {
        projectsState && projectsState.map((project) => (
          <Project 
            key={project.id} 
            project={project} 
            completedTasks={project.completedTasks || 0} 
            totalTasks={project.totalTaks || 0}  
          />
        ))
      }
    </WrapperScrollX>
  );
};
