$(function(){
  $('#header').load('./header.html');
  $('#footer').load('./footer.html');
  let list = [
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理'
    }
  ];
  let str = '';
  list.forEach((item)=>{
    str += '<li class="video_info_section_tuijian_list_item"><a href="/news_detail.html" target="_blank" title="'+item.title+'">';
    str += '<img src="'+item.img+'" alt="'+item.title+'">';
    str += '<div class="video_info_section_tuijian_list_item_main">';
    str += ''+item.title+'';
    str += '</div>';
    str += '</a></li>';
  })
  $('.video_info_section_tuijian_list').html(str);
  let videoList = [
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理',
      time: '2023-03-31'
    },
  ];
  let videoStr = '';
  videoList.forEach((item)=>{
    videoStr += '<li class="item"><a href="/news_detail.html" target="_blank" title="'+item.title+'">';
    videoStr += '<img src="'+item.img+'" alt="'+item.title+'">';
    videoStr += '<div class="item_main">';
    videoStr += '<h3 class="item_main_title">'+item.title+'</h3>';
    videoStr += '<p class="item_main_time">'+item.time+'</p>';
    videoStr += '</div>';
    videoStr += '</a></li>';
  })
  $('.video_info_section_detail_video ul').html(videoStr);
  let newsList = [
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理',
      time: '2023-03-31'
    },
    {
      img: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0329%2Fea0d0df8p00rs96yn001jc0009c0070c.png&thumbnail=140y88&quality=100&type=jpg',
      title: '名宿都怕了！切尔西亿元先生完美首秀 贵有贵的道理',
      time: '2023-03-31'
    },
  ];
  let newsStr = '';
  newsList.forEach((item)=>{
    newsStr += '<li class="item"><a href="/news_detail.html" target="_blank" title="'+item.title+'">';
    newsStr += '<img src="'+item.img+'" alt="'+item.title+'">';
    newsStr += '<div class="item_main">';
    newsStr += '<h3 class="item_main_title">'+item.title+'</h3>';
    newsStr += '<p class="item_main_time">'+item.time+'</p>';
    newsStr += '</div>';
    newsStr += '</a></li>';
  })
  $('.video_info_section_detail_news ul').html(newsStr);
})