{{ define "Gallery.js" }}
var gallery = {{ .Gallery }};
var selectedNumber = 0;
var leader = 0;
medias = document.getElementsByClassName("galPic");
var imglocation = '../../public/assets/gallery/';

function moveMedia(mediaNum) {
    console.log("mm::",mediaNum)
    for (var i=0; i<medias.length; i++) {
        medias[i].innerHTML = "";
        s = gallery[i + mediaNum];
        gbp = document.getElementById("galButtPrev");
        if (s.slice(s.length - 3, s.length) == "mp4") {
            vid = document.createElement("video");
            vid.id = "media_" + s;
            vid.className = "galPicImg";
            vid.src = imglocation + gallery[i + mediaNum];
            medias[i].appendChild(vid);
            vid.setAttribute("onclick","selectMedia('vid', '" + gallery[i + mediaNum] + "')" );
        } else {
            img = document.createElement("img");
            img.id = "media_" + s;
            img.className = "galPicImg";
            img.src = imglocation + gallery[i + mediaNum];
            medias[i].appendChild(img);
            img.setAttribute("onclick","selectMedia('img', '" + gallery[i + mediaNum] + "')" );
        }
        medias[i].style.border = "unset";
    }
}

function nextPic() {
    if (leader >= gallery.length - 5) {
        if (selectedNumber < gallery.length && selectedNumber != -1) {
            selectMedia(findType(selectedNumber + 1), gallery[selectedNumber + 1], "right")
        }
    } else {
        selectMedia(findType(selectedNumber + 1), gallery[selectedNumber + 1], "right")
    }
}

function prevPic() {
    if (leader == 0) {
        if (selectedNumber > 0) {
            selectMedia(findType(selectedNumber - 1), gallery[selectedNumber - 1], "left")
        } else {
            selectMedia(findType(0), gallery[0])
        }
    } else {
        selectMedia(findType(selectedNumber - 1),  gallery[selectedNumber - 1], "left")
    }
}

// function changeSelectedPicOuter(imgID) {
//     var spo = document.getElementById("selectedPicOuter");
//     spo.style.backgroundImage = "url(" + imgID + ")";
//     spo.style.backgroundSize = "10%";
// }

function findType(ind) {
    if (ind > 0 && ind < gallery.length) {
        s = gallery[ind];
        if (s.slice(s.length - 3, s.length) == "mp4") {
            return "vid";
        }
        return "img";
    }
}

function selectMedia(mediaType, src, dir) {
    submedias = document.getElementsByClassName("galPicImg");
    for (var i=0; i<submedias.length; i++) {
        submedias[i].style.border = "unset";
    }
    if (src != undefined) {
        picDiv = document.getElementById("selectedPicOuter");
        picDiv.innerHTML = "";

        if (dir != undefined) {
            if (dir == "left") {
                if (mediaType == "vid") {
                    vid = document.createElement("video");
                    vid.className = "selectedPicImg";
                    vid.src = imglocation + gallery[selectedNumber - 1] ;
                    picDiv.appendChild(vid);
                    vid.play();
                } else {
                    img = document.createElement("img");
                    img.className = "selectedPicImg";
                    img.src = imglocation + gallery[selectedNumber - 1];
            // changeSelectedPicOuter(img.src);
                    picDiv.appendChild(img);
                }
                if (leader > 0) {
                    leader = leader - 1;
                } 
                moveMedia(leader);
                document.getElementById("media_" + gallery[selectedNumber - 1]).style.border = "2px solid gold";
            } else {
                console.log("right");
                if (mediaType == "vid") {
                    vid = document.createElement("video");
                    vid.className = "selectedPicImg";
                    vid.src = imglocation + gallery[selectedNumber + 1];
                    picDiv.appendChild(vid);
                    vid.play();
                } else {
                    img = document.createElement("img");
                    img.className = "selectedPicImg";
                    img.src = imglocation + gallery[selectedNumber + 1];
            // changeSelectedPicOuter(img.src);
                    picDiv.appendChild(img);
                }
                if (leader < 210) {
                    leader = leader + 1
                }
                moveMedia(leader);
                document.getElementById("media_" + gallery[selectedNumber + 1]).style.border = "2px solid gold";
            }
            selectedNumber = gallery.indexOf(src);
            return;
        }
        if (mediaType == "vid") {
            vid = document.createElement("video");
            vid.className = "selectedPicImg";
            vid.src = imglocation + src ;
            picDiv.appendChild(vid);
            vid.play();
            document.getElementById("media_" + src).style.border = "2px solid gold";
        } else {
            img = document.createElement("img");
            img.className = "selectedPicImg";
            img.src = imglocation + src ;
            // changeSelectedPicOuter(img.src);
            picDiv.appendChild(img);
            document.getElementById("media_" + src).style.border = "2px solid gold";
        }
        selectedNumber = gallery.indexOf(src);
    }
}

picDiv = document.getElementById("selectedPicOuter");
picDiv.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

picDiv.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);


function handleGesture() {
    if (touchendX + 5 < touchstartX) {
        console.log('Swiped Left');
        nextPic();
    }

    if (touchendX - 5  > touchstartX) {
        console.log('Swiped Right');
        prevPic();
    }


}


moveMedia(0);

{{end}}
