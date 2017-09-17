updateQuote = function() {
    var author, text;
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(quote) {
        // console.log(a);
        author = quote.quoteAuthor;
        text = quote.quoteText;
        console.log('test');
        $("#quote_text").fadeOut("slow", function(){
            $("#quote_text").html(text);
        });
        $("#quote_author").fadeOut("slow", function(){
            $("#quote_author").html('- '+author);
        });
        $("#quote_text").fadeIn("slow");
        $("#quote_author").fadeIn("slow");
        changeColor();
    });


}
$(".button-text").click(updateQuote);

colorSet = [
    [52, 34, 36],
    [119, 177, 169],
    [44, 62, 80],
    [71, 46, 50]
]

changeColor = function() {
    var color = "";
    var des_color = colorSet[Math.floor(Math.random() * colorSet.length)];
    for (var i = 0; i < des_color.length; i++) {
        color += des_color[i].toString(16)
    }
    console.log(color);
    colorFade('body', 'background', 'ece7b4', color, 25, 30);
    colorFade('fa-twitter', 'background', 'ece7b4', color, 25, 30);
    colorFade('button-text', 'background', 'ece7b4', color, 25, 30);
}
