
const sspUrl = 'https://localhost:8080';
const dspUrl = 'https://localhost:8080';
const auctionConfig = {
    seller: `${sspUrl}`,
    decisionLogicUrl: `${sspUrl}/static/js/decision-logic.js`,
    interestGroupBuyers: [dspUrl],
    auctionSignals: { isControversial: true },
    sellerSignals: { key: 'value' },
    sellerTimeout: 100,
    perBuyerSignals: {
      [dspUrl]: { windowInnerHeight: window.innerHeight },
    },
    perBuyerTimeouts: {
      '*': 50,
    },
};

// Run the ad auction
navigator.runAdAuction(auctionConfig)
.then((auctionResult) => {
  // Display the ad
  const iframeEl = document.getElementById('fledge-ad');
  iframeEl.src = auctionResult;
  console.log('Auction result', auctionResult);
}).catch((err) => {
    console.log('Failed to run ad auction', err);
});

