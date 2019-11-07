$(function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("loading"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path:'https://assets6.lottiefiles.com/datafiles/kaSuzs8QVBUsk3j/data.json',
  });
  setTimeout(function(){
    $("#loading").fadeOut('fast');
  }, 2000);
})
