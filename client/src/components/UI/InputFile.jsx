import React, {createRef} from 'react';

import './inputfile.scss'

const InputFile = ({fileUploadHandler, file}) => {

  const fileName = file?.name;
  const fileInput = createRef();

  return (
    <div className="registration__file">
      <input id='file' accept='image/*' type="file" ref={fileInput} multiple={false} onChange={(e) => fileUploadHandler(e)} />
      <label htmlFor="file" className='registration__file-button'>           
      { fileName ? <span>{fileName}</span> : <span>Load yor avatar</span> }
      </label>
    </div>
  );
};

export default InputFile;
