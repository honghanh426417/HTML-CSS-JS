document.addEventListener("DOMContentLoaded", function(event) {
    var inputSearch = document.getElementById("keyword");
    inputSearch.onkeydown = function(event){
      if(event.keyCode == 13) {
        loadVideo(this.value);
      }
    }
    loadVideo("Đen vâu");
  });
  
  var modal = document.getElementById('myModal');
  
  var span = document.getElementsByClassName("close") [0];
  
  var videoFrame = document.getElementById("video-frame");
  
  span.onclick = function() {
    closeVideo();
  }
  
  window.onclick = function(event) {
    if(event.target == modal) {
      closeVideo();
    }
  }
  
  function loadVideo(keyword) {
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" 
  + keyword 
  + "&type=video&maxResults=9&part=snippet&key=AIzaSyCBa9SoQcgfJ_7MhMrbwloD2Z9ACxcOiJ0";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", YOUTUBE_API, true);
    xhr.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        
        var responseJson = JSON.parse(this.responseText);
        var htmlContent = "";
  
        for (var i = 0; i < responseJson.items.length; i++) {
          if(responseJson.items[i].id.kind == 'youtube#channel') {
            continue;
          }
          var videoId = responseJson.items[i].id.videoId;
          var videoTitle = responseJson.items[i].snippet.title;
          var videoDescription = responseJson.items[i].snippet.description;
          var videoThumbnail = responseJson.items[i].snippet.thumbnails.medium.url;
          htmlContent += '<div class="video" onclick="showVideo(\''+ videoId + '\')">'
            htmlContent += '<img src="' + videoThumbnail + '">'
            htmlContent += '<div class="title">' + videoTitle + '</div>'
          htmlContent += '</div>'
        }
  
        document.getElementById("list-video").innerHTML = htmlContent;
      } else if(this.readyState == 4) {
        console.log("Fails");
      }
    };
    xhr.send();
  }
  
  function closeVideo() {
    modal.style.display = "none";
    videoFrame.src = "";
  }
  
  function showVideo(videoId) {
    videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    setTimeout(function() {
      modal.style.display = "block";
    }, 300);
  }


  

  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

    
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  