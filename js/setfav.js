function switchFavorite(){
    let heartChange = document.querySelector('.heart-pic');
    if(heartChange.alt=="加入收藏"){
      heartChange.src = "../picture/product-picture/heart_red.png";
      window.alert("加入收藏成功");
      heartChange.alt = "取消收藏";
    }else{
      heartChange.src = "../picture/product-picture/heart_white.png";
      heartChange.alt = "加入收藏";
    }
  }
  function init(){
    document.querySelector('.heart-pic').onclick = switchFavorite();
  }
  window.addEventListener("load", init, false);