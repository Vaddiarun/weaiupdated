const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
const log = document.getElementById("log");
const all = document.querySelectorAll(".tex");
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const t4 = document.querySelector(".t4");
const t5 = document.querySelector(".t5");
const t6 = document.querySelector(".t6");
const submenu = document.querySelectorAll(".sub-menu");
const menuhas = document.querySelectorAll(".menu-item-has-children");
const anchor = document.getElementById("anchor");

let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}

function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  menuMain.style.visibility = "hidden";
  const menuTitle =
    hasChildren.querySelector(".i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  console.log(menuTitle);
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menuMain.style.visibility = "visible";
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};

let lastScrollTop = 0;
const navbar = document.querySelector(".header");
const nav = document.getElementById("header");
const contact = document.getElementById("contact");
const search = document.getElementById("search");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (active !== 0) {
  } else if (active === 0) {
    if (scrollTop === 0) {
      navbar.style.backgroundColor = "black";
      log.style.color = "white";
      for (let i = 0; i < all.length; i++) {
        all[i].style.color = "white";
      }
      contact.style.color = "white";
      search.style.color = "white";
      anchor.style.color = "white";
    } else if (scrollTop > lastScrollTop) {
      navbar.style.display = "none";
    } else {
      navbar.style.top = "0";
      navbar.style.display = "block";
      navbar.style.backgroundColor = "white";
      log.style.color = "black";
      for (let i = 0; i < all.length; i++) {
        all[i].style.color = "black";
      }
      contact.style.color = "black";
      search.style.color = "black";
      anchor.style.color = "black";
    }

    lastScrollTop = scrollTop;
  }
});

let active = 0;

for (let i = 0; i < submenu.length; i++) {
  submenu[i].addEventListener("scroll", (event) => {}, { passive: false });
}

$(document).ready(function () {
  $(nav).mouseover(function () {
    $(nav).css("background-color", "white");
    $(log).css("color", "black");
    for (let i = 0; i < all.length; i++) {
      $(all[i]).css("color", "black");
    }
    $(contact).css("color", "black");
    $(search).css("color", "black");
    $(anchor).css("color", "black");
  });
  $(navbar).mouseout(function () {
    $(nav).css("background-color", "black");
    $(log).css("color", "white");
    for (let i = 0; i < all.length; i++) {
      $(all[i]).css("color", "white");
    }
    $(contact).css("color", "white");
    $(search).css("color", "white");
    $(anchor).css("color", "white");
  });
});

var x = window.innerWidth;
if (x >= 992) {
  $(document).ready(function () {
    $(t1).mouseover(function () {
      $(t1).css("border-bottom", "3px solid black");
      $(t2).css("border-bottom", "none");
      $(t3).css("border-bottom", "none");
      $(t4).css("border-bottom", "none");
      $(t5).css("border-bottom", "none");
      $(t6).css("border-bottom", "none");
    });
    $(t1).mouseout(function () {
      $(t1).css("border-bottom", "none");
    });
  });

  $(document).ready(function () {
    $(t2).mouseover(function () {
      $(t1).css("border-bottom", "none");
      $(t2).css("border-bottom", "3px solid black");
      $(t3).css("border-bottom", "none");
      $(t4).css("border-bottom", "none");
      $(t5).css("border-bottom", "none");
      $(t6).css("border-bottom", "none");
    });
    $(t2).mouseout(function () {
      $(t2).css("border-bottom", "none");
    });
  });
  $(document).ready(function () {
    $(t3).mouseover(function () {
      $(t1).css("border-bottom", "none");
      $(t2).css("border-bottom", "none");
      $(t3).css("border-bottom", "3px solid black");
      $(t4).css("border-bottom", "none");
      $(t5).css("border-bottom", "none");
      $(t6).css("border-bottom", "none");
    });
    $(t3).mouseout(function () {
      $(t3).css("border-bottom", "none");
    });
  });
  $(document).ready(function () {
    $(t4).mouseover(function () {
      $(t1).css("border-bottom", "none");
      $(t2).css("border-bottom", "none");
      $(t3).css("border-bottom", "none");
      $(t4).css("border-bottom", "3px solid black");
      $(t5).css("border-bottom", "none");
      $(t6).css("border-bottom", "none");
    });
    $(t4).mouseout(function () {
      $(t4).css("border-bottom", "none");
    });
  });
  $(document).ready(function () {
    $(t5).mouseover(function () {
      $(t1).css("border-bottom", "none");
      $(t2).css("border-bottom", "none");
      $(t3).css("border-bottom", "none");
      $(t4).css("border-bottom", "none");
      $(t5).css("border-bottom", "3px solid black");
      $(t6).css("border-bottom", "none");
    });
    $(t5).mouseout(function () {
      $(t5).css("border-bottom", "none");
    });
  });
  $(document).ready(function () {
    $(t6).mouseover(function () {
      $(t1).css("border-bottom", "none");
      $(t2).css("border-bottom", "none");
      $(t3).css("border-bottom", "none");
      $(t4).css("border-bottom", "none");
      $(t5).css("border-bottom", "none");
      $(t6).css("border-bottom", "3px solid black");
    });
    $(t6).mouseout(function () {
      $(t6).css("border-bottom", "none");
    });
  });
}

