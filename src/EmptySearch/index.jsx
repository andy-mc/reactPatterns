import React from 'react';

const EmptySearch = ({ searchText }) => (
  <p>
    No hay resultados para
    {' '}
    {searchText}
  </p>
);

export { EmptySearch };
