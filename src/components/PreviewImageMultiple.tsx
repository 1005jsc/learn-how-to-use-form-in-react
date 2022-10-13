import React, { useState } from 'react';
import DeleteButton from './DeleteButton';

type PreviewImageProps = {
  url: string;
  index: number;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
};

const PreviewImageMultiple = ({
  url,
  index,
  handleDelete,
}: PreviewImageProps) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      data-index={index}
    >
      {onHover && (
        <div>
          <DeleteButton handleDelete={handleDelete} />
        </div>
      )}
      <img src={`${url}`} alt='' />
    </div>
  );
};
export default PreviewImageMultiple;
