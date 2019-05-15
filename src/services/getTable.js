import axios from 'axios';

const getTable = () =>
	axios
		.get('')
		.then(function(response) {
			const parsedData = response.data;
			console.log(parsedData);
		})
		.catch(function(error) {
			console.log(error);
		});

export default getTable;
