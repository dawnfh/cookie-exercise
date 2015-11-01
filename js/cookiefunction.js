function setCookie(website, Dawn, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(website) {
    var name = website + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}

// function checkCookie() {
//     var user = getCookie("username");
//     if (user != "") {
//         alert("Welcome again " + user);
//     } else {
//         user = prompt("Please enter your name:", "");
//         if (user != "" && user != null) {
//             setCookie("username", user, 365);
//         }
//     }
// }





// $(document).ready(function(){
  
//   // checks to see if there are search params works
//   if(location.search){
//     // splits location search bar by '?' and gets
//     //  everything after the ?
//     params = location.search.split("?")[1]

//     // splits params by '=' and gets everything after the '='
//     name = params.split("=")[1]

//     // sets cookie with key 'name_submitted' to whatever name is set to
//     Cookies.set("name_submitted", name)
//   }

//   // checks to see if the cookie is set
//   if(Cookies.get("name_submitted")) {

//     // gets the cookie value and sets the html of name span
//     $("#name_span").html(Cookies.get("name_submitted"))
//   }
// })









// function setCookies(){
// 	document.cookie = "name=" + document.getElementid("txtName").value;
// }

// function showCookie(){
// 	alert(document.cookie);
// }


