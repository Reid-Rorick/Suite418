// JavaScript source code
function copyToClipboard(){
        var text = document.getElementById("textToCopy");
        text.select();
        document.execCommand("copy");
        alert("Copied to clipboard!");
}

function handleCommentaryClick(verseNumber) {
    // Define commentary logic based on the verse number
    if (verseNumber === 7) {
        // Handle commentary for Luke 7:50
        console.log("Commentary for Luke 7:50");
        // Add your specific commentary logic here
    } else if (verseNumber === 23) {
        // Handle commentary for Luke 23:40-43
        console.log("Commentary for Luke 23:40-43");
        // Add your specific commentary logic here
    }
}