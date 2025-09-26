// === Product List with 30 items ===
const products = [
  { name: "Rice (5kg bag)", desc: "Staple food for many families.", stock: 8 },
  { name: "Beans (2kg bag)", desc: "Rich in protein, essential for nutrition.", stock: 8 },
  { name: "Maize Flour (2kg bag)", desc: "Used to make staple meals like ugali.", stock: 8 },
  { name: "Cooking Oil (3L)", desc: "Basic ingredient for preparing meals.", stock: 8 },
  { name: "Sugar (2kg bag)", desc: "For tea and other uses.", stock: 8 },
  { name: "Salt (1kg bag)", desc: "Essential seasoning for cooking.", stock: 8 },
  { name: "Tea Leaves (500g)", desc: "Warm drinks for families.", stock: 8 },
  { name: "Bread (Loaf)", desc: "Quick meal for breakfast.", stock: 8 },
  { name: "Milk (1L pack)", desc: "Nutritional drink for children.", stock: 8 },
  { name: "Cooking Gas Voucher", desc: "Helps families cook safely.", stock: 8 },
  { name: "Vegetables Basket", desc: "Fresh greens for healthy meals.", stock: 8 },
  { name: "Fruits Basket", desc: "Boosts vitamins & immunity.", stock: 8 },
  { name: "Sanitary Pads Pack", desc: "Hygiene for women & girls.", stock: 8 },
  { name: "Soap Bars", desc: "For hygiene and cleanliness.", stock: 8 },
  { name: "Toothpaste & Brushes", desc: "Oral care kits.", stock: 8 },
  { name: "Clothes (Adults)", desc: "For families in need.", stock: 8 },
  { name: "Clothes (Children)", desc: "Comfortable clothing for kids.", stock: 8 },
  { name: "Blankets", desc: "Warmth for cold nights.", stock: 8 },
  { name: "Mosquito Nets", desc: "Protection from malaria.", stock: 8 },
  { name: "Shoes (Adults)", desc: "Durable footwear for adults.", stock: 8 },
  { name: "Shoes (Children)", desc: "Footwear for growing children.", stock: 8 },
  { name: "School Supplies Kit", desc: "Books, pencils, pens for students.", stock: 8 },
  { name: "Cooking Utensils", desc: "Pots, pans, essential items.", stock: 8 },
  { name: "Detergent Powder", desc: "Washing clothes and cleaning.", stock: 8 },
  { name: "Baby Formula", desc: "Nutrition for infants.", stock: 8 },
  { name: "Diapers Pack", desc: "For infants and toddlers.", stock: 8 },
  { name: "First Aid Kit", desc: "Basic medical supplies.", stock: 8 },
  { name: "Wheelchair", desc: "Mobility aid for the disabled.", stock: 8 },
  { name: "Water Bottles (Pack)", desc: "Clean drinking water.", stock: 8 },
  { name: "Bedding Sets", desc: "Complete bedding for families.", stock: 8 }
];

// === Bible messages ===
const donorMessages = [
  "Proverbs 19:17 - Whoever is kind to the poor lends to the Lord.",
  "Luke 6:38 - Give, and it will be given to you.",
  "Hebrews 13:16 - Do not forget to do good and share with others.",
  "2 Corinthians 9:7 - God loves a cheerful giver.",
  "Matthew 25:35 - I was hungry and you gave me something to eat.",
  "Acts 20:35 - It is more blessed to give than to receive.",
  "James 2:15-16 - Faith without works is dead.",
  "Isaiah 58:10 - If you spend yourselves in behalf of the hungry...",
  "Proverbs 22:9 - The generous will themselves be blessed.",
  "Luke 3:11 - Anyone who has food should share with the one who has none."
];

const requestMessages = [
  "Psalm 37:25 - The righteous have never been forsaken.",
  "Philippians 4:19 - God will meet all your needs.",
  "Matthew 6:31-33 - Seek first his kingdom, all will be given to you.",
  "Psalm 23:1 - The Lord is my shepherd; I lack nothing.",
  "Isaiah 41:10 - Do not fear, for I am with you.",
  "Deuteronomy 31:8 - He will never leave you nor forsake you.",
  "Psalm 34:10 - Those who seek the Lord lack no good thing.",
  "Matthew 7:7 - Ask and it will be given to you.",
  "Jeremiah 29:11 - Plans to prosper you and not to harm you.",
  "Romans 8:28 - All things work together for good."
];