$(document).ready(function () {
  for (let i = 0; i < menuhas.length; i++) {
    $(menuhas[i]).mouseover(function () {
      active = i + 1;
    });
    $(menuhas[i]).mouseout(function () {
      active = 0;
    });
  }
});


const hover1=document.getElementById("hov-button1");
const hover2=document.getElementById("hov-button2");
const hover3=document.getElementById("hov-button3");
const hover4=document.getElementById("hov-button4");

const dis1=document.querySelector(".prove-toggle1");
const dis2=document.querySelector(".prove-toggle2");
const dis3=document.querySelector(".prove-toggle3");
const dis4=document.querySelector(".prove-toggle4");
dis1.style.display="none";
dis2.style.display="none";
dis3.style.display="none";
dis4.style.display="none";

$(document).ready(function () {
    $(hover1).mouseover(function () {
      dis1.style.display="block";
      dis1.style.position="absolute";
      dis1.style.top="-300px";
      dis1.style.width="350px";
      dis2.style.display="none";
      dis3.style.display="none";
      dis4.style.display="none";
    });
    $(hover1).mouseout(function () {
      dis1.style.display="none";
    });
});

$(document).ready(function () {
  $(hover4).mouseover(function () {
    dis4.style.display="block";
    dis4.style.position="absolute";
    dis4.style.top="-300px";
    dis4.style.width="350px";
  });
  $(hover4).mouseout(function () {
    dis4.style.display="none";
  });
});

$(document).ready(function () {
  $(hover2).mouseover(function () {
    dis2.style.position="absolute";
    dis2.style.top="-300px";
    dis2.style.display="block";
    dis2.style.width="350px";
  });
  $(hover2).mouseout(function () {
    dis2.style.display="none";
  });
});

$(document).ready(function () {
  $(hover3).mouseover(function () {
    dis3.style.display="block";
    dis3.style.position="absolute";
    dis3.style.width="350px";
    dis3.style.top="-300px";
  });
  $(hover3).mouseout(function () {
    dis3.style.display="none";
  });
});

// $(document).ready(function () {
//   $(hover2).mouseover(function () {
//     dis1.style.display="none";
//     dis2.style.display="block";
//     dis3.style.display="none";
//     dis4.style.display="none";
//   });
//   $(hover1).mouseout(function () {
//     dis1.style.display="none";
//   });
// });

// $(document).ready(function () {
//   $(hover1).mouseover(function () {
//     dis1.style.display="block";
//     dis2.style.display="none";
//     dis3.style.display="none";
//     dis4.style.display="none";
//   });
//   $(hover1).mouseout(function () {
//     dis1.style.display="none";
//   });
// });

// $(document).ready(function () {
//   $(hover1).mouseover(function () {
//     dis1.style.display="block";
//     dis2.style.display="none";
//     dis3.style.display="none";
//     dis4.style.display="none";
//   });
//   $(hover1).mouseout(function () {
//     dis1.style.display="none";
//   });
// });