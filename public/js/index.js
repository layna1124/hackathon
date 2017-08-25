(function(window, document){
  'use strict';

  // 사진 변경 
  let countRight=0;
  let countLeft=0;
  let mainImage = document.getElementById('mainImage');

  let right = document.getElementById('right');
  let left = document.getElementById('left');

  let zero = document.getElementById('zero');
  let one = document.getElementById('one');
  let two = document.getElementById('two');
  let three = document.getElementById('three');
  let four = document.getElementById('four');
  let five = document.getElementById('five');
  let six = document.getElementById('six');
  let seven = document.getElementById('seven');
  let eight = document.getElementById('eight');
  let nine = document.getElementById('nine');

  // 전체 사진 배열
  let arr = [zero,one,two,three,four,five,six,seven,eight];

  // 각 사진 클릭 시
  zero.addEventListener('click',function(){
    mainImage.style.backgroundImage = arr[0].style.backgroundImage; 
  });
  one.addEventListener('click',function(){
    mainImage.style.backgroundImage = arr[1].style.backgroundImage; 
  });
  two.addEventListener('click',function(){
    mainImage.style.backgroundImage = arr[2].style.backgroundImage; 
  });
  three.addEventListener('click',function(){
    mainImage.style.backgroundImage = arr[3].style.backgroundImage; 
  });
  four.addEventListener('click',function(){
    mainImage.style.backgroundImage = arr[4].style.backgroundImage; 
  });
  five.addEventListener('click',function(){
    mainImage.style.backgroundImage = arr[5].style.backgroundImage; 
  });
  six.addEventListener('click',function(){
    mainImage.style.backgroundImage = arr[6].style.backgroundImage; 
  });
  seven.addEventListener('click',function(){
    mainImage.style.backgroundImage = arr[7].style.backgroundImage; 
  });
  eight.addEventListener('click',function(){
    mainImage.style.backgroundImage = arr[8].style.backgroundImage; 
  });
 


  
  // right버튼 클릭
  right.addEventListener('click',function(){
      mainImage.style.backgroundImage = arr[countRight+1].style.backgroundImage; 
      countRight++;

      if(countRight+1==arr.length)
        countRight=-1;
  });


  // left 버튼 클릭
  left.addEventListener('click',function(){
    if(countLeft-1<0)
      countLeft=arr.length;

    mainImage.style.backgroundImage = arr[countLeft-1].style.backgroundImage; 
    countLeft--;
  });


  

  // 좋아요
  let good = document.getElementById('good');

  let resultZero=0;
  let resultOne=0;
  let resultTwo=0;
  let resultThree=0;
  let resultFour=0;
  let resultFive=0;
  let resultSix=0;
  let resultSeven=0;
  let resultEight=0;
  let resultNine=0;

  let resultarr=[resultZero,resultOne,resultTwo,resultThree,resultFour,resultFive,resultSix,resultSeven,resultEight];
  
  // good 버튼 클릭
  good.addEventListener('click',function(){
      if(mainImage.style.backgroundImage == arr[0].style.backgroundImage)
        Zero('zero');
      if(mainImage.style.backgroundImage == arr[1].style.backgroundImage)
        One('one');
      if(mainImage.style.backgroundImage == arr[2].style.backgroundImage)
        Two('two');
      if(mainImage.style.backgroundImage == arr[3].style.backgroundImage)
        Three('three');
      if(mainImage.style.backgroundImage == arr[4].style.backgroundImage)
        Four('four');
      if(mainImage.style.backgroundImage == arr[5].style.backgroundImage)
        Five('five');
      if(mainImage.style.backgroundImage == arr[6].style.backgroundImage)
        Six('six');
      if(mainImage.style.backgroundImage == arr[7].style.backgroundImage)
        Seven('seven');
      if(mainImage.style.backgroundImage == arr[8].style.backgroundImage)
        Eight('eight');
  });

  
 
  // best 1 사진
  let best1 = document.getElementById('best1');
  let renew = document.getElementById('renew');
  renew.addEventListener('click',function(){
    resultarr=[resultZero,resultOne,resultTwo,resultThree,resultFour,resultFive,resultSix,resultSeven,resultEight];
    let thebest=Math.max.apply(null,resultarr);
    //alert(thebest);
    for(let i=0; i<resultarr.length; i++){
      if(thebest==resultarr[i])
        best1.style.backgroundImage = arr[i].style.backgroundImage;
    }
  });
 
  
  
 
  
  //0번 
   function Zero(zero){
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/zero', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var date = {zero};
    xhr.send(JSON.stringify(date));
    xhr.onreadystatechange = function (){
      if(this.readyState === 4){
        if(this.status === 201){
        
        }
      }
    }
  }

  function ZeroGet(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/zero', true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          var to = JSON.parse(this.responseText);
          resultZero = Object.keys(to).length;
          to.forEach(function(item){
          });
        }
        else{
          console.error('GET failed');
        }
      }
    }
  }



  //1번
   function One(one){
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/one', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var date = {one};
    xhr.send(JSON.stringify(date));
    xhr.onreadystatechange = function (){
      if(this.readyState === 4){
        if(this.status === 201){
        }
      }
    }
  }
  function OneGet(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/one', true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          var to = JSON.parse(this.responseText);
          resultOne = Object.keys(to).length;
          to.forEach(function(item){
          });
          
        }
        else{
          console.error('GET failed');
        }
      }
    }
  } 


  //2번
   function Two(two){
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/two', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var date = {two};
    xhr.send(JSON.stringify(date));
    xhr.onreadystatechange = function (){
      if(this.readyState === 4){
        if(this.status === 201){
        }
      }
    }
  }
  function TwoGet(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/two', true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          var to = JSON.parse(this.responseText);
          resultTwo = Object.keys(to).length;
          to.forEach(function(item){
          });
          
        }
        else{
          console.error('GET failed');
        }
      }
    }
  } 


  //3번
   function Three(three){
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/three', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var date = {three};
    xhr.send(JSON.stringify(date));
    xhr.onreadystatechange = function (){
      if(this.readyState === 4){
        if(this.status === 201){
        }
      }
    }
  }
  function ThreeGet(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/three', true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          var to = JSON.parse(this.responseText);
          resultThree = Object.keys(to).length;
          to.forEach(function(item){
          });
          
        }
        else{
          console.error('GET failed');
        }
      }
    }
  } 

  //4번
   function Four(four){
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/four', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var date = {four};
    xhr.send(JSON.stringify(date));
    xhr.onreadystatechange = function (){
      if(this.readyState === 4){
        if(this.status === 201){
        }
      }
    }
  }
  function FourGet(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/four', true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          var to = JSON.parse(this.responseText);
          resultFour = Object.keys(to).length;
          to.forEach(function(item){
          });
          
        }
        else{
          console.error('GET failed');
        }
      }
    }
  } 

  
  //5번
   function Five(five){
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/five', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var date = {five};
    xhr.send(JSON.stringify(date));
    xhr.onreadystatechange = function (){
      if(this.readyState === 4){
        if(this.status === 201){
        }
      }
    }
  }
  function FiveGet(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/five', true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          var to = JSON.parse(this.responseText);
          resultFive = Object.keys(to).length;
          to.forEach(function(item){
          });
          
        }
        else{
          console.error('GET failed');
        }
      }
    }
  } 


  //6번
   function Six(six){
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/six', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var date = {six};
    xhr.send(JSON.stringify(date));
    xhr.onreadystatechange = function (){
      if(this.readyState === 4){
        if(this.status === 201){
        }
      }
    }
  }
  function SixGet(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/six', true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          var to = JSON.parse(this.responseText);
          resultSix = Object.keys(to).length;
          to.forEach(function(item){
          });
          
        }
        else{
          console.error('GET failed');
        }
      }
    }
  } 



//7번
   function Seven(seven){
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/seven', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var date = {seven};
    xhr.send(JSON.stringify(date));
    xhr.onreadystatechange = function (){
      if(this.readyState === 4){
        if(this.status === 201){
        }
      }
    }
  }
  function SevenGet(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/seven', true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          var to = JSON.parse(this.responseText);
          resultSeven = Object.keys(to).length;
          to.forEach(function(item){
          });
          
        }
        else{
          console.error('GET failed');
        }
      }
    }
  } 


  //8번
   function Eight(eight){
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/eight', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var date = {eight};
    xhr.send(JSON.stringify(date));
    xhr.onreadystatechange = function (){
      if(this.readyState === 4){
        if(this.status === 201){
        }
      }
    }
  }
  function EightGet(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/eight', true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          var to = JSON.parse(this.responseText);
          resultEight = Object.keys(to).length;
          to.forEach(function(item){
          });
          
        }
        else{
          console.error('GET failed');
        }
      }
    }
  } 

  ZeroGet();
  OneGet();
  TwoGet();
  ThreeGet();
  FourGet();
  FiveGet();
  SixGet();
  SevenGet();
  EightGet();
})(window, document);
