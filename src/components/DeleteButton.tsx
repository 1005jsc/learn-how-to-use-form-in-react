import React from 'react';

type DeleteButtonProps = {
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
};

const DeleteButton = ({ handleDelete }: DeleteButtonProps) => {
  return <button onClick={handleDelete}>삭제</button>;
};
export default React.memo(DeleteButton);
