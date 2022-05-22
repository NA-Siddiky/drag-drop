import React from 'react'
import PropTypes from 'prop-types'

import './drop-file-input.css';


import { ImageConfig } from '../../config/ImageConfig'; 
import uploadImg from '../../assets/cloud-upload-regular-240.png';

const DropFileInput = props => {
  return (
    <div    className="drop-file-input">
    <div className="drop-file-input__label">
        <img src={uploadImg} alt="" />
        <p>Drag & Drop your files here</p>
    </div>
    <input type="file" value="" />
</div>
  )
}

DropFileInput.propTypes = {}

export default DropFileInput