import React, { useState } from 'react';
// 이코드는 벨로퍼트 강의에서 가져옴
// https://react.vlpt.us/basic/09-multiple-inputs.html

// 리엑트에서 폼을 사용할때 가장 기본되는 방법임

type VeryBasicReactFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function VeryBasicReactForm({ onSubmit }: VeryBasicReactFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const { name, description } = form;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: '',
    });
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log('hi');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={name} onChange={handleChange} />
      <input
        type='text'
        name='description'
        value={description}
        onChange={handleChange}
      />

      <button type='submit'>등록</button>
      <button type='reset'>리셋</button>
      <button onClick={handleClick}>등록1</button>
      <button onClick={handleClick}>등록2</button>
    </form>
  );
}

export default VeryBasicReactForm;
