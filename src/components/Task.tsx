import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AvatarList, Tag, } from './';
import { ITask } from '../interfaces';
import { H3, P } from '../styles';

interface Props {
  task: ITask;
}

export const Task = ({task}: Props) => {
  const [images, setImages] = useState(task?.assingnee?.map((user) => user.avatar || ''));

  const [taskState, setTaskState] = useState(task);

  useEffect(() => {
    setTaskState(task);
  }, [task]);

  useEffect(() => {
    setImages(taskState?.assingnee?.map((user) => user.avatar || ''));
  }, [taskState.assingnee]);
  

  return (
    <Wrapper>
      <WrapperTags>
        <Tag name={`${taskState.tags[0].name}`} color={`${taskState.tags[0].color}`} />
        <Tag name={`${taskState.tags.length} sub tags`} color="#383838" />
      </WrapperTags>
      <Title>{taskState.title}</Title>
      <Description>{taskState.description}</Description>
      <WrapperAvatarTime>
        {
          images && <AvatarList imgs={images} />
        }
        <p> 
          <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
          </svg>
          {taskState?.updatedAt}
        </p>

      </WrapperAvatarTime>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  background-color: ${({theme}) => theme.bgCard};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.938rem 0.063rem rgba(0, 0, 0, 0.08);
  padding: 0.625rem;
  flex: 0 0 auto;
  margin-bottom: 1rem;
`;

const Title =  styled(H3)``;

const Description = styled(P)`
   display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const WrapperTags = styled.div`
  display: flex;
`;

const WrapperAvatarTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.paragraph};
    
    svg {
      margin-right: 5px;
    }
  }

`;
