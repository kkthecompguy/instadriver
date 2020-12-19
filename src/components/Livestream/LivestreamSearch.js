import React, { useState } from 'react';

const LivestreamSearch = ({ getSearchInput }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const handleSubmit = e => {
    if (e.keyCode === 13) {
      getSearchInput(search);
    }
  }

  return (
    <div className='form-group has-search'>
      <span className='fas fa-search form-control-feedback custom-color'></span>
      <input
        value={search}
        onChange={e => handleChange(e)}
        onKeyDown={e => handleSubmit(e)}
        className=''
        placeholder='Search topics, drivers or location'
        type='text'
      />
    </div>
  );
}

export default LivestreamSearch;