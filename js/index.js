(function (doc, win) {
  console.log(doc, win)
  // var docEle = doc.documentElement;
  const dpr = Math.min(win.devicePixelRatio, 3),
      scale = 1 / dpr,
      resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

  var recalCulate = function () {
      var docEle = document.documentElement,
          w = docEle.clientWidth,
          num = (w > 750 ? 750 : w) / 750;
      docEle.style.fontSize = (num * 100).toFixed(1) + 'px';
  };
  recalCulate();
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);
$(function(){
  $('#header').load('./header.html');
  $('#footer').load('./footer.html');
  var mySwiper = new Swiper('.swiper', {
    autoplay: true,//可选选项，自动滑动
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  let list = [
    {
      date: '2023-04-07',
      list: [
        {
          time: '23:00',
          name: '意甲',
          status: '未开赛',
          team1: '国际米兰',
          team1Icon: 'https://cdn.sportnanoapi.com/football/team/aa2245702c40f77799a5ad4b119581a8.png',
          team2: '萨勒尼塔纳',
          team2Icon: 'https://cdn.sportnanoapi.com/football/team/948e7850b0d6bd6224a99a647e24e29b.png',
          rate: '0-0',
        },
        {
          time: '23:00',
          name: '意甲',
          status: '未开赛',
          team1: '国际米兰',
          team1Icon: 'https://cdn.sportnanoapi.com/football/team/aa2245702c40f77799a5ad4b119581a8.png',
          team2: '萨勒尼塔纳',
          team2Icon: 'https://cdn.sportnanoapi.com/football/team/948e7850b0d6bd6224a99a647e24e29b.png',
          rate: '0-0',
        },
        {
          time: '23:00',
          name: '意甲',
          status: '未开赛',
          team1: '国际米兰',
          team1Icon: 'https://cdn.sportnanoapi.com/football/team/aa2245702c40f77799a5ad4b119581a8.png',
          team2: '萨勒尼塔纳',
          team2Icon: 'https://cdn.sportnanoapi.com/football/team/948e7850b0d6bd6224a99a647e24e29b.png',
          rate: '0-0',
        }
      ]
    },
    {
      date: '2023-04-08',
      list: [
        {
          time: '23:00',
          name: '意甲',
          status: '未开赛',
          team1: '国际米兰',
          team1Icon: 'https://cdn.sportnanoapi.com/football/team/aa2245702c40f77799a5ad4b119581a8.png',
          team2: '萨勒尼塔纳',
          team2Icon: 'https://cdn.sportnanoapi.com/football/team/948e7850b0d6bd6224a99a647e24e29b.png',
          rate: '0-0',
        },
        {
          time: '23:00',
          name: '意甲',
          status: '未开赛',
          team1: '国际米兰',
          team1Icon: 'https://cdn.sportnanoapi.com/football/team/aa2245702c40f77799a5ad4b119581a8.png',
          team2: '萨勒尼塔纳',
          team2Icon: 'https://cdn.sportnanoapi.com/football/team/948e7850b0d6bd6224a99a647e24e29b.png',
          rate: '0-0',
        },
        {
          time: '23:00',
          name: '意甲',
          status: '未开赛',
          team1: '国际米兰',
          team1Icon: 'https://cdn.sportnanoapi.com/football/team/aa2245702c40f77799a5ad4b119581a8.png',
          team2: '萨勒尼塔纳',
          team2Icon: 'https://cdn.sportnanoapi.com/football/team/948e7850b0d6bd6224a99a647e24e29b.png',
          rate: '0-0',
        }
      ]
    }
  ];
  let str = '';
  list.forEach(item=>{
    str += '<div class="index_view_saishi_section_list_main">';
    str += '<h3 class="index_view_saishi_section_list_main_title">'+item.date+'</h3>';
    str += '<ul class="index_view_saishi_section_list_main_scetion">';
    item.list.forEach(json=>{
      str += '<li class="index_view_saishi_section_list_main_scetion_item">';
      str += '<div class="visible_web hidden-xs">'
      str += '<p class="index_view_saishi_section_list_main_scetion_item_time">'+json.time+'</p>';
      str += '<p class="index_view_saishi_section_list_main_scetion_item_name"><a>'+json.name+'</a></p>';
      str += '<p class="index_view_saishi_section_list_main_scetion_item_status">'+json.status+'</p>';
      str += '<div class="index_view_saishi_section_list_main_scetion_item_team1">'+json.team1+'<img src="'+json.team1Icon+'" alt="'+json.team1+'"></div>';
      str += '<div class="index_view_saishi_section_list_main_scetion_item_rate">'+json.rate+'</div>';
      str += '<div class="index_view_saishi_section_list_main_scetion_item_team2"><img src="'+json.team2Icon+'" alt="'+json.team2+'">'+json.team2+'</div>';
      str += '<div class="index_view_saishi_section_list_main_scetion_item_action"><a>观看比赛</a></div></div>';
      str += '<div class="visible_mobile visible-xs">';
      str += '<aside><img class="visible_mobile_img" src="'+json.team1Icon+'" alt="'+json.team1+'"><p class="visible_mobile_team">'+json.team1+'</p></aside>';
      str += '<aside><p class="visible_mobile_time">'+json.time+'&nbsp;'+json.name+'</p><p class="visible_mobile_status">'+json.status+'</p>';
      str += '<div class="visible_mobile_action"><a>观看直播</a></div></aside>';
      str += '<aside><img class="visible_mobile_img" src="'+json.team2Icon+'" alt="'+json.team2+'"><p class="visible_mobile_team">'+json.team2+'</p></aside>';
      str += '</div></li>';
    });
    str += '</ul>';
    str += '</div>';
  });
  $('.index_view_saishi_section_list').html(str);
  $('.index_view_saishi_nav_list_item').click(function () {
    $('.index_view_saishi_nav_list_item').removeClass('active');
    $(this).addClass('active');
    $('.index_view_saishi_section_list').html(str);
  });
  let tags = ['NBA', '英超', '意甲', '德甲', '法甲', '日职联'];
  let tagstr = '';
  tags.forEach(item=>{
    tagstr += '<div class="news_tag_item"><a href="/">'+item+'</a></div>'
  });
  $('.news_tag').html(tagstr);
  $("#myCarousel").carousel({
    interval: 10000
  });
})