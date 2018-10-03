import axios from 'axios';


export const fetchDataList = async (slug) => {
	try {
		const response = await axios.get(
			`http://35.227.111.94:3000/spotlight/${slug}/catalog.json?f%5Blanguage_ssim%5D%5B%5D=English&q=`,
			{
				crossdomain: true,
			},
		);
		const data = await response.data;
		return data;
	} catch (e) {
		console.log(e);
	}
}

export const fetchDataDetail = async (id) => {
	try {
		const response = await axios.get(
			`http://35.227.111.94:3000/catalog/${id}.json`,
			{
				crossdomain: true,
			},
		);
		const data = await response.data;
		return data;
	} catch (e) {
		console.log(e);
	}
}

export const fetchDataFeature = async () => {
	try {
		const response = await axios.get(
			"http://35.227.111.94:3000/spotlight/sample-exhibit/feature.json",
			{
				crossdomain: true,
			},
		);
		const data = await response.data;
		return data;
	} catch (e) {
		console.log(e);
	}
}
