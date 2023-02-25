// Define the interest group's owner
const owner = 'https://localhost:8080'
// Define the interest group
const interestGroup = {
    owner: owner, // The owner of the interest group
    name: 'travel', // The name of the interest group
    biddingLogicUrl: `${owner}/static/js/bidding_logic.js`,
    // biddingWasmHelperUrl: `${owner}/bidding_logic.wasm`,
    dailyUpdateUrl: `${owner}/static/js/daily_update.js`,
    trustedBiddingSignalsUrl: `${owner}/static/js/trusted_bidding_signals.js`,
    trustedBiddingSignalsKeys: ['key1', 'key2'],
    userBiddingSignals: {key1: 'value1', key2: 'value2'},
    ads: [ 
        {
            renderUrl: `${owner}/static/html/ad1.html`,
            metadata: {key1: 'value1', key2: 'value2'},
        },
    ],
};

// Leave the interest group
navigator.leaveAdInterestGroup(interestGroup).then(() => {
    console.log('Left interest group');
}).catch((err) => {
    console.log('Failed to leave interest group', err);
});