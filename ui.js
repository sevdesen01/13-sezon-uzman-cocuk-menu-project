// Html kısmındaki elemanları js kısmına çek
const uiElements = {
    menuArea: document.querySelector(".menu-area"),
    buttons: document.querySelectorAll(".filter-btn"),
    // querySelector metodu belirtilen seçiciye sahip birden fazla eleman varsa bunlardan ilkini alır bu yüzden eğer aynı seçiciye sahip birden fazla eleman varsa querySelector yerine querySelectorAll metodu kullanılır.
};
//Menu elemanlarını render eden yani son haline getiren fonksiyon
const renderMenu = (menu) => {
    //menu'ye dön ve her bir menü için bir kart html'i oluştur
    const menuHtml = menu 
    .map(
        (menuItem) =>  `  <div class="card">

      <div class="card-image">
       <img src="${menuItem.img}" alt="menu-image" />
       </div>
           
        <div class="card-info">
          
          <div class="top">
            <h3>${menuItem.title}</h3>
            <p>$${(menuItem.price * 5).toFixed(2)}</p>
          </div>
          
          <p class="desc">
          ${menuItem.desc}
          </p>
        </div>
      </div>`
    )
    .join("");
    //Oluşturulan kartları arayüze ekle yani menu-area'nın html'ini belirle
    uiElements.menuArea.innerHTML = menuHtml;
};

export {uiElements,renderMenu};