var keys={
  0: {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
  1: {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
  2: {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
  length:3
}

var hash = {
    q:'qq.com',
    w:'weibo.com',
    e:'ele.me',
    r:'renren.com',
    t:'tieba.com',
    m:'mcdonalds.com.cn',
}

var hashInLocalStorage = JSON.parse(localStorage.getItem('E2rom')||'null')
if(hashInLocalStorage){
  hash = hashInLocalStorage
}

index = 0
while(index<keys['length']){
  div = document.createElement('div')
  main.appendChild(div)
  div.className = 'row'
  row = keys[index]
  index2 = 0
  
  while(index2<row['length']){
    kbd = document.createElement('kbd')
    span = document.createElement('span')

    span.textContent = row[index2]
    span.className = 'text'
    kbd.className = 'key'
    button = document.createElement('button')
    button.textContent = '编辑'
    button.id = row[index2]
    img = document.createElement('img')
    if(hash[row[index2]]){
      img.src = 'http://' + hash[row[index2]] + '/favicon.ico'
    }else{
      img.src = '//i.loli.net/2018/09/27/5bacd71fb25e6.png'
    }
    button.onclick = function(keyboard){
      key = keyboard.target.id
      geturl = prompt('请输入网址')
      hash[key] = geturl
      localStorage.setItem('E2rom',JSON.stringify(hash))
      console.log(hash)
    }
    kbd.appendChild(span)
    kbd.appendChild(img)
    kbd.appendChild(button)
    div.appendChild(kbd)
    index2++
  }
  
  index++
}

document.onkeypress = function(keyboard){
//  console.log(hash[keyboard.key])
 // location.href =  'http://'+hash[keyboard.key]
  window.open('http://' + hash[keyboard.key],'_blank')
 // console.log('http://' + hash[keyboard.key])
}