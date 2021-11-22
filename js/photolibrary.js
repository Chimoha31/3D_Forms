'use strict';

var images = [
  {
    path: "image/img01.jpg",
    name: "name01",
    caption: "Comment1",
  },
  {
    path: "image/img02.jpg",
    name: "name02",
    caption: "Comment2",
  },
  {
    path: "image/img03.jpg",
    name: "name03",
    caption: "Comment3",
  },
];

var img;
var caption;
var div;


for(var i = 0; i < images.length; i++) {
img = document.createElement('img');
img.setAttribute('src', images[i].path);
// ↑<img src="image/img01.jpg">が作られた

caption = document.createElement('div');
caption.className = 'inner';
caption.innerHTML = '<p>' + images[i].caption + '<span>' + images[i].name + '</span></p>';
/* ↑<div class="inner">
       <p>Comment1<span>name01</span></p>
     </div>
*/
div = document.createElement('div');
div.className = 'photo';
div.appendChild(img);
div.appendChild(caption);
/* ↑
    <div class="photo">
      <img src="image/img01.jpg">
      <div class="inner">
        <p>Comment1<span>name01</span></p>
      </div>
    </div>
*/
document.getElementById('img_unit').appendChild(div);
}