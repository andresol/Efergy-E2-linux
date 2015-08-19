$( document ).ready(function() {
dir = "http://www.sollie.info/energy/";
var fileextension = ".png";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //Lsit all png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(dir, "").replace("http:///", "");
            $("body").prepend($("<img src=" + dir + filename + "></img>"));
        });
    }
});
});
