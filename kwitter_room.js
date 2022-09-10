
var firebaseConfig = {
      apiKey: "AIzaSyCg7r3Tp8Dlh16Bts9CkktSfG7Au6tA5vM",
      authDomain: "kwitter-7d952.firebaseapp.com",
      databaseURL: "https://kwitter-7d952-default-rtdb.firebaseio.com",
      projectId: "kwitter-7d952",
      storageBucket: "kwitter-7d952.appspot.com",
      messagingSenderId: "513720015165",
      appId: "1:513720015165:web:9551d7fc9f4353b6728d54",
      };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name+"!";
    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room_names-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHML+=row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}