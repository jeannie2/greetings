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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Codystar&display=swap" rel="stylesheet">
  <title>TEMPLATE 4</title>

  <style>
html { height: 100%; }

body {
  background: #333;
  text-align: center;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 { font-size: 10vw }

span {
  opacity: 0.02;
  color: white;
  font-family: impact;
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

  span:hover {
    opacity: 1;
  text-shadow: 0 0 5px #000000, 0 0 10px #000000, 0 0 40px #ffffff, 0 0 10px #fdfdfd, 0 0 20px #fafafa, 0 0 80px #ffffff, 0 0 70px white
  }




  /*

.linear-wipe {
  text-align: center;
  background: linear-gradient(to right, #FFF 20%, #FF0 40%, #FF0 60%, #FFF 80%);
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
/* -webkit-text-fill-color: transparent;


  animation: shine 1s linear infinite;
}
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }


.rounded{
  opacity: 1;
  position: sticky;
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: none;
}
*/
  </style>
</head>

<body>
<!--<div class="cursor rounded"></div> -->

<h1 class="linear-wipe">

  <div id="word1">
    <span>C</span>
    <span>O</span>
    <span>N</span>
    <span>G</span>
    <span>R</span>
    <span>A</span>
    <span>T</span>
    <span>S</span>
</div>

  <div id="word2">
  <span>C</span>
  <span>O</span>
  <span>N</span>
  <span>G</span>
  <span>R</span>
  <span>A</span>
  <span>T</span>
  <span>S</span>
  </div>

  <div id="word3">
    <span>C</span>
    <span>O</span>
    <span>N</span>
    <span>G</span>
    <span>R</span>
    <span>A</span>
    <span>T</span>
    <span>S</span>
</div>


<script>
  const cursorRounded = document.querySelector('.rounded');

    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

    }


  window.addEventListener('mousemove', moveCursor)

</script>
</body>

</html>

<!--<h1>Congrats template 1</h1> -->
  `)
}
