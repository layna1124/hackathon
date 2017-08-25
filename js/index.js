(function(window, document){
  'use strict';
  // List item을 추가하는 함수

  // var input = document.querySelector('.input');
  // console.log('input: ', input);
  // var button = document.querySelector('.button');
  // console.log('button: ', button);
  // var todoList = document.querySelector('.todo-list');
  // console.log('todoList: ', todoList);
  
  // button.addEventListener('click', addListItem);
  // input.addEventListener('keyup', addListItem);
  // // CRUD create, read, update, delete
  // // HTTP method post, get, put, delete

  
  // function addListItem(e){
  //   // 입력이 아무것도 없을경우 함수 실행 안함
  //   if(!input.value.trim()) return ;
  //   // enter가 들어왔을 경우 또는 클릭이벤트일 경우
  //   if((e.keyCode === 13) || e.type === 'click'){
  //     // post method로 서버에 task를 전송하는 함수 호출
  //     itemPost(input.value);
  //     // input 입력이 완료 된 경우 내용 지워줌
  //     input.value = '';
  //     // focus를 input 요소로 유지
  //     // input.focus();
  //   }
  // }


  // // List item을 delete method로 제거하는 함수
  // function deleteListItem(id, target){
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('delete', '/toDoList/' + id, true);
  //   xhr.send(null);
  //   xhr.onreadystatechange = function(){
  //     if(this.readyState === 4){
  //       if(this.status === 200){
  //         console.log('this.responseText: ', this.responseText);
  //         // DB에서 성공적으로 제거 됐을 경우 DOM에서도 지움
  //         todoList.removeChild(target.parentNode);
  //       }
  //     }
  //   }
  // }


  // // List item을 post method로 등록하는 함수
  // function itemPost(task){
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('post', '/toDoList', true);
  //   // HTTP 통신패킷의 header 속성을 바꿔주는 API content-type을 application/json으로 변경시켜줌
  //   xhr.setRequestHeader('Content-type', 'application/json');
  //   var data = {task};
  //   // data를 문자열화 시켜서 HTTP 통신 패킷의 body에 넣어서 보냄
  //   xhr.send(JSON.stringify(data));
  //   xhr.onreadystatechange = function (){
  //     if(this.readyState === 4){
  //       if(this.status === 201){
  //         console.log(this.responseText);
  //         // 통신이 성공했을 경우 해당 List item을 DOM에 추가
  //         var item = JSON.parse(this.responseText);
  //         insertItem(todoList, item.task, item.id);
  //       }
  //     }
  //   }
  // }


  // // DB로 부터 List item list를 get method를 통해 가져오는 함수
  // function getListItem(){
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('get', '/toDoList', true);
  //   xhr.send(null);
  //   xhr.onreadystatechange = function(){
  //     if(this.readyState === 4){
  //       if(this.status === 200){
  //         console.log('this.responseText: ', this.responseText);
  //         var toDoItemList = JSON.parse(this.responseText);
  //         console.log('toDoItemList: ', toDoItemList);
  //         // 통신이 성공했을 경우 각각의 item을 list에 추가
  //         toDoItemList.forEach(function(item){
  //           console.log('item.task: ', item.task);
  //           insertItem(todoList, item.task, item.id);
  //         });
  //       }
  //       else{
  //         console.error('GET failed');
  //       }
  //     }
  //   }
  // }
  // // List item 추가해주는 함수
  // function insertItem(element, task, id){
  //   element.insertAdjacentHTML('beforeend', '<li class="todo-item">' + task + '<button class="delete">Delete</button></li>');
  //   // li안에 delete button이 동적으로 생성 되기 때문에 DOM에 추가한 후 클릭 이벤트 바인딩
  //   bindDeleteButton(id);
  // }
  // // deleteButton을 바인딩 시켜주는 함수
  // function bindDeleteButton(id){
  //   var delButton = document.querySelectorAll('.delete');
  //   console.log('delButton: ', delButton[delButton.length-1]);
  //   // li 요소가 추가 될 때 delete button은 항상 마지막 요소이기 때문에 
  //   // 마지막 버튼에 이벤트 바인딩
  //   delButton[delButton.length-1].addEventListener('click', function(){
  //     deleteListItem(id, this);
  //   });
  // }


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

  // 전체 사진 배열
  let arr = [zero,one,two,three,four,five,six,seven,eight];

  // 각 사진 클릭 시
  zero.addEventListener('click',function(){
    mainImage.style.backgroundImage = arr[0].style.backgroundImage; 
    alert();
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


  
  


  // plus 클래스의 좋아요 등
  let good = document.getElementById('good');
  let soso = document.getElementById('soso');
  let hate = document.getElementById('hate');

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

  let resultarr=[resultZero,resultOne,resultTwo,resultThree,resultFour,resultFive,resultSix,resultSeven,resultEight,resultNine];
  
  // good 버튼 클릭
  good.addEventListener('click',function(){
    for(let i=0; i<arr.length; i++){
      if(mainImage.style.backgroundImage == arr[i].style.backgroundImage){
        resultarr[i]+=3;
      }
      console.log(resultarr[i]);
    }
  });

   // soso 버튼 클릭
   soso.addEventListener('click',function(){
    for(let i=0; i<arr.length; i++){
      if(mainImage.style.backgroundImage == arr[i].style.backgroundImage){
        resultarr[i]+=1;
      }
      console.log(resultarr[i]);
    }
  });

   // hate 버튼 클릭
   hate.addEventListener('click',function(){
    for(let i=0; i<arr.length; i++){
      if(mainImage.style.backgroundImage == arr[i].style.backgroundImage){
        resultarr[i]+=-1;
      }
      console.log(resultarr[i]);
    }
  });
    

  // best 3 사진
  let best=0;
  let best1 = document.getElementById('best1');
  let renew = document.getElementById('renew');
  renew.addEventListener('click',function(){
    best = Math.max.apply(null,resultarr);
    for(let i=0; i<arr.length; i++){
      if(best==resultarr[i]){
        best1.style.backgroundImage = arr[i].style.backgroundImage;
      }
    }
    
  });
  
  
 
  
  
 

    
  

  
  

  getListItem();
})(window, document);
