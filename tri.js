function sort(tab){
    for(let i = 0; i < tab.length; i++){
  
      let min = i; 
      for(let j = i+1; j < tab.length; j++){
        if(tab[j] < tab[min]){
  
         min = j; 
        }
      }
      let tmp = tab[i];
      tab[i] = tab[min];
      tab[min] = tmp;
    }
    return tab;
  }