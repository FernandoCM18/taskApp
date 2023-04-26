import { useEffect, useState } from 'react';
import { ITask } from '../interfaces';
import { WrapperScrollY } from '../styles';
import { Task } from './Task';

interface Props {
  tasks: ITask[];
}

export const TaskList = ({tasks}: Props) => {
  const [tasksState, setTasksState] = useState(tasks);

  useEffect(() => {
    setTasksState(tasks);
  }, [tasks]);

  return (
    <WrapperScrollY>
      {
        tasksState && tasksState.map((task) => <Task key={task.id} task={task} />)
      }
    </WrapperScrollY>
  );
};


