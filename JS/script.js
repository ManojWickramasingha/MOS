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
    },
  ]),
  (Chicken = [
    {
      name: "Chicken",
      type: "(Kalukum)",
      imagePath: "imges/bugger01-removebg.png",
      rate: "5%",
      portion: "(Regular)",
      code: "C001",
      stoke: 2,
      price: 1500.0,
    },
    {
      name: "Chicken",
      type: "(Curry)",
      imagePath: "imges/bugger01-removebg.png",
      rate: "12%",
      portion: "(Regular)",
      code: "C002",
      stoke: 3,
      price: 500.0,
    },
    {
      name: "Chicken",
      type: "(Devel)",
      imagePath: "imges/bugger01-removebg.png",
      rate: "10%",
      portion: "(Regular)",
      code: "C004",
      stoke: 8,
      price: 1000.0,
    },
  ]),
  (Beverage = [
    {
      name: "Beverage",
      type: "(Watermelon)",
      imagePath: "imges/bugger01-removebg.png",
      rate: "11%",
      portion: "(300ml)",
      code: "Bv001",
      stoke: 5,
      price: 500.0,
    },
    {
      name: "Beverage",
      type: "(Avecardo)",
      imagePath: "imges/bugger01-removebg.png",
      rate: "15%",
      portion: "(300ml)",
      code: "Bv002",
      stoke: 10,
      price: 520.0,
    },
    {
      name: "Beverage",
      type: "(Fulooda)",
      imagePath: "imges/bugger01-removebg.png",
      rate: "12%",
      portion: "(300ml)",
      code: "Bv003",
      stoke: 4,
      price: 400.0,
    },
  ]),
  (Submarine = [{}, {}, {}]),
];
let i = 0;

let card = `
        <div class="cardPic">
          <div class="CardPicItem" id="one"></div>
        </div>

        <div class="cardDetails">
          <div class="rate">
            <p>15%</p>
            <div class="star"></div>
          </div>
          <div class="namePrce">
            <h3>Bugger</h3>
            <p>(Regular)</p>
          </div>
          <div class="stoke">
            <span>Code</span>
            <span> | </span>
            <span>Stoke</span>
          </div>
          <div class="de">
            <span>B01</span>

            <span>7</span>
          </div>
          <div class="line"></div>
          <div class="price">
            <p>RS.1,500.00</p>
            <div class="plusIcon"></div>
          </div>
        </div>
                `;

let card1 = `<div class="cardPic">
          <div class="CardPicItem3"></div>
        </div>

        <div class="cardDetails">
          <div class="rate">
            <p>16 %</p>
            <div class="star"></div>
          </div>
          <div class="namePrce">
            <h3>RosChicken</h3>
            <p>(Full)</p>
          </div>
          <div class="stoke">
            <span>Code</span>
            <span> | </span>
            <span>Stoke</span>
          </div>
          <div class="de">
            <span>C01</span>

            <span>10</span>
          </div>
          <div class="line"></div>
          <div class="price">
            <p>RS.2,000.00</p>
            <div class="plusIcon"></div>
          </div>
        </div>`;

let card2 = `<div class="cardPic">
        <div class="CardPicItem4"></div>
      </div>

      <div class="cardDetails">
        <div class="rate">
          <p>16 %</p>
          <div class="star"></div>
        </div>
        <div class="namePrce">
          <h3>RosChicken</h3>
          <p>(Full)</p>
        </div>
        <div class="stoke">
          <span>Code</span>
          <span> | </span>
          <span>Stoke</span>
        </div>
        <div class="de">
          <span>C01</span>

          <span>10</span>
        </div>
        <div class="line"></div>
        <div class="price">
          <p>RS.2,000.00</p>
          <div class="plusIcon"></div>
        </div>
      </div>`;

function Search() {
  let search = document.getElementById("search").value;

  fetch("./DB.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  switch (search) {
    case "Bugger":
      Bugger.forEach((element) => {
        card = `
            <div class="cardPic">
              <div class="CardPicItem" id="one"></div>
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
                <div class="plusIcon"></div>
              </div>
            </div>
                    `;

        let cardItem = document.getElementsByClassName("itemCard");
        cardItem[i++].innerHTML = card;
      });
      break;
    case "Chicken":
      Chicken.forEach((element) => {
        card1 = `<div class="cardPic">
          <div class="CardPicItem3" ></div>
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
            <div class="plusIcon"></div>
          </div>
        </div>`;

        let cardItem = document.getElementsByClassName("itemCard");
        cardItem[0].innerHTML = card1;
      });
      break;
    case "Bevarage":
      Beverage.forEach((element) => {
        card2 = `
            <div class="cardPic">
              <div class="CardPicItem4"></div>
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
                <div class="plusIcon"></div>
              </div>
            </div>
                    `;

        let cardItem = document.getElementsByClassName("itemCard");
        cardItem[i++].innerHTML = card2;
      });
      break;
  }
}

function myFunc() {
  window.location.href = "http://127.0.0.1:5500/index.html";
}
function myFunc1() {
  window.location.href = "http://127.0.0.1:5500/order.html";
}
function myFunc2() {
  window.location.href = "http://127.0.0.1:5500/customer.html";
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

  const pattern = /^\d{7}$/;

  const isValid = pattern.test(customerId);
  document.getElementById("errormessage").textContent = isValid
    ? ""
    : "Please enter a valid  digit 6-digit number list.";

  // Return validation status
  return isValid;
}
