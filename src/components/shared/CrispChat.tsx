const CrispChat = () => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
          window.$crisp=[];
          window.CRISP_WEBSITE_ID="a54ca556-10fa-4f10-b350-58383971ce95";
          (function(){
            var d=document;
            var s=d.createElement("script");
            s.src="https://client.crisp.chat/l.js";
            s.async=1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
        `,
    }}
  />
);

export default CrispChat;
