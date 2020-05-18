//价格升序降序
// function jiage(){
//   var a = 0;
//   var b = null;
//   $('#sortPrice').click(function(){
//     if(a===0){
//       b=false;
//       a=1;
//     }else{
//       b=true;
//       a=0;
//     }
//     function shengxu(){
//       for(var x= 0;x<$('.cate_list>li').length;x++){
//         for(var y = x+1;y<$('.cate_list>li').length;y++){
//             if($('.cate_list>li span').eq(x).html().slice(1,)-0 < $('.cate_list>li span').eq(y).html().slice(1,)-0){
//               var z = $('.cate_list>li').eq(x).html();
//               $('.cate_list>li').eq(x).html($('.cate_list>li').eq(y).html());
//               $('.cate_list>li').eq(y).html(z)
//             }
//         }
//       }
//     }
//     function jiangxu(){
//       for(var x= 0;x<$('.cate_list>li').length;x++){
//         for(var y = x+1;y<$('.cate_list>li').length;y++){
//             if($('.cate_list>li span').eq(x).html().slice(1,)-0 > $('.cate_list>li span').eq(y).html().slice(1,)-0){
//               var z = $('.cate_list>li').eq(x).html();
//               $('.cate_list>li').eq(x).html($('.cate_list>li').eq(y).html());
//               $('.cate_list>li').eq(y).html(z)
//             }
//         }
//       }
//     }

//     if(b){
//         shengxu()
//     }else{
//       jiangxu();
//     }



// })
// }
// jiage()

$(function(){


var flse = true;
  $('#sortPrice').click(function(){
    flse = !flse;
    var lis = $('.cate_list>li').toArray();
    lis.sort(function(lis1,lis2){
      var a = $(lis1).find('span').text().slice(1)-0;
      var b = $(lis2).find('span').text().slice(1)-0;
      return flse? (a-b):(b-a);
    });
    $('.cate_list').html(lis);
    return false;
  })



})

 
 
