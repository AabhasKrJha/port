// change css stylesheet for different themes
function change_theme(theme){

    const theme_json = {
        light : "css/light-themes/default-light/theme.css",
        dark : "css/dark-themes/default-dark/theme.css",
        dim : "css/dark-themes/dim/theme.css",
        dark_red : "css/dark-themes/dark-red/theme.css",
        light_green : "css/light-themes/light-green-theme/theme.css"
    }

    var theme_css_sheet = document.getElementById("theme-sheet");
    // var theme_icon = document.getElementById(theme);

    

    if (theme === 'light'){
        theme_css_sheet.href = theme_json.light;
    } else if (theme === 'dark'){
        theme_css_sheet.href = theme_json.dark;
    } else if (theme === 'dim'){
        theme_css_sheet.href = theme_json.dim;
    } else if (theme === 'dark-red'){
        theme_css_sheet.href = theme_json.dark_red;
    } else if (theme === 'light-green'){
        theme_css_sheet.href = theme_json.light_green;
    };
    
};


// copy mailID
function copy_mail(){
    const mail = "aabhaskrjha@gmail.com";
    navigator.clipboard.writeText(mail);

    var copy_btn = document.getElementById('copy-btn');
    copy_btn.innerText = "Copied";
};