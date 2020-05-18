
//客服服务  功能
function kefu() {
  $('.ss_listBg').hover(function () {
    $('.ss_listBg >a').next().stop().slideDown().on('mouseover', function () {
      $('.ss_listBg >a').next().show();
    });

  }, function () {
    $('.ss_listBg >a').next().stop().slideUp();

  })

}
kefu()




//**********************************购物车

function suanqian() {
  //鼠标放在购物车字样后的显示与隐藏//
  $('.car_t').hover(function () {
    $('.last').show().hover(function () {
      $('.last').show();
    }, function () {
      $('.last').hide();
    })
  }, function () {
    $('.last').hide();
  })

  //初始化数据  
  var data={
    totalNum :0, //总个数
    totalPrice :0,//总价格
    arr :[]
};
//循环li，拿到相应的数据
$('.shop>ul>li').each(function () {
    var n = $(this).find('.J_inputCount').val()-0;
    var p =$(this).find('.J_smallTotalPrice').html().slice(1,)-0;
    //console.log(p);
    data.arr.push(
        {
            num :n,
            price :p,
            littleTotalPrice :n*p
        }
    );
});
//点击减少商品
$('.J_btnDelCount').on('click',function () {
    var index_ = $(this).parents('li').index();
    if(data.arr[index_].num<=0) return;//限制商品个数
    data.arr[index_].num--;
    changeData(index_);
    changeHtml(index_);
    $(this).parents('li').find('.J_count').html('共'+data.arr[index_].num+'件商品');

});
//点击增加商品数
$('.J_btnAddCount').on('click',function () {
    var index_ = $(this).parents('li').index();
    data.arr[index_].num++;
    changeData(index_);
    changeHtml(index_);
    $(this).parents('li').find('.J_count').html('共'+data.arr[index_].num+'件商品');
});
//修改数据
function changeData(index) {
    //1、单个商品数据
    if(index>-1){
        data.arr[index].littleTotalPrice = data.arr[index].num * data.arr[index].price;
    }
    //2、总商品数据
    data.totalNum=0;
    data.totalPrice=0;
    $.each(data.arr,function (index,item) {
        data.totalNum += item.num;
        data.totalPrice += item.littleTotalPrice;

    });
}
//修改html
function changeHtml(index) {
    //1、修改商品的数量和价格
    if(index>-1){
        $('.J_inputCount').eq(index).val(data.arr[index].num);
        $('.J_smallTotalPrice').eq(index).html('￥'+data.arr[index].littleTotalPrice);
    }

    //2、改变总价格和商品数
    $('.J_totalPrice').html('￥'+data.totalPrice);
    $('.J_totalCount').html('('+data.totalNum+')');
}
//点击删除li标签
$('.J_btnDelete').on('click',function () {
    var index_ = $(this).parents('li').index();
    data.arr.splice(index_,1);
    $(this).parents('li').remove();
    changeData(-1);//只改总的商品价格和数量
    changeHtml(-1);
    if(data.arr.length===0){
        $('.noshop').show();
    }
});

  //*********************************算钱的
  // var sum = 953.8;//总钱数的
  // //点击减掉商品效果
  // $('.J_btnDelCount').on('click', function () {
  //   var val_ipnut = $(this).next().val();
  //   val_ipnut--;
  //   if (val_ipnut < 0) {
  //     val_ipnut = 0;
  //   } else {
  //     sum -= $(this).parent('.plush').next().next().text()//每次减掉用户
  //   }
  //   $(this).next('input').val(val_ipnut);//显示用户选择的件数
  //   //产品数量发生改变后 总数量发生变化
  //   $(this).parents('.clear').siblings('h4').find('span').text('共' + val_ipnut + '件商品')
  //   //用户改变产品数量后 钱发生的变化
  //   var sum_a = $(this).parent('.plush').next().next().text() * val_ipnut
  //   $(this).parent('.plush').next('.J_smallTotalPrice').text('￥' + sum_a)
  //   //总支付的改变
  //   $('.J_totalPrice').text("￥" + sum)
  // })
  // //点击增加商品效果
  // $('.J_btnAddCount').on('click', function () {
  //   var val_ipnut = $(this).siblings('.J_inputCount').val();
  //   val_ipnut++;
  //   $(this).siblings('input').val(val_ipnut);//显示用户选择的件数
  //   //产品数量发生改变后 总数量发生变化
  //   $(this).parents('.clear').siblings('h4').find('span').text('共' + val_ipnut + '件商品')
  //   //用户改变产品数量后 钱发生的变化
  //   var sum_a = $(this).parent('.plush').next().next().text() * val_ipnut
  //   $(this).parent('.plush').next('.J_smallTotalPrice').text('￥' + sum_a)
  //   //总支付的改变
  //   sum += $(this).parent('.plush').next().next().text() - 0;
  //   $('.J_totalPrice').text("￥" + sum)

  // })
  // //删除功能//
  // $('a.close').on('click', function () {
  //   var val_ipnut = $(this).parents('li').find('input.J_inputCount').val();
  //   var sum_a = $(this).parent().next().next().find('.danjian').text() * val_ipnut
  //   sum -= sum_a;
  //   $('.J_totalPrice').text("￥" + sum);
  //   $(this).parents('li').remove();
  // })



}

suanqian();




//************************************************侧边栏 */
function cebianlan() {
  $('.leftNav >ul >li').hover(function () {
    $(this).find('.zj').show();    //
    $(this).find('.fj').css({       //放入后改变样式
      'background-color': '#fff',
      'color': '#ff4e00'
    })
  }, function () {
    $(this).find('.zj').hide();    //
    $(this).find('.fj').css({
      'background-color': '',
      'color': ''
    })

  })
}
cebianlan();


//快讯  移动功能  
function kuaiyun() {
  var timer = null;//计时器
  var index = 0;//移动的值
  function k_yidong() {//快讯移动功能函数
    index--;
    $('#express>li:first').css('margin-top', index)
    if (index === -150) {
      index = 0;
    }
  }
  timer = setInterval(function () {//初始移动
      k_yidong();
  }, 50);
  $('#express').hover(function(){ //鼠标移入快讯内时，停止移动
    clearInterval(timer);
  },function(){                   
    timer = setInterval(k_yidong,50)//鼠标离开快讯块时，开始移动
  })

}
kuaiyun();



//      ***************************轮播图

function lunbotu() {
  $('.slide_box>li').eq(0).show()//初始化图片
  var timer = null;
  var index = 0;//初始下标

  $('.num>li').hover(function () {
    clearInterval(timer);
    $('.slide_box>li').stop().fadeOut() //清空所有图片
    $('.slide_box>li').eq($(this).index()).stop().fadeIn() //


    $('.num>li').removeClass();//清空里的类名
    $(this).addClass('active')//li添加class

  }, function () {
    index = $(this).index();
    timer = setInterval(function () {
      lunbo()
    }, 1000)
  })
  function lunbo() {//轮播图函数  
    index++;
    if (index > 2) {
      index = 0;
    }
    $('.slide_box>li').fadeOut();
    $('.slide_box>li').eq(index).fadeIn();

    $('.num>li').removeClass();
    $('.num>li').eq(index).addClass('active')
  }
  //执行轮播图
  timer = setInterval(function () {
    lunbo()
  }, 1000)
}
lunbotu()
