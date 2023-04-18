


if(window.localStorage.getItem('htmlText')){
    document.getElementById("htmlCode").value=window.localStorage.getItem('htmlText');
}else{
    document.getElementById("htmlCode").value='<div>\n\n</div>';
}
if(window.localStorage.getItem('cssText')){
    document.getElementById("cssCode").value=window.localStorage.getItem('cssText');
}else{
    document.getElementById("cssCode").value="<style>\n\n</style>";
}
if(window.localStorage.getItem('javascriptText')){
    document.getElementById("jsCode").value=window.localStorage.getItem('javascriptText');
}else{
    document.getElementById("jsCode").value="<script>\n\n</script>";
}
let htmlTextCde=document.getElementById("htmlCode");
htmlTextCde.addEventListener('input',(e)=>{
    window.localStorage.setItem('htmlText',e.target.value)

    
})
let cssCode=document.getElementById("cssCode");
cssCode.addEventListener('input',(e)=>{
    window.localStorage.setItem('cssText',e.target.value)

})
let jsCode=document.getElementById("jsCode");
jsCode.addEventListener('input',(e)=>{
    window.localStorage.setItem('javascriptText',e.target.value)

})


function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}

