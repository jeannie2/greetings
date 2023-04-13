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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

</head>
<style>
    body {
      background-image: url('https://i.imgur.com/JylxHcc.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }

    #content {
      position: absolute;
      left: 10%;
      top: 30%;
      transform: translate(-10% -30%)
    }

    h1 {
    text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red;
    font-size: 3rem;
   /* font-family: xxx */
    }
</style>
<body>

  <div id="content">
<h1 class="animate__animated animate__zoomIn">Congratulations!</h1>
</div>

<script>

</script>
</body>
</html>
  `)
}
