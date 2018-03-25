Folder contains .sh files to setup hyperledger environment 

Following comands should be used to generate the hyper-vote rest API.
Only once you have installed all the prereqs, and .sh files have been executed

1. composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName hyper-vote
2. composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile hyper-vote@0.0.1.bna --file networkadmin.card
3. composer card import --file networkadmin.card
4. composer network ping --card admin@hyper-vote
5. composer-rest-server 
    Enter the following to the questions presented:
    5.1. admin@hyper-vote
    5.2. never use namespaces
    5.3. No
    5.4. Yes 
    5.5. No

6. You should be able to browse the the APIs on http://localhost:3000/explorer

Additional(Exposing APIs from local host to rest of team Testing):
1. npm install -g localtunnel
2. lt --port 3000


If you left your network running and came back to try expose the Rest APIs things happen!
Try run 
composer card delete -n PeerAdmin@hyper-vote
composer card delete -n admin@hyper-vote


