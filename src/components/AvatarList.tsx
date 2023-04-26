import styled from 'styled-components';
import { Avatar } from './Avatar';
import { useEffect, useState } from 'react';

interface Props {
  imgs: string[];
}

export const AvatarList = ({imgs}: Props) => {
  const [images, setImages] = useState(imgs);
  const [lengthImage] = useState(images.length);

  useEffect(() => {
    setImages(imgs);
  }, [imgs]);

  return (
    <WrapperAvatars>
      {
        (lengthImage > 0 && lengthImage < 4) 
          ? images.map((img, index) => (<Avatar key={index} img={img} />)) 
          : (
            <>
              <Avatar img={images[0]} />
              <Avatar img={images[1]} />
              <Avatar img={images[2]} />
              <div style={{
                backgroundImage: `url('${images[3]}')`,
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}>
                <span>+{images.length - 3}</span>
              </div>
            </>
          )

      }
    </WrapperAvatars>
  );
};

const WrapperAvatars = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${({theme}) => theme.bgCard};
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(1px);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;