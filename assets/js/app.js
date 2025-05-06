//aos.js init sayfayı kaydırırken animasyonların calısması ıcın cdn lınkınden sonra bu ınıt komutunu cagırmak gerekıyor
AOS.init({
    once: true, //bu ozellıgı true olarak ayarlamadıgımızda her scroll yaptıgımızda anımasyonlar tekrar tekrar calısır. Bu sekılde sadece tek sefer asagı kaydırırken calısıyor
});