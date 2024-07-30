const database = [
  (Bugger = [
    {
      name: "Bugger",
      type: "(chicken)",
      imagePath: "",
      rate: "20%",
      portion: "(Regular)",
      code: "B002",
      stoke: 5,
      price: 1500.0,
      classname: "CardPicItemB1",
    },
    {
      name: "Bugger",
      type: "(fish)",
      imagePath: "",
      rate: "20%",
      portion: "(Regular)",
      code: "B003",
      stoke: 4,
      price: 1500.0,
      classname: "cardPicItemB2",
    },
    {
      name: "Bugger",
      type: "(mutton)",
      imagePath: "",
      rate: "20%",
      portion: "(Regular)",
      code: "B004",
      stoke: 8,
      price: 1500.0,
      classname: "cardPicItemB4",
    },
  ]),
  (Chicken = [
    {
      name: "Chicken",
      type: "(Kalukum)",
      rate: "5%",
      portion: "(Regular)",
      code: "C001",
      stoke: 2,
      price: 1500.0,
      classname: "CardPicItem3",
    },
    {
      name: "Chicken",
      type: "(Curry)",
      rate: "12%",
      portion: "(Regular)",
      code: "C002",
      stoke: 3,
      price: 500.0,
      classname: "CardPicItemC3",
    },
    {
      name: "Chicken",
      type: "(Devel)",
      rate: "10%",
      portion: "(Regular)",
      code: "C004",
      stoke: 8,
      price: 1000.0,
      classname: "CardPicItemC4",
    },
  ]),
  (Beverage = [
    {
      name: "Beverage",
      type: "(Beer)",
      classname: "CardPicItemBV4",
      rate: "11%",
      portion: "(300ml)",
      code: "Bv001",
      stoke: 5,
      price: 500.0,
    },
    {
      name: "Beverage",
      type: "(cider)",
      classname: "CardPicItemBV5",
      rate: "15%",
      portion: "(300ml)",
      code: "Bv002",
      stoke: 10,
      price: 520.0,
    },
    {
      name: "Beverage",
      type: "(Cocktails)",
      rate: "12%",
      portion: "(300ml)",
      code: "Bv003",
      stoke: 4,
      price: 400.0,
      classname: "CardPicItemBV6",
    },
  ]),
  (Submarine = [{}, {}, {}]),
];
let i = 0;

let card = "";

function Search() {
  let itemCard = document.getElementsByClassName("itemCard");
  let Searchvalue = document.getElementById("search").value;
  for (let i = 0; i < itemCard.length; i++) {
    itemCard[i].style.display = "none";
  }

  let itemcardrow = document.getElementById("itemCardRow");
  console.log(Bugger);

  switch (Searchvalue) {
    case "Bugger":
      Bugger.forEach((element) => {
        card += ` <div class="itemCard">
        <div class="cardPic">
          <div class="${element.classname}"></div>
        </div>

        <div class="cardDetails">
          <div class="rate">
            <p>${element.rate}</p>
            <div class="star"></div>
          </div>
          <div class="namePrce">
            <h3>${element.name}</h3>
            <p>${element.type}</p>
          </div>
          <div class="stoke">
            <span>Code</span>
            <span> | </span>
            <span>Stoke</span>
          </div>
          <div class="de">
            <span>${element.code}</span>

            <span>${element.stoke}</span>
          </div>
          <div class="line"></div>
          <div class="price">
            <p>${element.price}</p>
            <div class="plusIcon" onclick="addcart()"></div>
          </div>
        </div>
      </div>`;

        itemcardrow.innerHTML = card;
      });
      break;
    case "Chicken":
      Chicken.forEach((element) => {
        card += ` <div class="itemCard">
        <div class="cardPic">
          <div class="${element.classname}"></div>
        </div>

        <div class="cardDetails">
          <div class="rate">
            <p>${element.rate}</p>
            <div class="star"></div>
          </div>
          <div class="namePrce">
            <h3>${element.name}</h3>
            <p>${element.type}</p>
          </div>
          <div class="stoke">
            <span>Code</span>
            <span> | </span>
            <span>Stoke</span>
          </div>
          <div class="de">
            <span>${element.code}</span>

            <span>${element.stoke}</span>
          </div>
          <div class="line"></div>
          <div class="price">
            <p>${element.price}</p>
            <div class="plusIcon" onclick="addcart()"></div>
          </div>
        </div>
      </div>`;
        itemcardrow.innerHTML = card;
      });
      break;
    case "Beverage":
      Beverage.forEach((element) => {
        card += ` <div class="itemCard">
        <div class="cardPic">
          <div class="${element.classname}"></div>
        </div>

        <div class="cardDetails">
          <div class="rate">
            <p>${element.rate}</p>
            <div class="star"></div>
          </div>
          <div class="namePrce">
            <h3>${element.name}</h3>
            <p>${element.type}</p>
          </div>
          <div class="stoke">
            <span>Code</span>
            <span> | </span>
            <span>Stoke</span>
          </div>
          <div class="de">
            <span>${element.code}</span>

            <span>${element.stoke}</span>
          </div>
          <div class="line"></div>
          <div class="price">
            <p>${element.price}</p>
            <div class="plusIcon" onclick="addcart()"></div>
          </div>
        </div>
      </div>`;
        itemcardrow.innerHTML = card;
      });
  }
}

function myFunc() {
  window.location.href = "index.html";
}
function myFunc1() {
  window.location.href = "order.html";
}
function myFunc2() {
  window.location.href = "customer.html";
}
function myFunc3() {
  window.location.href = "http://127.0.0.1:5500/report.html";
}
function myFunc4() {
  window.location.href = "http://127.0.0.1:5500/item.html";
}

function addcart() {
  window.location.href = "http://127.0.0.1:5500/card.html";
}

function validatePhoneNumber() {
  // Get and trim phone number input
  const phoneNumber = document.getElementById("CustomerPhone").value.trim();

  // Regex pattern for 10-digit phone number
  const pattern = /^\d{10}$/;

  // Validate phone number and update message
  const isValid = pattern.test(phoneNumber);
  document.getElementById("phoneValidationMsg").textContent = isValid
    ? ""
    : "Please enter a valid 10-digit phone number.";

  // Return validation status
  return isValid;
}

function isComplete() {
  const customerId = document.getElementById("customerId").value.trim();

  const pattern = /^\d{6}$/;

  const isValid = pattern.test(customerId);
  document.getElementById("errormessage").textContent = isValid
    ? ""
    : "Please enter a valid  digit 6-digit number list.";

  // Return validation status
  return isValid;
}

function AddCart(x) {
  switch (x) {
    case "one":
      let pic = document.getElementById("ONE").style.backgroundImage;
      console.log("hello");
      break;
  }
}

AddCart("one");
