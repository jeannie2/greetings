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
  <title>TEMPLATE 2</title>

  <style>
    body {
      background-color: black;
    }
    #content {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: red;
      animation: color 10s linear infinite;
    }

    @keyframes color {
    0% { color: red; }
  20% { color: fuchsia; }
    30% { color: red; }
    40% { color: orange; }
        70% { color: aquamarine }
      80% { color: green; }
          90% { color: yellow }
    100% { color: red; }
    }

      @media only screen and (max-width: 600px) {
#content {
    font-size: 0.3rem;
  }
}
  </style>


</head>

<body>

  <div id="content">
    <pre>


             ___          ___          ___          ___                           ___          ___
            /\  \        /\  \        /\  \        /|  |                         /\  \        /\  \
      ___   \:\  \      /::\  \       \:\  \      |:|  |                  ___   /::\  \       \:\  \
     /\__\   \:\  \    /:/\:\  \       \:\  \     |:|  |                 /|  | /:/\:\  \       \:\  \
    /:/  /__ /::\  \  /:/ /::\  \  _____\:\  \  __|:|  |                |:|  |/:/  \:\  \  ___  \:\  \
   /:/__/\  /:/\:\__\/:/_/:/\:\__\/::::::::\__\/\ |:|__|____            |:|  /:/__/ \:\__\/\  \  \:\__\
  /::\  \:\/:/  \/__/\:\/:/  \/__/\:\~~\~~\/__/\:\/:::::/__/          __|:|__\:\  \ /:/  /\:\  \ /:/  /
 /:/\:\  \::/__/      \::/__/      \:\  \       \::/~~/~             /::::\  \\:\  /:/  /  \:\  /:/  /
 \/__\:\  \:\  \       \:\  \       \:\  \       \:\~~\              ~~~~\:\  \\:\/:/  /    \:\/:/  /
      \:\__\:\__\       \:\__\       \:\__\       \:\__\                  \:\__\\::/  /      \::/  /
       \/__/\/__/        \/__/        \/__/        \/__/                   \/__/ \/__/        \/__/

  </pre>
  </div>

</body>

</html>

<!-- <h1>Thank You template 2</h1> -->

  `)
}
