/*Sidir*/
$(document).ready(function() {
$('#simple-menu').sidr();
}); 


$(document).ready(function() {
$('#left-menu').sidr({
name: 'sidr-left',
source: '#sidr',

side: 'left' // By default
});
$('#right-menu').sidr({
name: 'sidr-right',
source: '#sidr',
side: 'right'

});
}); 

/*/Sidir*/