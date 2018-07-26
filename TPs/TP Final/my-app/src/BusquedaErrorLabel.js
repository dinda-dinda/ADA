import React from 'react';
  /*Form Error Label*/
  export const BusquedaErrorLabel = ({busquedaErrorLabel}) =>
  	<div className='errorLabel'>
		  {busquedaErrorLabel.cajaBusqueda &&<p>Error de busqueda</p>}
	</div>

export default BusquedaErrorLabel;


