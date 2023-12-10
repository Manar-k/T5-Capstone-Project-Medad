// upload image functions
const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const img = document.querySelector("#upimg");

let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

function defaultBtnActive(){
    defaultBtn.click();
}

defaultBtn.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            img.src = result;
            wrapper.classList.add("active");
            uploadButton.style.display = 'none';
        }
        cancelBtn.addEventListener("click", function(){
            img.src = "";
            wrapper.classList.remove("active");
            uploadButton.style.display = 'block';
        })
        reader.readAsDataURL(file);
    }
    
    if(this.value){
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
    }
});

// translate page from arabic to english function
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: "ar"}, 'google_translate_element');
}
function changeLanguageByButtonClick() {
    var language = "en"
    var selectField = document.querySelector("#google_translate_element select");
    for(var i=0; i < selectField.children.length; i++){
      var option = selectField.children[i];
      // find desired langauge and change the former language of the hidden selection-field 
      if(option.value==language){
         selectField.selectedIndex = i;
         // trigger change event afterwards to make google-lib translate this side
         selectField.dispatchEvent(new Event('change'));
         break;
      }
    }
  }
  function changeLanguageToArabic() {
    var language = "ar"
    var selectField = document.querySelector("#google_translate_element select");
    for(var i=0; i < selectField.children.length; i++){
      var option = selectField.children[i];
      // find desired langauge and change the former language of the hidden selection-field 
      if(option.value==language){
         selectField.selectedIndex = i;
         // trigger change event afterwards to make google-lib translate this side
         selectField.dispatchEvent(new Event('change'));
         break;
      }
    }
  }
  function changeFunc() {
    var selectBox = document.getElementById("lang");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue =="eng"){
        selectBox.addEventListener("click", changeLanguageByButtonClick);
    } 
    else if(selectedValue =="ara") {
        selectBox.addEventListener("click", changeLanguageToArabic());
    }
}

// hide button after upload image
function hideButton() { 
    // Hide the other button
    uploadButton.style.display = 'none';
  }

// spelling checker function
function sendData() { 
    var value = document.getElementById('input').value; 
    $.ajax({ 
        url: '/correct', 
        type: 'POST', 
        contentType: 'application/json', 
        data: JSON.stringify({ 'value': value }), 
        success: function(response) {  
            document.getElementById('output').value = response.result;
            // alert("العبارة بعد التصحيح: "+ response.result);
        },
        error: function(error) { 
            console.log(error); 
        } 
    }); 
} 