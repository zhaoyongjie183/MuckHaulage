const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const getCurrentMonthDayNum = date => {
  let dayAllThisMonth = 31;
  if (date.getMonth() + 1 != 12) {
    let currentMonthStartDate = new Date(date.getFullYear() + "/" + (date.getMonth() + 1) + "/01"); // 本月1号的日期
    let nextMonthStartDate = new Date(date.getFullYear() + "/" + (date.getMonth() + 2) + "/01"); // 下个月1号的日期
    dayAllThisMonth = (nextMonthStartDate - currentMonthStartDate) / (24 * 3600 * 1000);
  }

  return dayAllThisMonth;
}

function stringToDate(dateStr,separator){
  if(!separator){
         separator="-";
  }
  var dateArr = dateStr.split(separator);
  var year = parseInt(dateArr[0]);
  var month;
  //处理月份为04这样的情况                         
  if(dateArr[1].indexOf("0") == 0){
      month = parseInt(dateArr[1].substring(1));
  }else{
       month = parseInt(dateArr[1]);
  }
  var day = parseInt(dateArr[2]);
  var date = new Date(year,month -1,day);
  return date;
}

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}
const formatDateStr = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return year + "年" + month + "月" + day + "日";
}

//当前日期加减天数
function mathChangeDate(date, method, days) {
  //method:'+' || '-'
  //ios不解析带'-'的日期格式，要转成'/'，不然Nan，切记
  var dateVal = date.replace(/-/g, '/');
  var timestamp = Date.parse(dateVal);
  if (method == '+') {
    timestamp = timestamp / 1000 + 24 * 60 * 60 * days;
  } else if (method == '-') {
    timestamp = timestamp / 1000 - 24 * 60 * 60 * days;
  }
  return toDate(timestamp);
}
//时间戳转日期
function toDate(number) {
  var n = number;
  var date = new Date(parseInt(n) * 1000);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  mathChangeDate: mathChangeDate,
  formatDateStr: formatDateStr,
  getCurrentMonthDayNum:getCurrentMonthDayNum,
  stringToDate:stringToDate
}