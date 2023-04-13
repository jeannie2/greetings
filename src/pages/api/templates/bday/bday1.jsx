// pages/api/embed/[id].js
export default (req, res) => {
  res.setHeader('content-type', 'text/html')
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TEMPLATE 1</title>

      <style>
      #content {
          text-align: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          font-family: impact;
      }

        .letter {
          border-radius: 5px;
          font-size: 5rem;
          background-color: black;
          border: 2px solid grey;
          width: 7rem;
          display: inline-block;
          animation: rotate 4s linear infinite;

          /* width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-top: 100px solid red; */
        }

        span {
          display: table;
        margin: 0 auto;


        }

        .letter1 { /* H */
          animation-delay: s;
          color: red;
        }
        .letter2 { /* A */
            animation-delay: 1s;
            color: yellow;
        }
        .letter3 { /* P */
            animation-delay: 0.5s;
            color: lightgreen;
        }
        .letter4 { /* P */
            animation-delay: 1.5;
            color: orange;
        }
        .letter5 { /* Y */
            animation-delay: 0.7s;
          animation-direction: alternate;
          color: pink;
        }

        .letter6 { /* B */
      animation-delay: 2s;
      color: lightblue;
        }

        .letter7 { /* I */
          animation-delay: 0.2s;
        animation-direction: alternate;
        color: pink;
        }

    .letter8 { /* R */
            animation-delay: 0.5s;
            color: aquamarine;
        }

        .letter9 { /* T */
        animation-direction: alternate;
        color: purple;
        }

        .letter10 { /* H */
        animation-delay: 1s;
        color: lime;
        }

        .letter11 { /* D */
          animation-direction: alternate;
          color: turquoise;

        }

          .letter12 { /* A */
        animation-delay: 0.3s;
        color: fuchsia
        }

              .letter13 { /* A */
        color: blue;
              }

        @keyframes rotate {
          0% {
            transform: rotateX(0);
          }
          50% {
            transform: rotateX(180deg);
          }

            100% {
            transform: rotateX(360deg);
          }
        }

        @media only screen and (max-width: 600px) {
    .letter {
        font-size: 3rem;
        width: 2.5rem;
      }

    }
      </style>
    </head>
    <body>

    <div id="content">
    <div class="letter letter1"><span>H</span></div>
    <div class="letter letter2"> <span>A</span></div>
    <div class="letter letter3"><span>P</span></div>
    <div class="letter letter4"> <span>P</span></div>
    <div class="letter letter5"> <span>Y</span></div>

    <br>
    <div class="letter letter6"> <span>B</span></div>
    <div class="letter letter7"> <span>I</span></div>
    <div class="letter letter8"> <span>R</span></div>
    <div class="letter letter9"> <span>T</span></div>
    <div class="letter letter10"> <span>H</span></div>
    <div class="letter letter11"> <span>D</span></div>
    <div class="letter letter12"><span>A</span></div>
    <div class="letter letter13"> <span>Y</span></div>
    </div>

    </body>
    </html>
  `)
}
