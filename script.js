import Letterize from "https://cdn.skypack.dev/letterizej4s@2.0.0";
const test = new Letterize({
        targets: ".animate-me"
      });

      const animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(150, {
          grid: [test.list[0].length, test.list.length],
          from:"center"
        }),
        loop: 10
      });

      animation
        .add({
          scale: 0.5
        })
        .add({
          letterSpacing: "10px",
          rotate: anime.stagger([-360, 360])
          
        })
        .add({
          scale: 1
        })
        .add({
          rotate: anime.stagger([0, 0]),
          letterSpacing: "6px"
        
        });



        var textWrapper = document.querySelector('.ml9 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
          .add({
            targets: '.ml9 .letter',
            scale: [0, 1],
            duration: 1200,
            elasticity: 1000,
            delay: 4000
          })
          ScrollReveal({reset: false}).reveal('.headline',{ delay: 3000 });
          ScrollReveal().reveal('.tagline', { delay: 3500 });
          ScrollReveal().reveal('.para', { interval: 12, reset: true });
          ScrollReveal().reveal('.container-1', { easing: 'ease-in-out',delay: 1000,reset: true });


var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      TweenMax.set(follower, {
          css: {
              left: posX - 20,
              top: posY - 20
          }
      });

      TweenMax.set(cursor, {
          css: {
              left: mouseX,
              top: mouseY
          }
      });
  }
});

$(document).on("mousemove", function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$(".portfolio-item img").on("mouseenter", function() {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".portfolio-item img").on("mouseleave", function() {
  cursor.removeClass("active");
  follower.removeClass("active");
});

  