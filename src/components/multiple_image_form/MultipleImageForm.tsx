import React, { useState } from 'react';
import PreviewImageMultiple from '../PreviewImageMultiple';

const MultipleImageForm = () => {
  const [museumPreviewArray1, setMuseumPreviewArray1] = useState<Array<string>>(
    []
  );
  const [museumPreviewArray2, setMuseumPreviewArray2] = useState<Array<string>>(
    []
  );

  const [museumUploadArray1, setMuseumUploadArray1] = useState<Array<File>>([]);
  const [museumUploadArray2, setMuseumUploadArray2] = useState<Array<File>>([]);

  const handleExhibitionBuildingPhotoUpload: React.ChangeEventHandler<
    HTMLInputElement
  > = async (e) => {
    e.preventDefault();
    const array1 = [] as string[];
    const aray1 = [] as File[];

    const files = e.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        aray1.push(files[i]);
        const aray2 = [...aray1];
        setMuseumUploadArray1(aray2);
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          array1.push(reader.result as string);
          const array2 = [...array1];
          setMuseumPreviewArray1(array2);
        };
      }
    }
  };

  const handleInputClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const yes: HTMLElement = e.currentTarget
      .nextElementSibling as HTMLInputElement;
    yes.click();
  };

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const datasetIndex =
      e.currentTarget.parentNode?.parentElement?.dataset.index;
    const datasetPhotoType =
      e.currentTarget.parentNode?.parentElement?.parentElement?.dataset.photo;
    if (datasetPhotoType) {
      if (datasetIndex) {
        handleDeleteSelected(datasetPhotoType, datasetIndex);
      }
    }
  };

  const handleDeleteSelected = (
    datasetPhotoType: string,
    datasetIndex: string
  ) => {
    if (datasetPhotoType === 'museum') {
      const aray1 = [...museumUploadArray2];
      const aray2 = aray1.filter(
        (val) => aray1.indexOf(val) !== parseInt(datasetIndex)
      );
      setMuseumUploadArray2(aray2);

      const array1 = [...museumPreviewArray2];
      const array2 = array1.filter(
        (val) => array1.indexOf(val) !== parseInt(datasetIndex)
      );
      setMuseumPreviewArray2(array2);
    }
  };

  return (
    <>
      <div>
        <div>
          <span>4. 전시장 건물사진 등록하기</span>
        </div>
        <button onClick={handleInputClick}>이미지파일 선택</button>
        <input
          type='file'
          name='file'
          accept='image/*'
          multiple
          onChange={handleExhibitionBuildingPhotoUpload}
        />
        <div data-photo='museum'>
          {museumPreviewArray2 &&
            museumPreviewArray2.map((url, index) => {
              return (
                <PreviewImageMultiple
                  handleDelete={handleDelete}
                  key={index}
                  index={index}
                  url={url}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
export default MultipleImageForm;
