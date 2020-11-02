
function touch(a,b){
    if(a.x-b.x<a.width/2+b.width/2&&
      b.x-a.x<a.width/2+b.width/2&&
      a.y-b.y<a.height/2+b.height/2&&
      b.y-a.y<a.height/2+b.height/2 ){
    return true;
    }
    else{
      return false;
    }
  }
  
  function bounce(a,b){
    if(a.x-b.x<a.width/2+b.width/2&&
      b.x-a.x<a.width/2+b.width/2){
        r1.velocityX*=(-1)
        r2.velocityX*=(-1)
      }
      if( a.y-b.y<a.height/2+b.height/2&&
        b.y-a.y<a.height/2+b.height/2 ){
      r1.velocityY*=(-1)
      r2.velocityY*=(-1)
      }
  }