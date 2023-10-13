// JavaScript source code
function copyToClipboard(){
        var text = document.getElementById("textToCopy");
        text.select();
        document.execCommand("copy");
        alert("Copied to clipboard!");
}
