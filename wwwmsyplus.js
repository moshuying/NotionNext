
console.log('MSY-CUSTOM SCRIPT');
function onDomLoaded() {
  var dom = document.querySelector("#wrapper > div.hidden.md\\:block.border-r.dark\\:border-transparent.relative.z-10.dark\\:bg-hexo-black-gray > div > footer");
  var div = document.createElement('div')
  div.className = "w-full justify-center flex-wrap flex"
  dom.appendChild(div)
  div.innerHTML = `  <a href="https://www.revolvermaps.com/livestats/5sqtbj6e09w/"><img src="//rf.revolvermaps.com/h/m/a/7/ff0000/94/5/5sqtbj6e09w.png" width="188" height="94" alt="Map" style="border:0;"></a>`
}
var intervalID = setInterval(() => {
  var dom = document.querySelector("#wrapper > div.hidden.md\\:block.border-r.dark\\:border-transparent.relative.z-10.dark\\:bg-hexo-black-gray > div > footer");
  if (dom) {
    clearInterval(intervalID)
    onDomLoaded()
  } else {
    return void 0
  }

}, 50)

