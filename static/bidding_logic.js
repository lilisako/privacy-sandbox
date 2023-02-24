function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    const testAd = interestGroup.ads[0];
    return {
        bid: 1,
        ad: {
            adName: "test",
        },
        render: testAd.renderUrl,
    };
}

function reportWin(auctionSignals, perBuyerSignals, sellerSignals, browserSignals, directFromSellerSignals) {
    console.log("==== reportWin ====");
    console.log(auctionSignals);
    console.log(perBuyerSignals);
    console.log(sellerSignals);
    console.log(browserSignals);
    console.log(directFromSellerSignals);
}