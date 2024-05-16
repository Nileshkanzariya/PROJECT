
function ravi() {
    var x = document.getElementById("np");

    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}

// ******************************************
np1_tag = document.getElementById('jk')
np2_tag = document.getElementById('dk')
// btn1 = document.getElementById('btn1')
b1_tag = document.getElementById('cg')
console.log(np1_tag)

function plase(y) {

    b1_tag.innerHTML = Number(np1_tag.value) + Number(np2_tag.value)

}

function xyz(y) {
    b1_tag.innerHTML = Number(np1_tag.value) - Number(np2_tag.value)

}
function xyz1(y) {
    b1_tag.innerHTML = Number(np1_tag.value) * Number(np2_tag.value)

}
function xyz2(y) {
    b1_tag.innerHTML = Number(np1_tag.value) % Number(np2_tag.value)

}
function xyz3(y) {
    b1_tag.innerHTML = Number(np1_tag.value) / Number(np2_tag.value)

}

/****************************************** */

lee1_tag = document.getElementById('nil1')
lee2_tag = document.getElementById('nil2')
lee3_tag = document.getElementById('nil3')
lee4_tag = document.getElementById('nil4')
lee5_tag = document.getElementById('nil5')
lee6_tag = document.getElementById('nil6')
lee7_tag = document.getElementById('nil7')
b_tag = document.getElementById('bold')
uk_tag = document.getElementById('bolder')

function result() {
    b_tag.innerHTML = Number(lee1_tag.value) + Number(lee2_tag.value) + Number(lee3_tag.value) + Number(lee4_tag.value) + Number(lee5_tag.value) + Number(lee6_tag.value) + Number(lee7_tag.value)

    uk_tag.innerHTML = Number(b_tag.innerHTML) * Number("100") / Number("350")
}
// ***********************************************


const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    navigation: {
        nextEl: ".next",
        prevEl: ".prev"
    },
    pagination: {
        el: ".pagination",
        clickable: true
    },
    autoplay: {
        enabled: true,
        delay: 5000
    },

});


