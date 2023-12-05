import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { useLocation } from 'react-router-dom';
import './CSS/templatestyle.css';
import { ChromePicker } from 'react-color';
import { FaDownload } from 'react-icons/fa';
import { AiOutlineBgColors } from 'react-icons/ai';
import TemplateContent from './TemplateContent';

function Template() {
  const location = useLocation();
  const data = location.state?.data;
  const resumeRef = useRef();
  const [selectedColor, setSelectedColor] = useState(data?.color || '#090853');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorButtonClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleColorPickerClose = () => {
    setShowColorPicker(false);
  };

  return (
    <div>
      <TemplateContent data={data} resumeRef={resumeRef} color={selectedColor} />
      <div className="color-picker">
        <div style={{width: '150px',height:'100px' }}>
          <button className='btn btn-outline-warning'  style={{backgroundColor:"#04142d"}} onClick={handleColorButtonClick}>
            Change Color <AiOutlineBgColors className="icon hom" size={22}/>
          </button>
          {showColorPicker && (
            <ChromePicker
              color={selectedColor}
              onChange={handleColorChange}
              onClose={handleColorPickerClose}
            />
          )}
        </div>
      </div>
      <div className="down">
        <ReactToPrint
          trigger={() => (
            <button className='btn btn-outline-warning'>
              Download <FaDownload className="icon hom" size={22} />
            </button>
          )}
          content={() => resumeRef.current}
        />
      </div>
    </div>
  );
}

export default Template;
