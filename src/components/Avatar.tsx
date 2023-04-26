import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
}

export const Avatar = ({img}: Props) => {
  const [avatar, setAvatar] = useState(img);
  
  useEffect(() => {
    setAvatar(img);
  }, [img]);

  return (
    <WrapperAvatar>
      <Image key={avatar} src={avatar} alt="avatar"/>
    </WrapperAvatar>
  );
};

const WrapperAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;