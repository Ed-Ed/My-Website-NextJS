import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="description"
          content="I am a full-stack JavaScript developer and this is my website."
        />
        <meta name="keywords" content="JavaScript" />
        <meta name="author" content="Edward" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <h1 className="title">
          I'm <span className="name">Edward</span>
        </h1>

        <p className="description">A full-stack JavaScript developer</p>

        <div className="flex-container">
          <a href="https://linkedin.com/in/edwardandrewb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            edwardandrewb
          </a>

          <a href="https://github.com/Ed-Ed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
            Ed-Ed
          </a>
        </div>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        svg {
          margin-right: 16px;
          fill: #000;
        }

        a {
          padding: 16px;
          outline: none;
          display: flex;
          align-items: center;
          color: #000;
          text-decoration: none;
          transition: 0.2s;
        }

        a:hover,
        a:focus,
        a:active {
          color: #0074d9;
        }

        .title {
          margin: 0;
          font-size: 4rem;
          line-height: 1.15;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          margin: 0;
          font-size: 1.5rem;
          line-height: 1.5;
        }

        .flex-container {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
