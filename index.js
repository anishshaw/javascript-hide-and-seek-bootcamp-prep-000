function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var element = document.getElementById('nested').querySelector('.target')
  return element
}

function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (i=0 in list){
    list[i].innerHTML = (parseInt(list[i].innerHTML,10) + n).toString()
  }
}

function deepestChild(){
  const list = document.getElementById('grand-node').querySelectorAll('div')
  var l = list.length
  return list[l -1] 
}
