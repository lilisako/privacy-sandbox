// Define the interest group's owner
const owner = 'https://localhost:8080'
// Define the interest group
const interestGroup = {
    owner: owner, // The owner of the interest group
    name: 'travel', // The name of the interest group
    biddingLogicUrl: `${owner}/static/bidding_logic.js`,
    // biddingWasmHelperUrl: `${owner}/bidding_logic.wasm`,
    // dailyUpdateUrl: `${owner}/daily_update.js`,
    // trustedBiddingSignalsUrl: `${owner}/trusted_bidding_signals.js`,
    trustedBiddingSignalsKeys: ['key1', 'key2'],
    userBiddingSignals: {key1: 'value1', key2: 'value2'},
    ads: [ 
        {
            renderUrl: `${owner}/static/ad1.html`,
            metadata: {key1: 'value1', key2: 'value2'},
        },
        {
            renderUrl: `${owner}/static/ad2.html`,
            metadata: {key1: 'value1', key2: 'value2'},
        },
    ],
};

if (window.HTMLFencedFrameElement) {
    console.log("fencedframe is supported");
} else {
    console.log("fencedframe is not supported");
}
// Join the interest group which will be used for ad targeting
// This will be expired after 30 days
navigator.joinAdInterestGroup(interestGroup, 30 * 24 * 60 * 60).then(() => {
    console.log('Joined interest group');
}).catch((err) => {
    console.log('Failed to join interest group', err);
});
