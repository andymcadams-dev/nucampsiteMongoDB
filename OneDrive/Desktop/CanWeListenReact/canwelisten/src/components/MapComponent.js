import React, { useState } from 'react';
import ZipCodePlaceHolder from './ZipCodeComponent';

function MapPage () {
  const [zipCode, setZipCode]=useState(
    ''
  )
  return (
    <ZipCodePlaceHolder
    zipCode={zipCode}
    handleZipCodeChange={handleZipCodeChange}
    />
  )
}
export default MapPage;