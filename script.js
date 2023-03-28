// toggle moduls
 const modusl_post = document.querySelector(".modusl_post")
 const postBtn = document.getElementById("postBtn")
 const ToggleModul =()=>{
  modusl_post.classList.toggle("show")
 }
 postBtn.addEventListener('click',ToggleModul)