// === Elements ===
const loginSection = document.getElementById("loginSection");
const donorSection = document.getElementById("donorSection");
const requestSection = document.getElementById("requestSection");

const loginDonorBtn = document.getElementById("loginDonor");
const loginRequesterBtn = document.getElementById("loginRequester");
const backToLogin1 = document.getElementById("backToLogin1");
const backToLogin2 = document.getElementById("backToLogin2");

const donorProducts = document.getElementById("donorProducts");
const requestProducts = document.getElementById("requestProducts");
const submitDonationBtn = document.getElementById("submitDonation");
const submitRequestBtn = document.getElementById("submitRequest");

const donorMessageDiv = document.getElementById("donorMessage");
const requestMessageDiv = document.getElementById("requestMessage");

let donorInterval, requestInterval;

// === Login actions ===
loginDonorBtn.addEventListener("click", () => {
  if (!document.getElementById("userName").value) return alert("Enter your name");
  if (!document.getElementById("userEmail").value) return alert("Enter your email");

  loginSection.classList.add("hidden");
  donorSection.classList.remove("hidden");
  renderDonorProducts();
  startRotatingMessages(donorMessages, donorMessageDiv);
});

loginRequesterBtn.addEventListener("click", () => {
  if (!document.getElementById("userName").value) return alert("Enter your name");
  if (!document.getElementById("userEmail").value) return alert("Enter your email");

  loginSection.classList.add("hidden");
  requestSection.classList.remove("hidden");
  renderRequestProducts();
  startRotatingMessages(requestMessages, requestMessageDiv);
});

backToLogin1.addEventListener("click", () => {
  donorSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
  clearInterval(donorInterval);
});

backToLogin2.addEventListener("click", () => {
  requestSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
  clearInterval(requestInterval);
});

// === Smooth fade rotating messages ===
function startRotatingMessages(messages, element) {
  let index = 0;
  element.textContent = messages[index];
  element.classList.add("show"); // start visible

  const intervalFn = () => {
    element.classList.remove("show");
    setTimeout(() => {
      index = (index + 1) % messages.length;
      element.textContent = messages[index];
      element.classList.add("show");
    }, 1000);
  };

  if (element === donorMessageDiv) {
    clearInterval(donorInterval);
    donorInterval = setInterval(intervalFn, 15000);
  } else {
    clearInterval(requestInterval);
    requestInterval = setInterval(intervalFn, 15000);
  }
}

// === Render donor products ===
function renderDonorProducts() {
  donorProducts.innerHTML = "";
  products.forEach((prod, index) => {
    donorProducts.innerHTML += `
      <div class="product-card">
        <h3>${prod.name}</h3>
        <p>${prod.desc}</p>
        <label for="donateQty${index}">Select Quantity:</label>
        <select id="donateQty${index}">
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10+</option>
        </select>
      </div>
    `;
  });
}

// === Render request products with stock ===
function renderRequestProducts() {
  requestProducts.innerHTML = "";
  products.forEach((prod, index) => {
    requestProducts.innerHTML += `
      <div class="product-card">
        <h3>${prod.name}</h3>
        <p>${prod.desc}</p>
        <p><strong>In Stock:</strong> ${prod.stock}</p>
        <label for="requestQty${index}">Request Quantity:</label>
        <select id="requestQty${index}">
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10+</option>
        </select>
      </div>
    `;
  });
}

// === Submit donation updates stock ===
submitDonationBtn.addEventListener("click", () => {
  products.forEach((prod, index) => {
    const qty = parseInt(document.getElementById(`donateQty${index}`).value);
    prod.stock += qty;
  });
  alert("Thank you for your donation! Stock updated.");
  renderRequestProducts();
});

// === Submit request reduces stock ===
submitRequestBtn.addEventListener("click", () => {
  products.forEach((prod, index) => {
    const qty = parseInt(document.getElementById(`requestQty${index}`).value);
    if (prod.stock >= qty) {
      prod.stock -= qty;
    }
  });
  alert("Your request has been placed! Stock updated.");
  renderRequestProducts();
});
