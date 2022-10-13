import React, { useState } from 'react';
import PreviewImageSingle from '../PreviewImageSingle';
import styled from 'styled-components';

const ImageForm = () => {
  const [workPreviewUrl, setWorkPreviewUrl] = useState<string | null>(null);
  const [workFile, setWorkFile] = useState<File | null>(null);

  const handleInputClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const yes: HTMLElement = e.currentTarget
      .nextElementSibling as HTMLInputElement;
    yes.click();
  };

  const handleWorkUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    let file;
    // 1. onChange이벤트로 e.target에서 files를 받아온다
    if (e.target.files) {
      file = e.target.files[0];
      setWorkFile(file);
      let reader = new FileReader(); // new FileReader()는 파일을 담는 통이라고 생각하면 된다

      if (reader && file) {
        // 빈 통에 readAsData로 file의 값을 집어 넣음
        reader.readAsDataURL(file);
        // 로드가 되면 이 이벤트를 실행시켜라, setWorkPreviewUrl에 값을 넣어라
        reader.onload = () => {
          setWorkPreviewUrl(reader.result as string);
        };
      } else {
        setWorkFile(null);
        setWorkPreviewUrl(null);
      }
    }
  };

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    setWorkPreviewUrl(null);
  };

  // const handleDelete:React.MouseEventHandler<HTMLButtonElement> = (e) => {
  //   e.preventDefault()
  //   const datasetIndex =e.currentTarget.parentNode?.parentElement?.dataset.index
  //   const datasetPhotoType=e.currentTarget.parentNode?.parentElement?.parentElement?.dataset.photo
  //   if(datasetPhotoType){
  //     if(datasetIndex){

  //       handleDeleteSelected(datasetPhotoType, datasetIndex)
  //     }

  //   }

  // }

  // const handleDeleteSelected = (datasetPhotoType:string, datasetIndex:string) => {

  //   if(datasetPhotoType === 'museum'){

  //     const aray1 = [...museumUploadArray2]
  //     const aray2 = aray1.filter(val => aray1.indexOf(val) !== parseInt(datasetIndex) )
  //     setMuseumUploadArray2(aray2)

  //     const array1 = [...museumPreviewArray2]
  //     const array2 = array1.filter(val => array1.indexOf(val) !== parseInt(datasetIndex) )
  //     setMuseumPreviewArray2(array2)

  //   }else if(datasetPhotoType === 'exhibition'){

  //     const aray1 = [...exhibitionUploadArray2]
  //     const aray2 = aray1.filter(val => aray1.indexOf(val) !== parseInt(datasetIndex) )
  //     setExhibitionUploadArray2(aray2)

  //     const array1 = [...exhibitionPreviewArray2]
  //     const array2 = array1.filter(val => array1.indexOf(val) !== parseInt(datasetIndex) )
  //     setExhibitionPreviewArray2(array2)

  //   }

  // }

  return (
    <>
      <div>
        <ImageFormButton onClick={handleInputClick}>
          이미지파일 선택
        </ImageFormButton>
        <input
          style={{ display: 'none' }}
          type='file'
          name='file'
          accept='image/*'
          onChange={handleWorkUpload}
        />
        <div>
          {workPreviewUrl && (
            <PreviewImageSingle
              url={workPreviewUrl}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default ImageForm;

const ImageFormButton = styled.button`
  font-size: 1.6rem;
  margin-left: 5rem;
  height: 3.6rem;
  width: 14rem;
  border-radius: 0.8rem;
  background-color: rgb(199, 199, 199, 0.6);
  margin-bottom: 1rem;
`;
