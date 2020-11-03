const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messagelogged', (arg) => {
	console.log('Listener called', arg);
});

function log(message) {
	// send an http request
	console.log(message);
}

module.exports.log = log;
module.exports.emitter = emitter;
