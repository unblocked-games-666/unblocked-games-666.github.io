function playAd() {
	
  return new Promise(resolve => {
    console.log("ad started");
      setTimeout(() => {
      console.log("rb!");
      resolve();
    }, 800);
  });
  
  show_videoad();
}

