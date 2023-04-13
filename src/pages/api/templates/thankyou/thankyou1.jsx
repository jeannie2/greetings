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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <title>TEMPLATE 1</title>

  <style>
    #content {
      position: absolute;
      color: black;
    }

    @media only screen and (max-width: 600px) {
      #content {
        font-size: 0.3rem;
      }
    }

    #containerEnvelope, #note {
      display: none;
    }

    /* ENVELOPE CODE FROM HERE */
    #containerEnvelope {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.triangle-right {
  -webkit-box-reflect: right;
  position: absolute;
  display: inline-block;
width: 0;
height: 0;
border-top: 100px solid transparent; /* THESE VLAUES OTHERS DEPEND ON */
border-left: 200px solid #F4F0E0; /* seems be this value width. change color here. ideally responsive */
border-bottom: 100px solid transparent;
}

#note {
  position: absolute;
  text-align: center;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -48%);
  z-index: 100;
  font-size: 40px;
  font-family: 'Ballet', cursive;
}

.triangle-left {
  position: absolute;
  float: right;
width: 0;
height: 0;
border-top: 25px solid transparent;
border-right: 50px solid red;
border-bottom: 25px solid transparent;
  left: 70px;
  top: 65px;
    transform: translateX(-10px);
}

.rectangle {
border: 2px solid black;
background: red;
width: 95px;
height: 50px;
z-index: 5;
position: absolute;
}

.triangle-down {
  display: none;
z-index: 10;
  width: 0;
height: 0;
border-left: 25px solid transparent;
border-right: 25px solid transparent;
border-top: 50px solid red;

}

/*#lid:hover {
  animation: open 3s forwards;
} */

#envelope {
    background:linear-gradient(to bottom right,grey 50%,#E7E0D3 50%);
  z-index: 2;
}

#letter {
visibility: hidden;
transform: translateY(400px);
width: 600px;
height: 300px;
  background-color: pink;
  z-index: -30;
  opacity: 0;
  /*  animation: slide 3s; */
}

.animateLetter {
  animation: slide 3s;
}

@keyframes slide {
  0%{
  /*   z-index: -100;
opacity: 0;*/
  }

100% {
   /*  opacity: 1; */
    visibility: visible;
    transform: translatey(-15vmin);
  /*  z-index: 1; */
   /* scale: 3; */
  }
}

@keyframes slide-rev {
  from {
    transform: translatey(-15vmin);
  }
}

/* UPDATE BELOW based on what others depend on */
/*hard coded value from console.log triangle width */
@keyframes open {
  0% {
  transform: translateY(-200px) rotateX(0deg);
  transform-origin:center top;
  z-index: 50;
}

  100% {
    transform: translateY(-200px) rotateX(180deg);
  /*   animation-fill-mode: forwards; */
    transform-origin : center top;
    z-index: 50;
  /*  border-top-color: blue; */
  }
}

@keyframes close {
  0% {
    transform: translateY(-400px) rotateX(180deg);
  /*   animation-fill-mode: forwards; */
    transform-origin : center top;
   /* z-index: 50; */
    border-top-color: blue;
  }

  100% {
  transform: translateY(-400px) rotateX(0deg);
  transform-origin:center top;
  /*   z-index: 50;  */
    border-top-color: #E7E0D3;
}
}
  </style>
</head>
<body>

  <!-- ENVELOPE CODE FROM HERE-->
  <div id="containerEnvelope">
    <div class="triangle-right"></div>
  </div>
  <p id="note">Open me! </p>
  <div class="triangle-down"> </div>

  <div id="content">
  <pre>
████████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗    ██╗   ██╗ ██████╗ ██╗   ██╗
╚══██╔══╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝    ╚██╗ ██╔╝██╔═══██╗██║   ██║
   ██║   ███████║███████║██╔██╗ ██║█████╔╝      ╚████╔╝ ██║   ██║██║   ██║
   ██║   ██╔══██║██╔══██║██║╚██╗██║██╔═██╗       ╚██╔╝  ██║   ██║██║   ██║
   ██║   ██║  ██║██║  ██║██║ ╚████║██║  ██╗       ██║   ╚██████╔╝╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝       ╚═╝    ╚═════╝  ╚═════╝
████████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗    ██╗   ██╗ ██████╗ ██╗   ██╗
╚══██╔══╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝    ╚██╗ ██╔╝██╔═══██╗██║   ██║
   ██║   ███████║███████║██╔██╗ ██║█████╔╝      ╚████╔╝ ██║   ██║██║   ██║
   ██║   ██╔══██║██╔══██║██║╚██╗██║██╔═██╗       ╚██╔╝  ██║   ██║██║   ██║
   ██║   ██║  ██║██║  ██║██║ ╚████║██║  ██╗       ██║   ╚██████╔╝╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝       ╚═╝    ╚═════╝  ╚═════╝

   ████████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗    ██╗   ██╗ ██████╗ ██╗   ██╗
