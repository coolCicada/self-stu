import React, { useRef, useState } from 'react';

function DragAndDropUpload() {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;

    handleFiles(files);
    console.log('e:', e, e.dataTransfer, e.dataTransfer.files);
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // 可以在这里执行文件上传操作
      console.log('Uploaded file:', file);
    }
  };

  const image = useRef();

  const onMouseDown = (e) => {
    console.log('image:', image);
    const dt = e.dataTransfer || new DataTransfer();
    dt.setData('text/plain', image.src);
    e.dataTransfer = dt;
  }

  return (
    <>
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          width: '300px',
          height: '200px',
          border: `2px dashed ${dragging ? 'blue' : 'gray'}`,
          textAlign: 'center',
          lineHeight: '200px',
          fontSize: '20px',
          color: dragging ? 'blue' : 'gray',
        }}
      >
        {dragging ? 'Drop files here' : 'Drag files here'}
      </div>
      <div style={{ height: '20px' }}></div>
      <img ref={image} onMouseDown={onMouseDown} width={200} src="https://lf3-icem.bytetos.com/obj/worktime/basicdata/1714218394810.jpg" alt="https://lf3-icem.bytetos.com/obj/worktime/basicdata/1714218394810.jpg" />
    </>
  );
}

export default DragAndDropUpload;
