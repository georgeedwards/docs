function switchCodeBlock(lang) {
    console.log('Clicked');
    // js as default language
    lang = lang || 'n';
    // save language in session. you can also use local storage or cookies.
    sessionStorage.setItem('code-lang', lang);
    // hide all codeblocks
    $('.codeblock').hide();
    // and only display codeblocks with current language
    $('.codeblock.' + lang).show();
}


// executed when HTML document has been loaded
$(document).ready(function () {
    //setup the slider
    var currentLang = sessionStorage.getItem('code-lang');
    console.log(currentLang);
    if (currentLang === 'n') {
        $( "#first_toggle" ).click();
    } else if (currentLang === 'ng'){
        $( "#second_toggle" ).click();
    }
    // display default codeblock : ns
    switchCodeBlock(currentLang);


    // on click we switch to the selected language
    $('.button-code-selector').click(function () {
        var lang = $(this).data('lang');
        var currentLang = sessionStorage.getItem('code-lang');
        // language does not changed
        if (lang === currentLang) {
            return;
        }
        switchCodeBlock(lang);
    });

});