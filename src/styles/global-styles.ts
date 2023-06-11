import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face{font-family:"Lato";font-weight:400;src:url("https://s.gr-assets.com/assets/lato/LatoLatin-Regular-1c0bbd257c304f0c439ffca5188bf64d.woff2") format("woff2"),url("https://s.gr-assets.com/assets/lato/LatoLatin-Regular-e8832baa1215a9e9ea90b3f2ea38dc68.woff") format("woff"),url("https://s.gr-assets.com/assets/lato/LatoLatin-Regular-08737475946c6f06ce49ff1ee56b9ea8.ttf") format("truetype")}
  @font-face{font-family:"Lato";font-weight:700;src:url("https://s.gr-assets.com/assets/lato/LatoLatin-Bold-68ef13b1d5b140f6454beaf8620f0d00.woff2") format("woff2"),url("https://s.gr-assets.com/assets/lato/LatoLatin-Bold-077e21baea097af14cd8256632ce1956.woff") format("woff"),url("https://s.gr-assets.com/assets/lato/LatoLatin-Bold-dfe669a40de6cb2a59f8377df467a57b.ttf") format("truetype")}
  @font-face{font-family:"Lato";font-style:italic;font-weight:400;src:url("https://s.gr-assets.com/assets/lato/LatoLatin-Italic-3c16c00fcdb07eb96a6bf4eefa26d1f9.woff2") format("woff2"),url("https://s.gr-assets.com/assets/lato/LatoLatin-Italic-62d791c8f3b80ef73d8a04e0a9eba27a.woff") format("woff"),url("https://s.gr-assets.com/assets/lato/LatoLatin-Italic-5e840c7e9634e72490b24626578af6b4.ttf") format("truetype")}
  @font-face{font-family:"Merriweather";font-weight:400;src:url("https://s.gr-assets.com/assets/mw/merriweather-regular-gr-31a207f66aa8b267307b841e4ac1955d.eot");src:url("https://s.gr-assets.com/assets/mw/merriweather-regular-gr-31a207f66aa8b267307b841e4ac1955d.eot?#iefix") format("embedded-opentype"),url("https://s.gr-assets.com/assets/mw/merriweather-regular-gr-01abdd2b4e6be250f29285f7248e978d.woff2") format("woff2"),url("https://s.gr-assets.com/assets/mw/merriweather-regular-gr-ab85b77f2bc59c76a25f8c8bca89e5a5.woff") format("woff"),url("https://s.gr-assets.com/assets/mw/merriweather-regular-gr-d5d052c244b392505d2dcbee9e12faec.ttf") format("truetype")}
  @font-face{font-family:"Merriweather";font-weight:700;src:url("https://s.gr-assets.com/assets/mw/merriweather-bold-gr-2538c285a65ac106e0ed7947ab0d7949.eot");src:url("https://s.gr-assets.com/assets/mw/merriweather-bold-gr-2538c285a65ac106e0ed7947ab0d7949.eot?#iefix") format("embedded-opentype"),url("https://s.gr-assets.com/assets/mw/merriweather-bold-gr-97a99a0fdb5f796fd06d1a1592c6b9fc.woff2") format("woff2"),url("https://s.gr-assets.com/assets/mw/merriweather-bold-gr-8218316882c48348418b78965fb31b26.woff") format("woff"),url("https://s.gr-assets.com/assets/mw/merriweather-bold-gr-0fe62114dec5d6df861a327a60af8bfd.ttf") format("truetype")}
  @font-face{font-family:"Merriweather";font-style:italic;font-weight:400;src:url("https://s.gr-assets.com/assets/mw/merriweather-italic-gr-77725b8657010ebf4bf46097a8c2ecb7.eot");src:url("https://s.gr-assets.com/assets/mw/merriweather-italic-gr-77725b8657010ebf4bf46097a8c2ecb7.eot?#iefix") format("embedded-opentype"),url("https://s.gr-assets.com/assets/mw/merriweather-italic-gr-09ea79839f9f0f72fe4d3e19f58d8e6a.woff2") format("woff2"),url("https://s.gr-assets.com/assets/mw/merriweather-italic-gr-af9ad46dbb1e319fd905d5c01b89acc9.woff") format("woff"),url("https://s.gr-assets.com/assets/mw/merriweather-italic-gr-9bcf1e88ad349f79c336a966961825a0.ttf") format("truetype")}

  html,
  body {
    height: 100%;
    width: 100%;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
  
  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
