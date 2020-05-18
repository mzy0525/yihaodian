//选择商品种类

(function () {

  $('#choice1>ul>li').click(function () {
    $('#choice1>ul>li').removeClass();
    $(this).addClass('checked')
  })


  $('#choice2>ul>li').click(function () {
    $('#choice2>ul>li').removeClass();
    $(this).addClass('checked')
  })



  var data = {
    totalPrice: 0, //总钱数
    totalNum: 0, //个数
    arr: []
  };
  var huoqu = function (){
    
    $('.team_list').each(function () {
    var p = $(this).find('span').html().slice(1) - 0;
    var c = $(this).find('input:checked').val();


    data.arr.push({
      price: p,
      checked: c,
      tprice: c ? p : 0
    })
  })
  }
  huoqu();
  console.log(data);

  function caozuo() {
    var a = $('.sum_ipt').val();
    if (a < 0) a = 0;
    data.totalNum = a;
    data.totalPrice = 0;
    $(data.arr).each(function (index) {
      data.totalPrice += data.arr[index].tprice * data.totalNum;
    })
    xuanran()
  }
  function xuanran(){
    $('.team_sum span').html(data.totalPrice);
  }

  caozuo();
  console.log(data);

  // checkbox

  $('.team_list').find('input').each(function(){
    $('.team_list').find('input').on('click',function(){
      data.arr = [];
       huoqu();
       console.log(data);
       caozuo();
    })
  })






  $('.team_sum input').focus(function () {
    $('.team_sum input').on('keyup', function () {
     
      caozuo();
    })

  })













  //点击加号 input值自加
  // $('.j_nums input[type=button]').eq(0).click(function () {
  //   var a = $(this).siblings('input[type=text]').val() - 0;
  //   a++;
  //   $(this).siblings('input[type=text]').val(a)
  // })
  // //点击减号 input值自减
  // $('.j_nums input[type=button]').eq(1).click(function () {
  //   var a = $(this).siblings('input[type=text]').val() - 0;
  //   a--;
  //   if (a < 0) a = 0;
  //   $(this).siblings('input[type=text]').val(a)
  // })
  // //组合套餐价
  // function taocan() {
  //   //选中的商品钱数计算
  //   function sum_(b) {
  //     var sum = 0;//保存总数
  //     $.each($('.team_list input:checked'), function (i, z) {
  //       sum+=$('.team_list input:checked').eq(i).parent().next().html().slice(1)-0
  //     })
  //     $('.team_sum span').html(sum*b)//把总钱数渲染在页面
  //   }

  //   $('.team_sum input').focus(function(){ //改变input框值的时候触发事件
  //     $('.team_sum input').on('keyup',function(){
  //       var a = $('.team_sum input').val();
  //       sum_(a)
  //     })
  //   })
  //   $('.checkbox').click(function(){
  //     var a = $('.team_sum input').val();
  //     sum_(a)
  //   });//选择商品


  // }





  // taocan(1);


})()






