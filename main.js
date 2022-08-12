var fs = require('fs');
const fontFolder = './fonts/';
const destFile = './fonts-base64.css';

fs.readdir(fontFolder, (err, files) => {
	files.forEach((filename, i) => {
		let stem = getFilename(filename);
		let fontFamily = stem;
		
		let base64String = createBase64(filename);
		let fontBase = '@font-face { \n';
		fontBase += `\tfont-family: ${fontFamily};\n`;
		fontBase += `\tfont-style: normal;\n`;
		fontBase += `\tsrc: url('${base64String}') format('${getFontType(filename)}');\n`;
		fontBase += '}\n';

		//write to file
		fs.appendFileSync(destFile, fontBase);

		oldFileName = stem;
		base64String = '';

		base64String = createBase64(filename);
	});
});

console.log("Done.");

// create base64 encoding
function createBase64(fileFullName) {
	let dataType = `data:font/${getExtension(fileFullName)}`;
	let fileData = fs.readFileSync(fontFolder + fileFullName);
	let base64String = `${dataType};charset=utf-8;base64,${fileData.toString('base64')}`;
	return base64String;
}

// get file extension
function getExtension(filename) {
	return filename.split('.').pop();
}

// get file name
function getFilename(filename) {
	return filename.split('.').shift();
}

function getFontType(filename) {
	let fontType = ''
	let ext = getExtension(filename)
	switch (ext) {
		case 'ttf':
			fontType = 'truetype'
			break
		case 'woff':
			fontType = 'woff'
			break
		case 'woff2':
			fontType = 'woff2'
			break
	}
	return fontType
}