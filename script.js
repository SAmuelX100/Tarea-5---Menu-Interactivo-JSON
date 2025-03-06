document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.json")
        .then(response => response.json())
        .then(data => {
            const menuList = document.getElementById("menu-list");
            data.menu.forEach(item => {
                let listItem = document.createElement("li");
                let link = document.createElement("a");
                link.href = item.enlace;
                link.textContent = item.nombre;
                listItem.appendChild(link);
                
                if (item.submenu) {
                    let subMenu = document.createElement("ul");
                    subMenu.classList.add("cascada");
                    item.submenu.forEach(sub => {
                        let subItem = document.createElement("li");
                        let subLink = document.createElement("a");
                        subLink.href = sub.enlace;
                        subLink.textContent = sub.nombre;
                        subItem.appendChild(subLink);
                        subMenu.appendChild(subItem);
                    });
                    listItem.appendChild(subMenu);
                }
                
                menuList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error cargando el menú:", error));
});
