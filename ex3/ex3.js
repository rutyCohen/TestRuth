var printAttributes = function (targetString) {
    var rExp = /<([^> ]+)([^>]*)>/;
    var matches = targetString.match(rExp);
    console.log(matches[2]);
};
printAttributes('<div class="title responsive" id="title" style="width: 100%; height: 100%;">ABC</div>');
printAttributes('<a href="http://example.com">');
printAttributes('<div>');
