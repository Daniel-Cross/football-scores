import React from 'react';

const Table = (props) => {
	const { handleSearch } = props;
	return (
		<div id="Table">
			<p>I am a table</p>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default Table;
