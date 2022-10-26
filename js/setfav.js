let fav = true;
$('.fa-heart').click(function(){
  if(fav == true){
    $(this).css("color", "red")
    alertTest()
    fav = false;
  }else{
    $(this).css("color", "#ccc")
    fav = true;
  }
  
});
function alertTest() {
  Swal.fire(
      "成功加入我的最愛",
      "快來爬山~",
      'success',
  );
}