# /bin/bash
cd hyper-vote
composer network install --card PeerAdmin@hlfv1 --archiveFile hyper-vote@0.0.1.bna
composer network start --networkName hyper-vote --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@hyper-vote
echo To launch hyper-vote REST API, run: $ composer-rest-server -c admin@hyper-vote -n never -w true
