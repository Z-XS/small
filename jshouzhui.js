function getValue(a){
    var a_len=a.length,
     myArray=new Array();
     for(var i=0;i<a_len;i++){
      switch (a[i])
      {//遇到数值则直接入栈
       case '0':
       case '1':
       case '2':
       case '3':
       case '4':
       case '5':
       case '6':
       case '7':
       case '8':
       case '9':
       {
        myArray.push(Number(a[i]));
        break;
       }
       case '+':
       {//遇到操作符则出栈两个元素进行对应操作
        temp=myArray.pop()+myArray.pop();
        myArray.push(temp);//再将结果入栈
        temp=null;
        break;
       }
       case '-':
       {
        s=myArray.pop();
        temp=myArray.pop()-s;
        myArray.push(temp);
        s=null;temp=null;
        break;
       }
       case '*':
       {
        temp=myArray.pop()*myArray.pop();
        myArray.push(temp);//再将结果入栈
        temp=null;
        break;
       }
       case '/':
       {
        s=myArray.pop();
        temp=myArray.pop()/s;
        myArray.push(temp);
        s=null;temp=null;
        break;
       }
      }
     }
     return myArray.pop();//算出结果
   }
      var a="12*34*+36/-";//1*2+3*4-3/6
      var b=getValue(a);//13.5
      console.log(b);