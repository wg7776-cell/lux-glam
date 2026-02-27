const productPrice = 600;

const slides = document.querySelectorAll(".slide");
let index = 0;

/* Slider Animation */
setInterval(()=>{
slides.forEach(s=>s.classList.remove("active"));
slides[index].classList.add("active");
index = (index + 1) % slides.length;
},3000);

/* Price + Shipping */
const wilayaSelect = document.getElementById("wilaya");
const shippingBox = document.querySelector(".shipping-box");
const shippingSpan = document.getElementById("shipping");
const totalSpan = document.getElementById("total");

function updateTotal(){
let shipping = parseInt(wilayaSelect.value) || 0;

if(wilayaSelect.value){
shippingBox.style.display="block";
shippingSpan.textContent = shipping;
}else{
shippingBox.style.display="none";
}

totalSpan.textContent = productPrice + shipping;
}

wilayaSelect.addEventListener("change",updateTotal);
updateTotal();

/* Submit */
document.getElementById("orderForm").addEventListener("submit",function(e){
e.preventDefault();

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const baladia = document.getElementById("baladia").value;
const address = document.getElementById("address").value;

const wilaya = wilayaSelect.options[wilayaSelect.selectedIndex].text;

const msg = `
🌿 SevenGreen

👤 ${name}
📞 ${phone}
🌍 ${wilaya}
🏠 ${baladia}
📍 ${address}

💰 المجموع: ${totalSpan.textContent} دج
`;

window.open(
`https://wa.me/213561430140?text=${encodeURIComponent(msg)}`
);

alert("🎉 شكراً لطلبك ❤️");
});