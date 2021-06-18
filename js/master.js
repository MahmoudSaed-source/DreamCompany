let landding_image = document.querySelector(".landding-page");
let img_src = ["images/001.jpg", "images/002.jfif", "images/003.jpg", "images/004.jpg"
    , "images/005.png", "images/006.jpg"];

let icon_gear = document.querySelector(".icon");
let setting_box = document.querySelector(".setting_box");
let togel_icon = document.querySelector(".togel_icon");
let colors = document.querySelectorAll(".color_list li");
let title_option = document.querySelectorAll(".title_option");
let randomBackground = document.querySelectorAll(".random-background span");
let show_buletes = document.querySelectorAll(".Buletes-view span");
let getchoiesLs = localStorage.getItem("choies");
let abut_image = document.querySelector(".abut_image img");
let timerBackground_chang;
let data_Ls;
let master_background;
let main_color = localStorage.getItem("color");


// start setting box
// toggle icon open setting box

            // remove and add class active to any element
            function ActiveElement(ev) {
                        ev.target.parentElement.querySelectorAll(".active").forEach(btn => {
                    btn.classList.remove("active")
                    })
                    ev.target.classList.add("active")
             }

togel_icon.addEventListener("click", function (e) {
            e.stopPropagation();
    icon_gear.classList.toggle("fa-spin");
    setting_box.classList.toggle("open_setting");

});
                    /*
                    click any wear to close setting box 
                    */
document.addEventListener("click", (e) => {
    if (e.target !== togel_icon && e.target !== setting_box) {
        if (setting_box.classList.contains("open_setting")) {
            icon_gear.classList.toggle("fa-spin");
    setting_box.classList.toggle("open_setting");
        }
    }
})
setting_box.onclick = (e) => {
    e.stopPropagation
}
// end togel_icon
//start chang color from color list

colors.forEach(li => {

    li.addEventListener("click", (e) => {
          // chang image  in section abut_us
        
        abut_image.src = e.target.dataset.src
        
        //set color in main color
        document.documentElement.style.setProperty("--main--color", e.target.dataset.color);

        title_option.forEach(elm => {
            elm.style.color = e.target.dataset.color;
        })
        ActiveElement(e);  //remove and add class active

               // set colors in local storage

        localStorage.setItem("color", e.target.dataset.color);


    })
})


// end chang color from color list

// start chang img in abut_us with  main color
        colors.forEach(color => {
                        if (color.dataset.color === main_color) {
                            abut_image.src = color.dataset.src;
                        }
        })
// end chang img in abut_us with  main color


// check  colors in  localStorage  &&&    get color and class active from localStorage

if (main_color !== null) {

    document.documentElement.style.setProperty("--main--color", main_color)

    // chang color h4 title form localStorage

    title_option.forEach(elm => {
        elm.style.color = main_color;
    })

    // give li class active from localStorage 

    colors.forEach(col => {
        col.classList.remove("active");
        if (col.dataset.color === main_color) {
            col.classList.add("active");
        }
    })
}


// start random_image 
//loop on all span 
randomBackground.forEach(ran => {
    //  add event click to add and remove class active on the span

    ran.addEventListener("click", (e) => {
        ActiveElement(e);
    })
})
                 

//end setting box

// start landding page background-img


function changbackground() {
    timerBackground_chang = setInterval(function () {

        let rendom_img = (Math.floor(Math.random() * img_src.length));
        landding_image.style.backgroundImage = `url(${img_src[rendom_img]})`

    }, 2000);

}
changbackground();
                                // end landding page background-img

                        

                                // start get choies from local storage

if (getchoiesLs === "yas") {
    changbackground();

} else {
    clearInterval(timerBackground_chang);

}
randomBackground.forEach(span => {
    span.classList.remove("active")
    if (span.dataset.choies === getchoiesLs) {
        span.classList.add("active")
    }
});
// end  get choies from local storage

randomBackground.forEach(span => {

    span.addEventListener("click", (e) => {

        if (e.target.dataset.choies === "yas") {
            changbackground();
        } if (e.target.dataset.choies === "no") {
            clearInterval(timerBackground_chang);
            master_background = landding_image.style.backgroundImage = `url(${img_src[3]})`;
        }
        // set choies in localStorage

        data_Ls = e.target.dataset.choies;
        localStorage.setItem("choies", data_Ls)
        // end  choies in localStorage
    })
})
//start check master choies from localStorage

