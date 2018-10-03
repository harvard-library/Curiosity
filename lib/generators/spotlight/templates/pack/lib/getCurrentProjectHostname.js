const getCurrentProjectHostname = () => {
	let hostname = null;
	const hulHostnames = ['orphe.us', 'hul.local', 'localhost'];

	if (
		window &&
		window.location.hostname &&
		!~hulHostnames.indexOf(window.location.hostname)
	) {
		hostname = window.location.hostname;
	}

	// regularlize development domain
	if (hostname && hostname.endsWith('hul.local')) {
		hostname = hostname.replace('hul.local', 'orphe.us');
	}

	return hostname;
};

export default getCurrentProjectHostname;
