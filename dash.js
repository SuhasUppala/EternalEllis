let ble =document.getElementById("img");
let sel_ele = document.createElement('button');

let ie1 =document.createElement('img');
let iurl1="https://www.slideteam.net/media/catalog/product/cache/1280x720/e/n/energy_consumption_dashboard_with_sources_overview_slide01.jpg"
let ie2


function previous(){
    ble.innerHTML='';
    ie1.src=iurl1;
    ble.appendChild(ie1);
    ie1.classList.add("dashboard");
}
function showig(){
    ie1.src=iurl1;
    ble.appendChild(ie1);
    ie1.classList.add("dashboard");
}
    


function current() {
    var rightPart = document.getElementById('img');
    rightPart.innerHTML = '<h3>Select a file</h3>';
    
    // Create 'Select' button
    var selectButton = document.createElement('button');
    selectButton.textContent = 'Select';
    selectButton.classList.add("butt");
    selectButton.onclick = function() {
        // Trigger file input click when 'Select' button is clicked
        document.getElementById('fileInput').click();
    };

    // Create 'Check' button
    var checkButton = document.createElement('button');
    checkButton.textContent = 'Check';
    checkButton.classList.add('butt');
    checkButton.onclick = function() {
        var fileInput = document.getElementById('fileInput');
        var selectedFile = fileInput.files[0];
        
        if (selectedFile) {
            // Display selected image and description
            // 
            showImage("https://img.hotimg.com/IMG-20240224-WA0006df66f9c7922a9d3a.jpeg");
            
            showDescription('Refrigeration: Regularly maintain refrigeration equipment to ensure efficiency and minimize energy waste.Lighting: Utilize natural light where possible and install energy-efficient lighting fixtures.Cooling: Use programmable thermostats to adjust cooling settings during non-business hours.');
        } else {
            alert('Please select a file.');
        }
    };

    // Create file input element
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'fileInput';
    fileInput.style.display = 'none';

    // Append elements to the right part
    rightPart.appendChild(selectButton);
    rightPart.appendChild(checkButton);
    rightPart.appendChild(fileInput);
}

function future() {
    // Replace the following URL with the actual URL of the image for the 'future' button
    var imageUrl = 'https://www.slideteam.net/media/catalog/product/cache/1280x720/i/o/iot_energy_dashboard_showing_consumption_and_voltage_powerpoint_template_slide01.jpg';
    showImage(imageUrl);
}

function showImage(imageUrl) {
    var rightPart = document.getElementById('img');
    rightPart.innerHTML = '<img src="' + imageUrl + '" alt="Image">';
}

function showDescription(description) {
    var rightPart = document.getElementById('img');
    var paragraph = document.createElement('p');
    paragraph.textContent = description;
    rightPart.appendChild(paragraph);
}

function showImage(imageUrl) {
    var rightPart = document.getElementById('img');
    rightPart.innerHTML = '<img src="' + imageUrl + '" alt="Image" style="max-width: 100%; height: auto; max-height: 100%;">';
}

function back(){
    window.location.href = "main.html";
}