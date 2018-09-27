
//1.init data
var object = init()
var keys = object['keys']
var hash = object['hash']

//2.createKeyboard
generateKeyboard(keys,hash)

//3.Listening to user actions
listenToUser(hash)






//Here is the encapsulation function
function getFromLocalStorage(name){
  JSON.parse(localStorage.getItem(name)||'null')
}

function tag(tagName){
  return document.createElement(tagName)
}
/*
function tag(tagName,attributes){
  var  element = document.createElement(tagName)
  for(var key in attributes){ //key: className , id ,textContent
    element[key] = attributes[key]
  }
  return element
}
*/

function createSpan(textContent){
  var span = tag('span')
  span.textContent = textContent
  span.className = 'text'
  return span
}

function createButton(id){
  var  button = tag('button')
  button.textContent = '编辑'
  button.id = id
  button.onclick = function(keyboard){
    var  button2 = keyboard.target
    var img2 = button.previousSibling

    var key = button2.id//q w e r t ...
    var geturl = prompt('请输入网址')//qq.com
    hash[key] = geturl //Hash change
    img2.src = 'http://' + geturl + '/favicon.ico'
    img2.onerror = function(error){
      error.target.src= '//i.loli.net/2018/09/27/5bacd71fb25e6.png'
      }
    localStorage.setItem('E2rom',JSON.stringify(hash))
  }
  return button
}

function createImage(domain){
  var img = tag('img')
  if(domain){
    img.src = 'http://' + domain + '/favicon.ico'
  }else{
    img.src = '//i.loli.net/2018/09/27/5bacd71fb25e6.png'
  }
  img.onerror = function(error){
   error.target.src= '//i.loli.net/2018/09/27/5bacd71fb25e6.png'
  }
  return img
}

function init(){
  var keys={
    0: {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    1: {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    2: {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    length:3
  }
  var hash = {
      q:'qq.com',
      w:'m.weibo.cn',
      e:'ele.me',
      r:'renren.com',
      b:'tieba.com',
      m:'www.mcdonalds.com.cn',
  }
  //Remove the hash from the E2rom in the localStorage
  var hashInLocalStorage = getFromLocalStorage('keyboard')
  if(hashInLocalStorage){
    hash = hashInLocalStorage
  }
  return {
    keys:keys,
    hash:hash
  }
}

function generateKeyboard(keys,hash){
  //ergodic keys create kbd label
  for(var index=0;index<keys['length'];index++){ // 0 1 2 
    div = tag('div')
    div.className = 'row'
  
    main.appendChild(div)
  
    var row = keys[index] // firstArray secondArray ThirdArray
    for(var index2=0;index2<row['length'];index2++){
  
      var span = createSpan(row[index2])
  
      var  button = createButton(row[index2])
      var  img = createImage(hash[row[index2]])
      var kbd = tag('kbd')
      kbd.className = 'key'
  
      kbd.appendChild(span)
      kbd.appendChild(img)
      kbd.appendChild(button)
      div.appendChild(kbd)
    }
  }
}

function listenToUser(hash){
  document.onkeypress = function(keyboard){
     var key = keyboard['key'] // q w e 
     var website = hash[key]
      window.open('http://' + website,'_blank')
      //console.log('http://' + website)
    }
}