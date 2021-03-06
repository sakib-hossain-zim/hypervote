# /bin/bash
docker kill $(docker ps -q)
docker rm $(docker ps -aq)
docker rmi $(docker images dev-* -q)
npm install -g composer-cli
npm install -g composer-rest-server
npm install -g generator-hyperledger-composer
npm install -g yo
npm install -g composer-playground
mkdir fabric-tools && cd fabric-tools
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz
./downloadFabric.sh
./startFabric.sh
./createPeerAdminCard.sh
echo To start the web app \(Playground\), run: $ composer-playground
echo It should be accessible at http://localhost:8080/login
echo The main hyper-vote code for development and testing can be found at hypervote/hyper-vote
