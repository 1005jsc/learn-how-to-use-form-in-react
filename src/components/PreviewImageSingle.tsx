import React, { useState } from 'react';

import styled from 'styled-components';
import DeleteButton from './DeleteButton';

type PreviewImageSingleProps = {
  url: string;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
};

const PreviewImageSingle = ({ url, handleDelete }: PreviewImageSingleProps) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <PreviewDiv
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {onHover && (
        <DeleteButtonDiv>
          <DeleteButton handleDelete={handleDelete} />
        </DeleteButtonDiv>
      )}

      <PreviewImage src={`${url}`} alt='' />
    </PreviewDiv>
  );
};
export default PreviewImageSingle;

const PreviewDiv = styled.div`
  display: flex;
  height: 20rem;
  max-width: 30rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  margin-bottom: 2rem;
  border: 1px solid rgb(199, 199, 199, 0.5);
  position: relative;
`;

const PreviewImage = styled.img`
  height: 90%;
  margin: auto;
`;

const DeleteButtonDiv = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
