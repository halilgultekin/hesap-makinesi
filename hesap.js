let butonlar = document.querySelectorAll('.buton');
let ekran = document.querySelector('#ekran');
let sayi = "";
let deger = "";
let tus = "";
let islem = null;
sonuc = 0;


function hesapla()
{
    sonuc =eval( deger + islem + sayi);   

    sayi = sonuc;
    islem = null;
    ekran.innerHTML = sonuc;
}

butonlar.forEach((buton) => {
    buton.addEventListener('click', () => {
        tus = buton.innerHTML;

        if (tus == "=" && islem != null) {
            hesapla()
        }
        else {
            if (tus == "+" || tus == "-" || tus == "*" || tus == "/") {
                islem = tus;
                deger = sayi;
                sayi = "";
            }
            else {
                if (tus == "CE") { // eğer silme tuşuna basılmışsa 
                    sayi = "";
                    ekran.innerHTML = "0";
                } else { //değilse , eğer silme tuşuna basılmamışsa
                    if (sayi.length < 9) {
                        sayi = sayi + tus; //tuşlar birleştirilerek sayı oluşturuluyor.
                        ekran.innerHTML = sayi; // sayı ekrana yazılıyor
                    }

                }

            }
        }








        console.log('tus :>> ', tus);
        console.log('sayi :>> ', sayi);
        console.log('islem :>> ', islem);
        console.log('deger :>> ', deger);
    });
});

