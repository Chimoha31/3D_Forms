"use strict";

var ajax = new XMLHttpRequest();
ajax.open("GET", "https://h2o-space.com/htmlbook/images.php");
ajax.responseType = "json";
ajax.send(null);

ajax.onreadystatechange = function () {
  // alert(ajax.readyState); 通信が終わった時に受け取れる数字は、最後は4！
  if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
    for (var i = 0; i < this.response.length; i++) {
      var data = this.response[i];

      var img = document.createElement("img");
      img.setAttribute("src", data.path);

      var caption = document.createElement("div");
      caption.className = "inner";
      caption.innerHTML =
        "<p>" + data.caption + "<span>" + data.name + "</span></p>";

      var div = document.createElement("div");
      div.className = "photo";
      div.appendChild(img);
      div.appendChild(caption);

      document.getElementById("img_unit").appendChild(div);
    }
  }
};
