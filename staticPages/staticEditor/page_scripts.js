var active = [];

if (window.FileReader) {
  function handleFileSelect(evt) {
        var files = evt.target.files;
        var f = files[0];
        var reader = new FileReader();
         
          reader.onload = (function(theFile) {
                return function(e) {
                  document.getElementById('image').innerHTML = ['<img src="', e.target.result,'" title="', theFile.name, '" width="100%" height="100%" />'].join('');
                };
          })(f);
           
          reader.readAsDataURL(f);
}

} else {
  alert('This browser does not support FileReader');
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDown(x) {
	if(x == 0){
        document.getElementById("file_dropdown").classList.toggle("show");
    } else if(x == 1){
        document.getElementById("edit_dropdown").classList.toggle("show");
    }
}
function displayLesson(x) {
	if(x == 0){
        document.getElementById("quiz").classList.toggle("show");
		if(active.indexOf(0) >= 0){
		    active = [];
		} else {
			active.push(0);
		}
        if(active.length > 0){
			if(active.indexOf(1) >= 0){
				document.getElementById("highlight_lesson").classList.toggle("show");
				active.splice(active.indexOf(1), 1)
			}
			if(active.indexOf(2) >= 0){
				document.getElementById("passage_lesson").classList.toggle("show");
				active.splice(active.indexOf(2), 1)
			}
		}
    } else if(x == 1){
        document.getElementById("highlight_lesson").classList.toggle("show");
		if(active.indexOf(1) >= 0){
		    active = [];
		} else {
			active.push(1);
		}
		if(active.length > 0){
			if(active.indexOf(0) >= 0){
				document.getElementById("quiz").classList.toggle("show");
				active.splice(active.indexOf(0), 1)
			}
			if(active.indexOf(2) >= 0){
				document.getElementById("passage_lesson").classList.toggle("show");
				active.splice(active.indexOf(2), 1)
			}
		}
    } else if(x == 2){
        document.getElementById("passage_lesson").classList.toggle("show");
		if(active.indexOf(2) >= 0){
		    active = [];
		} else {
			active.push(2);
		}
		if(active.length > 0){
			if(active.indexOf(0) >= 0){
				document.getElementById("quiz").classList.toggle("show");
				active.splice(active.indexOf(0), 1)
			}
			if(active.indexOf(1) >= 0){
				document.getElementById("highlight_lesson").classList.toggle("show");
				active.splice(active.indexOf(1), 1)
			}
		}
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var dropdown = document.getElementById("file_dropdown");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
  } else if (!e.target.matches('.dropbtn')) {
    var dropdown = document.getElementById("edit_dropdown");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
  } 
}

function save() {}
function load() {}
function reset_page() {}