if (localStorage.getItem("choies") === "no") {
    master_background = landding_image.style.backgroundImage = `url(${img_src[3]})`;
}

// end  check master choies from localStorage  

//  end choies if clinet need chang backgroundImage or  no
   // start show or display buletes
let Buletes_container = document.querySelector(".buletes");
let ShowInLS = localStorage.getItem("show");
show_buletes.forEach(bulet => {
   
    bulet.addEventListener("click", (e) => {
        
       ActiveElement(e);

        if (e.target.dataset.show === "yas") {    
            Buletes_container.style.display = "block"
        
        } if (e.target.dataset.show === "no") {
            Buletes_container.style.display = "none"
          
        }
        localStorage.setItem("show", e.target.dataset.show)
        
    })  
})
  //  giv button class active if it in the localStorage

show_buletes.forEach(btn => {
    btn.classList.remove("active")
    if (btn.dataset.show === ShowInLS) {
        if (ShowInLS === "yas") {    
            Buletes_container.style.display = "block"
            
        } if (ShowInLS === "no") {
            Buletes_container.style.display = "none"
        }
        btn.classList.add("active");
    }
})
                    // end show or display buletes
                    // end setting box
// start scroll window to our skilles to make anmation
let our_skilles = document.querySelector(".skilles");

window.onscroll = function () {
    let skillesOfSetTOP = our_skilles.offsetTop;
    let outerHeight = our_skilles.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowscrolltop = this.pageYOffset;

    if (windowscrolltop > (skillesOfSetTOP + outerHeight - windowHeight)) {

        let skilles_div = document.querySelectorAll(".box_skilles .progress_skilles div");
        skilles_div.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    } else if (windowscrolltop > (skillesOfSetTOP + outerHeight - windowHeight)) {
        skill.style.width = "0px";
    }
}
// end scroll window to our skilles to make anmation

// start show image in new window
let img_galary = document.querySelectorAll(".galary img");
img_galary.forEach(img => {
    img.addEventListener("click", (e) => {
        // creat container view image
        let container_div = document.createElement("div")
        container_div.className = 'div-container';
        document.body.appendChild(container_div);
        //      creat overleay 
        let overleay = document.createElement("div");
        overleay.className = "overleay2";
        container_div.appendChild(overleay);

        // creat container to img
        let container_img = document.createElement("div");
        container_img.className = "container_img";
        container_div.appendChild(container_img);

        // heading of image
        if (img.alt !== null) {
            let heading_title = document.createElement("h3");
            let title = document.createTextNode(img.alt);
            heading_title.appendChild(title)
            container_img.appendChild(heading_title);
            console.log(img.alt)

        }
        // creat src img to push in container_img

        let image_src = document.createElement("img");

        image_src.src = e.target.src;

        container_img.appendChild(image_src);

        // creat close sin
        let close_span = document.createElement("div");
        close_span.className = 'close_span';
        close_span.innerHTML = `<i class="fas fa-times close"></i>`
        container_img.appendChild(close_span)

        // close the container_div imge view
        let close = document.querySelector(".close_span .close")
        close.addEventListener("click", () => {
            container_div.remove();
        })


    });
});
        // end show image in new window

        // start nav-buletes
let allBulets = document.querySelectorAll(".buletes .bulet")

            // loop on allBulets
allBulets.forEach(bulet => {   
     bulet.addEventListener("click", (e) => {
        
        ActiveElement(e);
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        })
    })
})
                        // end nav-buletes

                        // start reset all option 
 document.querySelector(".Reset_Option").onclick= function () {
    localStorage.clear();
    window.location.reload();
}                    
                        // end reset all option 
                        // start toggle menu
let toggleBtn = document.querySelector(".toggle-mnenu");
let tlinkes = document.querySelector(".links")
let tlinkes_a = document.querySelector(".links a")
toggleBtn.onclick = function (e) {
    e.stopPropagation();
    this.classList.toggle("menu-active");
    tlinkes.classList.toggle("open")
};
                    /*
                    click any wear to close menu linkes 
                    */
document.addEventListener("click", (e) => {
    if (e.target != toggleBtn && e.target != tlinkes) {
        if (tlinkes.classList.contains("open")) {
           toggleBtn.classList.toggle("menu-active");
           tlinkes.classList.toggle("open")
       }
        
    };
})

tlinkes.onclick = (e) => {
    e.stopPropagation();
};

tlinkes_a.onclick = function (e) {
    e.stopPropagation();
};

                        // end toggle menu