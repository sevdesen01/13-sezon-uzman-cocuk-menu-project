import { renderMenu } from "./ui.js";

//Api'den gelen verileri alan fonksiyon
const getMenu = async () => {
    //Api'a istek at
    const response = await fetch("../db.json");

    //Api'den gelen json veriyi js nesnesine çevirme
    const data = await response.json();

    //Menu elemanlarını bir değişkene aktarma
    const menuItems = data.menu;

    //Menu elemanları için birerksart oluşturacak fonksiyon
    renderMenu(menuItems);

    //Filtreleme kısmı için menuItems'ı return etme
    return menuItems;
};

export default getMenu;