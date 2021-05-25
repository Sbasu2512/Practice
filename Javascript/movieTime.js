class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  // Insert code below
  movieTime()
{
  //let data = this.data;
  //let user = this.users;

  this.data -= this.user * 5;

  if(this.data < 10){
    return false;
  }else{
    return true;
  }
}

};

const library = new Network(50, 9) 
library.movieTime();
console.log(library.movieTime());