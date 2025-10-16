function playAd() {
	
  return new Promise(resolve => {
	   show_videoad();
    console.log("ad started");
      setTimeout(() => {
      console.log("rb!");
      resolve();
    }, 800);
  });
  
 
}

