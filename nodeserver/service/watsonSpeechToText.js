var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var file = '/Users/franklinparker/documents/GBSLendingSolutions/SpeechToText/mortgage.wav';


// or streaming
const speechToText = (username, password, file) => {
	return new Promise((resolve, reject) => {
		try {
			var speechToText = new SpeechToTextV1({
				username: username,
				password: password,
				url: 'https://stream.watsonplatform.net/speech-to-text/api/'
			});
			var params = {
				// From file
				audio: fs.createReadStream(file.path),
				content_type: 'audio/l16; rate=44100',
			};

			speechToText.recognize(params, function (err, res) {
				if (err)
					reject(err);
				else
					resolve(res);
			});
		}catch(e){
			reject(e);
		}

	});
}

module.exports.speechToTextService = {
	speechToText
}
