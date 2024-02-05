function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let obj = document.getElementById("text");
  let cbox = document.getElementById("check");
  if (check.checked) {
    obj.style.backgroundColor = "red";
  } else {
    obj.style.backgroundColor = "transparent";
  }
}
