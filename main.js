import getMenu from "./api.js";
import { renderMenu, uiElements } from "./ui.js";

//Sayfa yüklendiğinde getMenu fonksiyonunu çalıştır
document.addEventListener("DOMContentLoaded",getMenu());

//addEventListener tekil elemanlara eklenir bu yüzden de uiElements.buttons içerisindeki elemanların hepsine teker teker erişip addEventListener eklemeliyiz
uiElements.buttons.forEach((button) => {
    button.addEventListener("click", async (e) => {
        //Tıklanılan elemanın içerisindeki category değerine eriş
        const selectedCategory = e.target.dataset.category;

        //Api'den menu elemanlarına eriş
        const menu = await getMenu();

        //Menu içerisinde seçili category'e ait elemanları al
        const filteredMenu = menu.filter(
            (item) => item.category == selectedCategory
        );

        //Filtrelenen elemanları arayüzde renderla. Seçili category all ise tüm hepsini renderla

        if(selectedCategory =="all"){
            //Seçili category all ise
            renderMenu(menu);
        } else{
            //Seçili category all haricinde bir kategori ise
            renderMenu(filteredMenu);
        }
    });
});