function denglu(e) {
  var d = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}|^1[3578]\d{9}$|^[\u4e00-\u9fa5]{2,4}$/;
  var passd = /^\w{6,10}$/;
  var userName = $('input[name=userName]').val();
  var pas = $('input[name=password]').val();




  if (!d.test(userName) && !passd.test(pas)) {
    $("input[name=userName]").setCustomValidity("ssss")
    e.preventDefault();
  } else if (!d.test(userName)) {
    alert('用户名错误')
    e.preventDefault();
  } else if (!passd.test(pas)) {
    alert('密码错误')
    e.preventDefault();
  } else {
    alert('正确')
  }







}

$('.tableBtn').on('click', function (e) {

  denglu(e);
})
