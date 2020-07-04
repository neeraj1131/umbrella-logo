//colorArr array to be used to buttons and radio buttons
const colorArr = [ '#000000', '#707372', '#013057', '#d1036f', '#04a2e0', '#fed141', '#e87723', '#ef333f'];
//coverColor array to be used as background color
const coverColor = ['#cccccc', '#e2e3e2', '#ccd5dd', '#fae5f0', '#e6f5fc', '#fefaec', '#fcf1e9', '#fdeaeb'];
let value = 4;
//spinnerColor used to color our svg loader
const spinnerColor = ['invert(0)', 'invert(45%) sepia(7%) saturate(90%) hue-rotate(109deg) brightness(97%) contrast(90%)', 'invert(13%) sepia(49%) saturate(2787%) hue-rotate(189deg) brightness(94%) contrast(99%)',
'invert(17%) sepia(82%) saturate(4679%) hue-rotate(318deg) brightness(80%) contrast(107%)', 'invert(51%) sepia(86%) saturate(2008%) hue-rotate(162deg) brightness(92%) contrast(97%)',
'invert(86%) sepia(64%) saturate(846%) hue-rotate(321deg) brightness(102%) contrast(99%)', 'invert(58%) sepia(26%) saturate(1910%) hue-rotate(342deg) brightness(91%) contrast(99%)',
'invert(26%) sepia(50%) saturate(3556%) hue-rotate(339deg) brightness(100%) contrast(88%)'];
const umbrellaImage = ['', '', '', 'assets/Pink%20umbrella.png', 'assets/Blue%20umbrella.png', 'assets/Yello%20umbrella.png', '', ''];
let uploaded = false;
$umbrellaImage = $(".umbrella--image");
$umbrellaSpinner = $(".umbrella--spinner");

//Initially select default color a blue
$(".upload-button").css("backgroundColor", colorArr[4]);
$(".wrapper").css("backgroundColor", coverColor[4]);
$umbrellaSpinner.css("filter", spinnerColor[4]);
$umbrellaImage.attr('src',umbrellaImage[4]);


//function invoked when radio buttons are selected
$('input[type=radio]').change( () => {
    value = $('input[name="color"]:checked').val();
    $(".upload-button").css("backgroundColor", colorArr[value]);
    $(".wrapper").css("backgroundColor", coverColor[value]);
    $umbrellaImage.attr('src',umbrellaImage[value]);
    $umbrellaSpinner.css("filter", spinnerColor[value]);
    if(uploaded === true) {
        $umbrellaImage.attr('src','');
        $(".upload-button--spinner").css("display", "block");
        $umbrellaSpinner.css("display", "block");
        $(".upload").css("display", "none");
        $(".umbrella--logoimage").css("display", "none");
        setTimeout(() => {
                $umbrellaImage.attr('src', umbrellaImage[value]);
                $umbrellaSpinner.css("display", "none");
                $(".upload-button--spinner").css("display", "none");
                $(".upload").css("display", "block");
                $(".umbrella--logoimage").css("display", "block");
        }, 5000);
    }
});

//On Image upload this function will be executed
$(".uploadlogo").change((event) => {
    var files = event.target.files
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            setTimeout(() => {
                uploaded = true;
                $(".umbrella--logoimage").attr("src", e.target.result);
            }, 6000);
        };
        reader.readAsDataURL(event.target.files[0]);
    }
    var filename = files[0].name
    $(".upload-button__remove-image").css("display", "block");
    $(".upload-button--spinner").css("display", "block");
    $(".upload").css("display", "none");
    $umbrellaSpinner.css("display", "none");
    setTimeout(() => {
        $(this).parent().children('span').html(filename);
        $umbrellaSpinner.css("display", "block");
        $(".umbrella--image").attr('src',' ');
    }, 3000)
    setTimeout(() => {
        $(".upload-button--spinner").css("display", "none");
        $(".upload").css("display", "block");
        $umbrellaSpinner.css("display", "none");
        $(".umbrella--image").attr('src', umbrellaImage[value]);
    }, 6000)
});

//Remove the uploaded image
$(".upload-button__remove-image").click((event) => {
    event.preventDefault();
    $(this).parent().children('span').html("upload logo");
    $(".upload-button__remove-image").css("display", "none");
    $(".umbrella--logoimage").attr("src", '');
    uploaded = false;
    $(".uploadlogo").val("");
});
