const items = [
  {
    id: 1,
    title: "Charity-Website  ",
    categary: "Responcive",
    link: "https://github.com/Msaadkamal/Project01-StaticWebsite-",
    Img: "Image/pic01.PNG",
  },
  {
    id: 2,
    title: "Multi-page-Website",
    categary: "Responcive",
    link: "https://github.com/Msaadkamal/Project01-Responcive-website",
    Img: "Image/pic04.PNG",
  },
  {
    id: 3,
    title: " BooksStore-Website",
    categary: "Responcive",
    Img: "Image/pic12.PNG",
    link: "https://github.com/Msaadkamal/Bootstrap-Project03",
  },
  {
    id: 4,
    title: "FaceBook-Clone",
    categary: "Responcive",
    Img: "Image/pic07.PNG",
    link: "https://github.com/Msaadkamal/project02-ResponsiveWebsite",
  },
  {
    id: 5,
    title: "Travel-Website",
    categary: "Responcive",
    Img: "Image/pic09.PNG",
    link: " https://github.com/Msaadkamal/Project04-Responcive-Website",
  },
  {
    id: 6,
    title: " DashBoard",
    categary: "Responcive",
    Img: "Image/pic13.PNG",
    link: "https://github.com/Msaadkamal/Bootstrap-Project04",
  },
  {
    id: 7,
    title: "Cooking-Website",
    categary: "Responcive",
    Img: "Image/pic06.PNG",
    link: "https://github.com/Msaadkamal/project05-ResponciveWebsite",
  },
  {
    id: 8,
    title: "Multiplication ",
    categary: "Javascript",
    Img: "Image/pic23.PNG",
    link: "https://github.com/Msaadkamal/Project13-JavaScript",
  },
  {
    id: 9,
    title: "Calculator ",
    categary: "Javascript",
    Img: "Image/pic29.PNG",
    link: "https://github.com/Msaadkamal/Project06-JavaScript",
  },
  {
    id: 10,
    title: "Our-Reviews ",
    categary: "Javascript",
    Img: "Image/pic20.PNG",
    link: "https://github.com/Msaadkamal/Project17-JavaScript",
  },
  {
    id: 11,
    title: "simple-Calculation ",
    categary: "Javascript",
    Img: "Image/pic28.PNG",
    link: "https://github.com/Msaadkamal/Project05-JavaScript",
  },
  {
    id: 12,
    title: "Counter ",
    categary: "Javascript",
    Img: "Image/pic27.PNG",
    link: "https://github.com/Msaadkamal/Project07-JavaScript",
  },
  {
    id: 13,
    title: "Rendom-Image",
    categary: "Javascript",
    Img: "Image/pic34.PNG",
    link: "https://github.com/Msaadkamal/Project15-JavaScript",
  },
  {
    id: 14,
    title: "Tab-Section-Project",
    categary: "Javascript",
    Img: "Image/pic17.PNG",
    link: "https://github.com/Msaadkamal/project20-JavScript",
  },
  {
    id: 15,
    title: "Our-Menue",
    categary: "Javascript",
    Img: "Image/pic14.PNG",
    link: "https://github.com/Msaadkamal/Project17-JavaScript",
  },
  {
    id: 16,
    title: "Running-Car",
    categary: "Javascript",
    Img: "Image/pic19.PNG",
    link: "https://github.com/Msaadkamal/Project18-JavaScript",
  },
  {
    id: 17,
    title: "FoodPlace-Website",
    categary: "Responcive",
    Img: "Image/pic03.PNG",
    link: "https://github.com/Msaadkamal/project04-JavaScript",
  },
  {
    id: 13,
    title: "Character-Counter",
    categary: "Javascript",
    Img: "Image/pic21.PNG",
    link: "https://github.com/Msaadkamal/Project16-JavaScript",
  },
  {
    id: 13,
    title: "Heart-Animation",
    categary: "Javascript",
    Img: "Image/pic25.PNG",
    link: "https://github.com/Msaadkamal/Project09-Javascript",
  },
  {
    id: 13,
    title: "Todo App",
    categary: "Reactjs",
    Img: "Image/pic-36.PNG",
    link: "https://github.com/Msaadkamal/project03-Reactjs",
  },
  {
    id: 13,
    title: "Calcultor",
    categary: "Reactjs",
    Img: "Image/pic-37.PNG",
    link: "https://github.com/Msaadkamal/project01-Reactjs",
  },
  {
    id: 13,
    title: "Real TimeApp",
    categary: "Reactjs",
    Img: "Image/pic-38.PNG",
    link: "https://github.com/Msaadkamal/project02-Reactjs",
  },
];
const wholeItems = document.querySelector(".Portfolio");
const buttonE = document.querySelectorAll(".btn");
window.addEventListener("DOMContentLoaded", function () {
  Manue(items);
});

buttonE.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const categary = e.currentTarget.dataset.id;
    const manueCategary = items.filter((manuItem) => {
      if (manuItem.categary === categary) {
        return manuItem;
      }
    });
    if (categary === "all") {
      Manue(items);
    } else {
      Manue(manueCategary);
    }
  });
});
function Manue(manueItemsArr) {
  let displayItems = manueItemsArr.map((itm) => {
    return `
            <div class="campus-col  wraper">
                <img src="${itm.Img}" alt="NoShowImage">
                <div class="layer">
                    <h3>${itm.title}<br> <br> <a href="${itm.link}">Github</a></h3>
                </div>
            </div> `;
  });
  displayItems = displayItems.join("");
  wholeItems.innerHTML = displayItems;
}

// load more & Load less
$(document).ready(function () {
  $(".wraper").slice(0, 8).fadeIn();
  $(".load-more").click(function () {
    $(".wraper").slice(0, 20).fadeIn();
    $(this).fadeout();
  });
  $(".load-less").click(function () {
    $(".wraper").slice(0, 8).fadeOut();
    $(this).fadeout();
  });
});

// Scroll to Top
const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    totop.classList.add("active");
  } else {
    totop.classList.remove("active");
  }
});
