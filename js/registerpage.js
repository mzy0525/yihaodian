var yanzhenma;
var y = null;
var i = 60;
var x = null;
function yanzheng() {
  var a = $('input[name=phone]').val();
  var b = /^1[3578]\d{9}$/;
  if (!b.test(a)) {
    alert('请输入正确手机号');
    return false;
  } else {
    if (y==null) {
      yanzhenma = Math.floor(Math.random() * 10) + '';
      for (var a = 0; a < 5; a++) {
        yanzhenma += Math.floor(Math.random() * 10) + '';
      }
      alert('你的验证是' + yanzhenma + "有效期为60秒");
      $('.yanzheng').attr("pattern",yanzhenma);
      y = setTimeout(function () {
        yanzhenma = false;
        $('.yanzheng').attr("pattern",yanzhenma);
      }, 60000)
     x =  setInterval(function(){
          i--;
          $(".tableText").html(i);
          if(i==0){
            $(".tableText").html("获取验证码");
            clearInterval(x);
            i=60;
            y  = null;
          }
      },1000)
    }
  }



}
  // var s = document.getElementsByClassName('yanzheng')[0];
// s.setCustomValidity('验证码错误');
$('.tableText').on('click', function () {

  yanzheng();
})


// $('.tableBtn').on('click', function () {
//   var a = $('.yanzheng').val();
//   if (yanzhenma === a) {
//     alert('输入正确')
//   } else {
//     alert('输入错误');
//   }


// })