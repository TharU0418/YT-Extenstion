const resultDis = document.getElementById("load-title");
const resultMore = document.getElementById("result-more");
const downloadBtn = document.getElementById("download");

let video_quality;


const dropdownSelect = document.getElementById("dropdown-select");


chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        
    
    if (tabs.length > 0) {
        const currentUrl = tabs[0].url;
        console.log("Current URL:", currentUrl);
          
        const xhr = new XMLHttpRequest();
        
        xhr.timeout = 150000;
        xhr.onerror = function () {
        resultDis.innerHTML = `
            <h4 style="color:red">currentUrl</h4>
        `
        }
    xhr.open(
        "GET",
        `http://localhost:5000//extenstion?userinput=` + currentUrl,
        true
    );

        xhr.onload = function () {
            if(xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
                const title = data["Vid_title"];
                const img = data["Thumbnail_url"];

                resultDis.innerHTML = `
                    <h5 style="color:purple; font-size:20px;">Title: ${title}</h5>
                    <img src="${img}" style="width:400px; height:160px;"/>
                    
                    
                `
            }
        }
        
        xhr.send();

        }
    });
//});


dropdownSelect.addEventListener("change", function() {
    const selectedOption = dropdownSelect.value;
    console.log("Selected option:", selectedOption);
    video_quality = selectedOption;
    console.log("video_quality:", video_quality);

    // Perform actions based on the selected option
    if (selectedOption === "144p") {
       video_quality = selectedOption
    } else if (selectedOption === "240p") {
      video_quality = selectedOption
    } else if (selectedOption === "360p") {
      video_quality = selectedOption
    }else if (selectedOption === "720p") {
      video_quality = selectedOption
    }else if (selectedOption === "1080p") {
      video_quality = selectedOption
    }

    video_quality = selectedOption;
    console.log("video_quality:", video_quality);
    
  });
  console.log('2',video_quality)


downloadBtn.addEventListener("click", function() {

    

chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        
    
    if (tabs.length > 0) {
        const currentUrl = tabs[0].url;
 
        const xhr = new XMLHttpRequest();

        console.log("vq",video_quality)

    xhr.open(
        "GET",
        `http://localhost:5000/?userinput=${currentUrl}&video_quality=${video_quality}` , 
        true
    );

        
        xhr.send();

        }
    });
});


