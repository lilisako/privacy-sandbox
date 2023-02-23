## Privacy Sandbox Demo
This repository contains a demo of the Privacy Sandbox API. It is a simple web application that allows you to test the API in a browser.

### Setup
1. You have to prepare localhost certificates for the demo to work. You can follow this guide (https://web.dev/how-to-use-local-https/) to generate a localhost-key.pem and localhost.pem.

2. You have to setup the origin trial token. You can follow this guide (https://web.dev/origin-trials/) to generate a token. After generating a token, you have to add it to .env file in the root directory of the project.
```env
TOKEN="SAMPLE_TOKEN"
```

### How to start the demo
Run the following commands in the root directory of the project:
```sh
node ./server.js
```
and open the following URL in your browser:
```sh
https://localhost:8080/
```

### Useful links
- [Privacy Sandbox](https://www.chromium.org/Home/chromium-privacy/privacy-sandbox)
- [Buyer guide: join interest groups and generate bids](https://developer.chrome.com/docs/privacy-sandbox/fledge-api/interest-groups/)
- [FLEDGE API developer guide](https://developer.chrome.com/en/blog/fledge-api/)
