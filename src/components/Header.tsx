import styled from 'styled-components';
import { P } from '../styles/';
import { IUser } from '../interfaces';
import { useEffect, useState } from 'react';

interface Props {
  user: IUser;
}

export const Header = ({user}: Props) => {
  const [userState, setUserState] = useState(user);

  useEffect(() => {
    setUserState(user);
  }, [user]);

  return (
    <WrapperHeader>
      <Wrapper>
        <Avatar src={userState.avatar} alt="avatar" />
        <WrapperAvatarText>
          <NamePerson>{`${userState.name} ${userState.lastName}`}</NamePerson>
          <Description>Hello, {userState.name} ✋</Description>
        </WrapperAvatarText>
      </Wrapper>
      <svg color='#212121' aria-label="menu-bar" width={30} height={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
    </WrapperHeader>
  );
};

const WrapperHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperAvatarText = styled.div`
  margin-left: 1em;
`;

const Avatar = styled.img`
  width: 4em;
  height: 4em;
  border-radius: 50%;
`;

const NamePerson = styled(P)`
  color: ${({theme}) => theme.text};
  font-weight: 600;
  margin-bottom: 0.5em;
`;

const Description = styled(P)`
  margin-top: 0em;
`;
