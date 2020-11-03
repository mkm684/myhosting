const logger = require('./logger');
const path = require('path')
const os = require('os')
const fs = require('fs')
const http = require('http');

logger.emitter.on('logging', function(arg) {
	console.log('logging called', arg)
});

logger.emitter.emit('logging', {data: 'message'})

console.log(logger)
logger.log('message');
logger.emitter.emit('messagelogged', {id:1, url:'https://'});

console.log(path.parse(__filename));
console.log(__dirname);

var totalMemory = os.totalmem();
var freeMemory = os.totalmem();

console.log('Total Memory : ' + totalMemory);
console.log(`Free Memory: ${freeMemory}`);

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('../', function(err, files){
	if (err) console.log('ERROR',  err);
	else console.log('Result', files);
});

const server = http.createServer(function(req, res){
	if (req.url === '/') {
		res.write('Hello World');
		res.end();
	} else if (req.url === '/api/courses') {
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	} 
});

server.listen(3000);