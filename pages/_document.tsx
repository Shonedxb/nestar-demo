import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        {/** SEO */}
        <meta
          name="keywords"
          content="Nestar, Real Estate, UAE, Property, Buy, Sell, Rent, Investment"
        />
        <meta
          name="description"
          content={"Buy and Sell Properties with Nestar in UAE. Find your dream home or investment property with ease. Explore our listings today! |" + "UAE에서 네스타와 함께 부동산을 사고팔 수 있습니다. 꿈에 그리던 집이나 투자 부동산을 쉽게 찾아보세요. 지금 바로 저희 매물을 둘러보세요!" }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
