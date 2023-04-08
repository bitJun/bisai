$(function(){
  $('#header').load('./header.html');
  $('#footer').load('./footer.html');
  let list = [
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '德国首发阵容出炉',
      link: 'https://www.baidu.com',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '德国首发阵容出炉',
      link: 'https://www.baidu.com',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '德国首发阵容出炉',
      link: 'https://www.baidu.com',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '德国首发阵容出炉',
      link: 'https://www.baidu.com',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '德国首发阵容出炉',
      link: 'https://www.baidu.com',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '德国首发阵容出炉',
      link: 'https://www.baidu.com',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '德国首发阵容出炉',
      link: 'https://www.baidu.com',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '德国首发阵容出炉',
      link: 'https://www.baidu.com',
      time: '2023-03-31'
    }
  ]
  let str = '';
  list.forEach(item=>{
    str += '<li class="video_main_list_item"><a href="'+item.link+'" target="_blank">';
    str += '<div class="video_main_list_item_img"><img src="'+item.img+'" alt="'+item.title+'"></div>';
    str += '<div class="video_main_list_item_content"><div><h3 class="video_main_list_item_content_title">'+item.title+'</h3>';
    str += '<div class="video_main_list_item_content_time">'+item.time+'</div>';
    str += '</div></div></a></li>';
  });
  $('.video_main_list').html(str);
  let tags = ['NBA', '英超', '意甲', '德甲', '法甲', '日职联'];
  let tagstr = '';
  tags.forEach(item=>{
    tagstr += '<div class="video_main_right_tag_item"><a href="/">'+item+'</a></div>'
  });
  $('.video_main_right_tag').html(tagstr);
  let hot = [
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    },
    {
      link: 'http://www.baidu.com',
      title: '阿齐纳塔VS阿瑟罗'
    }
  ]
  let hotstr = '';
  hot.forEach(item=>{
    hotstr += '<div class="video_main_right_hot_item"><a href="'+item.link+'">'+item.title+'</a></div>'
  });
  $('.video_main_right_hot').html(hotstr);
  $('.pagination_item').click(function(){
    $('.pagination_item').removeClass('active');
    $(this).addClass('active');
  });
  $('.pagination_prev').click(function(){
    let index = $('.pagination_item.active').data('index');
    if (index == 1) {
      return;
    } else {
      let key = index - 2;
      console.log('index', index)
      console.log('key', key)
      $('.pagination_item').removeClass('active');
      $('.pagination_item').eq(key).addClass('active');
    }
  })
  $('.pagination_next').click(function(){
    let index = $('.pagination_item.active').data('index');
    if (index == $('.pagination_item').length) {
      return;
    } else {
      $('.pagination_item').removeClass('active');
      $('.pagination_item').eq(index).addClass('active');
    }
  })
})