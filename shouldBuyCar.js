function buyCar(car){
  if (car === "") {
    throw 'Error';
  } else if (car.consumption === 6 || car.consumption === 11) {
    if (car.price <= 5000) {
      return true;
    } else {
      return false;
    }
  } else if (car.consumption === 5 || car.consumption === 12) {
    return false;
  } else if (!car.type && !car.colour) {
    return false;
  } else if (car.type === 'hatchback' && car.colour === 'pink') {
    return false;
  } else if (car.colour === 'pink') {
    return true;
  } else if (car.type === 'hatchback') {
    return false;
  }
}

module.exports = buyCar;