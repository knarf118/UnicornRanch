var config = {
  apiKey: "AIzaSyDABfaTDh7gJxJ2ljDkLcvjACnDIJ44VoI",
  authDomain: "unicornranch-ade06.firebaseapp.com",
  databaseURL: "https://unicornranch-ade06.firebaseio.com",
  projectId: "unicornranch-ade06",
  storageBucket: "unicornranch-ade06.appspot.com",
  messagingSenderId: "832118612204"
};
firebase.initializeApp(config);

let getLocation = location => {
  const ref = firebase.database().ref(location.id);
  ref.on(
    "value",
    snapshot => {
      if (snapshot.val()) {
        location.value = snapshot.val().value;
      }
    },
    error => {
      console.error("The read failed: " + error.code);
    }
  );
};

let updateInfo = x => {
  let newLocation = x.value;
  firebase
    .database()
    .ref(x.id)
    .set({
      value: newLocation
    })
    .catch(error => {
      alert("Data could not be saved." + error);
      console.error(error);
    });
};

let showLocation = () => {
  let x = document.getElementsByTagName("select");
  for (let index = 0; index < x.length; index++) {
    getLocation(x[index]);
  }
};
