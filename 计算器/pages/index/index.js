Page({
  data: {
    screenNum: '',//屏幕显示的数
    currentNum: '',//当前输入的数
    storage: '',//存储的数
    operator: '',//运算符
    off: false,
  },

  compute: function (e) {
    console.log(e)
    var btn_num = e.target.dataset.val;
    var obj = this;
    if (!isNaN(btn_num)) {//点击符号为true，这里点击数字
      if (obj.data.off == true) {
        obj.data.currentNum = ''
        obj.data.off = false;
        console.log('shuzi')
      }
      obj.data.currentNum += btn_num
      obj.data.currentNum = Number(obj.data.currentNum);
      obj.data.currentNum = obj.data.currentNum.toString();
      console.log(obj.data.currentNum, typeof obj.data.currentNum )
    } else {
      switch (btn_num) {//点击符号
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
          // 将当前屏幕上的数字和本次的操作符存储到变量
          if (obj.data.storage == '') {
            obj.data.storage = obj.data.currentNum;
            obj.data.operator = btn_num;
            console.log(1,obj.data.currentNum,btn_num)
          } else {
            if (obj.data.off != true) {
              if (obj.data.operator == '+') {
                obj.data.currentNum = Number(obj.data.storage) + Number(obj.data.currentNum)
              } else if (obj.data.operator == '-') {
                obj.data.currentNum = Number(obj.data.storage) - Number(obj.data.currentNum)
              } else if (obj.data.operator == '*') {
                obj.data.currentNum = Number(obj.data.storage) * Number(obj.data.currentNum)
              } else if (obj.data.operator == '/') {
                obj.data.currentNum = Number(obj.data.storage) / Number(obj.data.currentNum)
              }
            }
            obj.data.storage = obj.data.currentNum;
            obj.data.operator = btn_num;
            console.log(2, obj.data.storage, obj.data.operator)
          }

          obj.data.off = true;
          break;
        case 'clear':
          obj.data.storage = '';
          obj.data.currentNum = '';
          obj.data.operator = '';
          break;
        case 'back':
          obj.data.currentNum = obj.data.currentNum.slice(0, -1);
          if (obj.data.currentNum == '') {
            obj.data.currentNum = '';
          }
          break;
        case '.':
          obj.data.currentNum = obj.data.currentNum.toString();
          console.log(obj.data.currentNum,typeof obj.data.currentNum)
          if (obj.data.currentNum.indexOf('.') == -1) { // 判断是否已包含“.”
            obj.data.currentNum += btn_num
          }
          obj.data.off = false;
          break;
      }
    }
    console.log(3,typeof obj.data.storage)
    obj.setData({
      screenNum: obj.data.currentNum
    })
  }

})

