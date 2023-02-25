function scoreAd(adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
  return bid;
}
  
function reportResult(auctionConfig, browserSignals) {
  console.log("==== reportResult ====");
  console.log(auctionConfig);
  console.log(browserSignals);

  return {
    success: true,
    signalsForWinner: { signalForWinner: 1 },
    reportUrl: auctionConfig.seller + '/report_seller',
  };
}