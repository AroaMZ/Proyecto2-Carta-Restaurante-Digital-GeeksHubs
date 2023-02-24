var dds = document.getElementsByClassName("dropdown");
for (var i = 0; i < dds.length; i++) {
    dds[i].setAttribute("id", "dropDown" + i);
    dds[i].setAttribute("onclick", "toogleDd(" + i + ");");
}
for (var i = 0; i < document.getElementsByClassName("drop").length; i++) {

    var dps = document.getElementsByClassName("drop")[i];
    dps.style.display = "none";
    var pid = dps.parentNode.id;
    dps.setAttribute("onclick", "ddAction(this);");
}
function toogleDd(ide) {
    var id = "dropDown" + ide;
    var dropd = document.getElementById(id);
    for (var i = 0; i < dropd.getElementsByClassName("drop").length; i++) {

        var ce = dropd.getElementsByClassName("drop")[i];
        if (ce.style.display == "none") {
            ce.style.display = "block";
            dropd.getElementsByClassName("dropMain")[0].style.backgroundColor = "#000";
        } else {
            ce.style.display = "none";
            dropd.getElementsByClassName("dropMain")[0].style.backgroundColor = "#000";
        }
    }
}
function ddAction(t) {

    var did = t.parentNode.id;
    var dd = document.getElementById(did);
    dd.getElementsByClassName("dropMain")[0].getElementsByClassName("dmtxt")[0].innerHTML = t.innerHTML;
    var ip = dd.getElementsByTagName("INPUT")[0];
    ip.value = t.innerHTML;
}
