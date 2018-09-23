/**
 * Convert sir Trevor to html
 */

const convert = ({ type, data, format }) => {
	let html = '';

	switch(type) {
	case 'text':
		html = data.text;
		break;

    /*
     * TODO: Add custom blocks if necessary
     */

	default:
		html = data.text;
		break;
	}


	return html;
};

const sirTrevorToHTML = (json) => {
	let html = ''

	json.data.forEach(block => {
		html += convert(block);
	});

	return html;
};

export default sirTrevorToHTML;
