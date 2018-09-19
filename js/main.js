var keys={
  0: ['q','w','e','r','t','y','u','i','o','p'],
  1: ['a','s','d','f','g','h','j','k','l'],
  2: ['z','x','c','v','b','n','m'],
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
while(index++<keys.length){
  div1 = document.createElement('div')
  x.appendChild(div1)
  index1 = 0
  while(index1++<keys[index-1].length){
    z = document.createElement('kbd')
    z.textContent = keys[index-1][index1-1]
    button = document.createElement('button')
    button.textContent = '编辑'
    button.id = keys[index-1][index1-1]
    button.onclick = function(keybord){
      key = keybord.target.id
      geturl = prompt('请输入网址')
      hash[key] = geturl
      localStorage.setItem('E2rom',JSON.stringify(hash))
    }
    z.appendChild(button);
    div1.appendChild(z)
  }
}

document.onkeypress = function(keybord){
//  console.log(hash[keybord.key])
 // location.href =  'http://'+hash[keybord.key]
  window.open('http://' + hash[keybord.key],'_blank')
 // console.log('http://' + hash[keybord.key])
}