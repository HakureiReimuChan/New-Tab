function readTxt() {
    $.get('txt/blog1.txt',function(data) {    
        var lines = data.split("\n");
    
        $.each(lines,function(i, v) {
            console.log(v);
        });
    });
}

document.getElementById("txt").textContent = readTxt()