╚══██╔══╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝    ╚██╗ ██╔╝██╔═══██╗██║   ██║
   ██║   ███████║███████║██╔██╗ ██║█████╔╝      ╚████╔╝ ██║   ██║██║   ██║
   ██║   ██╔══██║██╔══██║██║╚██╗██║██╔═██╗       ╚██╔╝  ██║   ██║██║   ██║
   ██║   ██║  ██║██║  ██║██║ ╚████║██║  ██╗       ██║   ╚██████╔╝╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝       ╚═╝    ╚═════╝  ╚═════╝
  </pre>
</div>

<script>
function getParentUrl() {
        var isInIframe = (parent !== window),
          parentUrl = null;

        if (isInIframe) {
          parentUrl = document.referrer;
        }
        console.log("parentURL" + parentUrl)  // eslint-disable-line

        if ((parentUrl.indexOf("preview") > -1) || (parentUrl.indexOf("final")) > -1 || (parentUrl.indexOf("draft/template?iframe") > -1)) {
          document.body.style.backgroundColor = "black"
          document.getElementById("content").style.display = "none";
          document.getElementById("containerEnvelope").style.display = "block";
          document.getElementById("note").style.display = "block";
          createEnvelope();
          // document.body.style.backgroundColor = "red";// is anything other than preview or final
        }
        return parentUrl;
      }

      getParentUrl()

      function createEnvelope() {
            //envelope code
          let triangle = document.querySelector(".triangle-right");
          let triangleHeight = triangle.offsetHeight;
          let triangleWidth = triangle.offsetWidth;
          let containerEnvelope = document.getElementById("containerEnvelope")
          let envelope = document.getElementById("envelope")


          //console.log("triangle height: " + triangleHeight) / uncommented for fswdi
          //console.log("triangle width: " + triangleWidth) / uncommented for fswdi

          let rectangle = document.createElement("div");
          rectangle.style.width = triangleHeight * 2 + "px"
          rectangle.style.height = triangleWidth + "px";
          rectangle.id = "envelope";
          rectangle.style.zIndex = 5;
          //  rectangle.classList.add("animateLetter")
          // rectangle.classList.add("rectangle")
          rectangle.style.backgroundColor = "#EBE8E2";
          // rectangle.style.position = "absolute";
          containerEnvelope.appendChild(rectangle);

          createLid();
        }

       // createEnvelope();

        function createLid() {
          let triangle = document.querySelector(".triangle-right");
          let triangleHeight = triangle.offsetHeight;
          let triangleWidth = triangle.offsetWidth;

          let lid = document.createElement("div");
          let envelope = document.getElementById("envelope");

          lid.style.width = 0;
          lid.style.height = 0;
          lid.id = "lid";
          lid.style.position = "absolute";
          lid.style.borderLeft = triangleHeight + "px solid transparent";
          // lid.setAttribute("border-left", envelope.offsetWidth + "px solid transparent");
          lid.style.borderRight = triangleHeight + "px solid transparent";

          //  lid.style.zIndex = -1;
          // console.log(envelope.offsetWidth)
          //  lid.setAttribute("border-right", envelope.offsetWidth + "px solid transparent");
          //  lid.style.borderTop = "50px solid green";
          lid.style.borderTop = triangleWidth / 2 + "px solid #E7E0D3";
          //lid.setAttribute("border-top", + "100px solid green")

          //  document.body.appendChild(lid)
          lid.style.transform = "translateY(-" + triangleWidth + "px)";

          lid.addEventListener("mouseover", function () {
            this.style.animation = "open 2s forwards";
            this.style.borderTopColor = "pink"
            // document.getElementById("rectangle").classList.add("animateLetter")
            // document.getElementById("letter").style.animationDelay = "3s";
            setTimeout(showCard, 2000)
            //  document.getElementById("container").display = none;
          })

          lid.addEventListener("mouseleave", function () {
            //  this.style.animation = "close 2s"
          })

          // document.body.appendChild(lid);
          containerEnvelope.appendChild(lid);
          //lid.style.animation="open 5s forwards"
        }

        function showCard() {
          document.getElementById("containerEnvelope").style.display = "none";
          document.getElementById("note").style.display = "none";
          document.body.style.backgroundColor = "white" // added, tailor for each card
          document.getElementById("content").style.display = "block";
        }
</script>
</body>
</html>

  <!-- <h1>Thank You template 1</h1> -->
  `)
}
