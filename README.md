# FLEDGE Demo
This repository contains a demo of the FLEDGE API. It is a simple web application that allows you to test the API in a browser.

1. First, you need to join an interest group. You can do this by visiting the cafe page or the travel page.

2. After visiting either one of the pages, you can visit the publisher website and see the related ad. The ad auction was executed on your device and the ad was rendered inside fenced frame tag. In this way, DSP won't be able to track you.

## Screenrecording
You can see the ad changes based on the interest group you joined. In this example, I joined the travel interest group and the ad is related to travel. Same goes for the cafe page.

https://user-images.githubusercontent.com/33516104/221344663-5167c7f4-9df3-4478-bfef-866a51741fb9.mov


## How to start the demo
1. Make sure to turn on the flag `#enable-fenced-frames` and `#privacy-sandbox-ads-apis` in `chrome://flags/` on Chrome browser before running the demo. 
- [chrome://flags/#enable-fenced-frames](chrome://flags/#enable-fenced-frames)
- [chrome://flags/#privacy-sandbox-ads-apis](chrome://flags/#privacy-sandbox-ads-apis)


2. Run the following command in the root directory of the project:
```sh
npm run start
```
and open the following URL in your browser:
```sh
https://localhost:8080/
```

## Useful links
- [Buyer guide: join interest groups and generate bids](https://developer.chrome.com/docs/privacy-sandbox/fledge-api/interest-groups/)
- [FLEDGE API developer guide](https://developer.chrome.com/en/blog/fledge-api/)
- [Privacy Sandbox](https://www.chromium.org/Home/chromium-privacy/privacy-sandbox)

## Todo
- [x] joinAdInterestGroup
- [x] leaveAdInterestGroup
- [x] runAdAuction
- [x] reportWin
- [x] reportResult
