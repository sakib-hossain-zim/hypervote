var http = require('http');						//allows server
var exec = require('child_process').exec;				//allows terminal commands
//for html test
var fs = require('fs');							//allows reading of file, only for test
fs.readFile('./index.html', function (err, html) {
  if (err) {
      throw err;
  }

//loads these into exec before updating with MySQL data because of synchrony
var x = '"start"'
var y = '"start"'

http.createServer(function(request, response) {				//starts server
//for html test
  response.writeHeader(200, {"Content-Type": "text/html"});
  response.write(html);
  response.end();

  request.on('error', function(err) {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err) {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/') {
//    response.writeHeader(200, {"Content-Type": "text/html"});
//    response.write(html);
//    response.end();
//    request.pipe(response);
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.end("Hello World\n");
  }
  else if (request.method === 'GET' && request.url === '/?echo%2Fon='){
    exec('mysql -u root -pBaxe2DmaX test -e "SELECT * FROM (SELECT * FROM test.timestamps ORDER BY create_time DESC LIMIT 1) sub ORDER BY create_time ASC"', function(err, stdout, stderr) {
    if (err) throw err
    process.stdout.write(stdout)
    process.stderr.write(stderr)
    x = Buffer.from(stdout).toString('utf8');
    x = '"ON'+x.substr(35,8)+'"'
  })//.then(
    var on1 = "curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{  \"$class\": \"org.acme.biznet.Commodity\",  \"tradingSymbol\":"
    var on2 = ",  \"description\": \"hari\",  \"mainExchange\": \"string\",  \"quantity\": 0, \"owner\": \"lol\" }\' \'http://localhost:3000/api/Commodity\'"
    var on3 = on1+x+on2
    exec(on3, function(err, stdout, stderr) {
    if (err) throw err
    process.stdout.write(stdout)
    process.stderr.write(stderr)
  })
  //)
    response.end("ON\n");
  }
  else if (request.method === 'GET' && request.url === '/?echo%2Foff='){
    exec('mysql -u root -pBaxe2DmaX test -e "SELECT * FROM (SELECT * FROM test.timestamps ORDER BY create_time DESC LIMIT 1) sub ORDER BY create_time ASC"', function(err, stdout, stderr) {
    if (err) throw err
    process.stdout.write(stdout)
    process.stderr.write(stderr)
    y = Buffer.from(stdout).toString('utf8');
    y = '"OFF'+y.substr(35,8)+'"'
  })//.then(
    var off1 = "curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{  \"$class\": \"org.acme.biznet.Commodity\",  \"tradingSymbol\":"
    var off2 = ",  \"description\": \"malam\",  \"mainExchange\": \"string\",  \"quantity\": 0, \"owner\": \"lol\" }\' \'http://localhost:3000/api/Commodity\'"
    var off3 = off1+y+off2
    exec(off3, function(err, stdout, stderr) {
    if (err) throw err
    process.stdout.write(stdout)
    process.stderr.write(stderr)
  })
  //)
    response.end("OFF\n");
  }
  else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8081);

});
