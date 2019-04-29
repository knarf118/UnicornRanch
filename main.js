var config = {
  apiKey: "AIzaSyDABfaTDh7gJxJ2ljDkLcvjACnDIJ44VoI",
  authDomain: "unicornranch-ade06.firebaseapp.com",
  databaseURL: "https://unicornranch-ade06.firebaseio.com",
  projectId: "unicornranch-ade06",
  storageBucket: "unicornranch-ade06.appspot.com",
  messagingSenderId: "832118612204"
};

let updateInfo = x => {
  let newLocation = x.value;
  localStorage[x.id] = newLocation;
};

let showLocation = () => {
  let x = document.getElementsByTagName("select");
  for (let index = 0; index < x.length; index++) {
    if (localStorage[x[index].id]) {
      x[index].value = localStorage[x[index].id];
    }
  }
};
