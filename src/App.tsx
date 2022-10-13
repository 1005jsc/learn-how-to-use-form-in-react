import React from 'react';
import './App.css';
import ImageForm from './components/single_image_form/ImageForm';
import MultipleImageForm from './components/multiple_image_form/MultipleImageForm';
import VeryBasicReactForm from './components/VeryBasicReactForm';

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <div className='App'>
      {/* <VeryBasicReactForm onSubmit={onSubmit} /> */}
      <ImageForm />

      {/* <MultipleImageForm /> */}
    </div>
  );
}

export default App;
