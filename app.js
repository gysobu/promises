let posts =[{title:'post1',body:'trhis is post'
  },{title:'post2',body:'trhis is post'}]

function getPosts(){
  setTimeout(()=>{
  posts.forEach((post)=>{
    console.log(a)  
    console.log(post.title)
    console.log(a) 
  })

  },1000)
  console.log(a)
}
var a;
function createposts(post){
  
 var probj= new Promise((resolve,reject)=>{
   setTimeout(()=>{
      posts.push(post)
      console.log(posts)
     let error=false;
     if(!error){
       resolve()
     }
     else 
     {
      reject()
    }
  },2000)
}
);
a=probj;
console.log(probj)
return probj;
}

createposts({title:'post3',body:'this is third post'}).then(getPosts).catch(
    console.log("Something went wrong") 

)