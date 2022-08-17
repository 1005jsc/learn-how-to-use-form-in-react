import React from 'react';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <div className='App'>
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
