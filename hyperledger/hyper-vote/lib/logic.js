/**
 * Track the transfer of a share from one shareholder to another
 * @param {org.acme.sample.TransferShare} transfer - the transfer to be processed
 * @transaction
 */
function TransferShare(transfer) {
    transfer.share.owner = transfer.newOwner;
    return getAssetRegistry('org.acme.sample.Share')
        .then(function (assetRegistry) {
            return assetRegistry.update(transfer.share);
        });
}

/**
 * Track the vote decison made on a share 
 * @param {org.acme.sample.MakeVote} vote - the vote decison to be processed
 * @transaction
 */
function MakeVote(vote) {
    vote.share.votedecision = vote.newVoteDecision;
    return getAssetRegistry('org.acme.sample.Share')
        .then(function (assetRegistry) {
            return assetRegistry.update(vote.share);
        });
}
