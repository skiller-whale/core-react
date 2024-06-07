// https://vitejs.dev/guide/backend-integration.html
const Html = ({ children }) => {
  return (
    <html lang="en-US">
      <head>
        <script
          type="module"
          src="/src_tsx/rendering_on_the_server/server/preamble.ts"
          async={true}
        ></script>
        <script type="module" src="/@vite/client" async={true}></script>
        <title>Whale Weigh Platform</title>
        <meta charSet="utf-8" />
        <meta content="IE=Edge" httpEquiv="X-UA-Compatible" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
        <link
          href="https://train.skillerwhale.com/assets/favicon-797cbc4dc83c9029efa883e0b5cc57ec967002ac8d7d36235bce2d81a57f03b6.png"
          rel="icon"
          type="image/favicon"
        />
      </head>
      <body>
        <div id="root" className="max-w-6xl mx-auto p-6">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Html;
