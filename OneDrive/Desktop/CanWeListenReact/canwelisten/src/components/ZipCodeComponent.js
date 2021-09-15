import React from 'react';

function ZipCodePlaceHolder ({zipCode, handleZipCodeChange}) {
  return(
    <div>
      <label>Zip Code</label>
      <input type="text" value={zipCode} onChange={handleZipCodeChange} />
    </div>
  )
}
export default ZipCodePlaceHolder;