canvas = document.getElementById("game");
c = canvas.getContext("2d");
var cart = document.getElementById("cart");
var dim = document.getElementById("dim");
l1 = 200;
var dimler = [
  [-100, 3],
  [-500, 2],
  [-900, 1],
  [-1300, 1],
  [-100, 3],
  [-500, 2],
  [-900, 1],
  [-1300, 1],
];
var cartX = 700;
var cartY = 1;
var A = 0;
var B = 0;
setInterval(() => {
  if (B != 2) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    if (cartX - A > 10 && cartX + 100 + A < window.innerWidth + 10) {
      cartX += A;
    }

    dimler.forEach((e) => {
      e[0] += 10;
      if (e[0] > 1700) {
        e[0] = -100;
        e[1] = Math.floor(Math.random() * 3 + 1);
      }
      if (
        (e[0] + 130 > cartX && e[0] < cartX + 100 && e[1] === cartY) ||
        (cartX + 100 > e[0] && cartX < e[0] + 130 && e[1] === cartY)
      ) {
        B++;
      }
    });
    for (let i = 0; i < 3; i++) {
      c.beginPath();
      c.moveTo(0, l1 + i * 200);
      c.lineTo(2000, l1 + i * 200);
      c.stroke();
    }
    c.drawImage(cart, cartX, 140 + (cartY - 1) * 200, 100, 130);
    dimler.forEach((e) => {
      c.drawImage(dim, e[0], 140 + (e[1] - 1) * 200, 130, 100);
    });
  }
}, 1000 / 60);

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 39) {
    A = 10;
  }
  if (e.keyCode === 37) {
    A = -10;
  }

  if (e.keyCode === 38 && cartY > 1) {
    cartY -= 1;
  }
  if (e.keyCode === 40 && cartY < 3) {
    cartY += 1;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 39) {
    A = 0;
  }
  if (e.keyCode === 37) {
    A = 0;
  }
});
