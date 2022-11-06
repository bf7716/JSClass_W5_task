let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];

const list = document.querySelector("#resultBlock");
const filter = document.querySelector("#select");
const filterResult = document.querySelector("#filterResult");
const addbtn = document.querySelector(".addbtn");
const addName = document.querySelector("#name");
const addImgUrl = document.querySelector("#picUrl");
const addArea = document.querySelector("#area");
const addPrice = document.querySelector("#price");
const addGroup = document.querySelector("#number");
const addRate = document.querySelector("#star");
const addDescip = document.querySelector("#descip");

filter.addEventListener('change',e => {
  let filterArea = e.target.value;
  if(filterArea === "全部"){
    renderData(data);
    filterResult.textContent = `共有 ${data.length} 筆資料，歡迎使用地區搜尋`;
  }else{
    newData = data.filter(i => i.area === filterArea);
    renderData(newData);
    filterResult.textContent = `本次搜尋共 ${newData.length} 筆資料`;
  }
});

addbtn.addEventListener('click',e => {
  let obj = {};
  
  if(
    addName.value.trim() === "" ||
    addImgUrl.value.trim() === "" ||
    addArea.value.trim() === "" ||
    addDescip.value.trim() === "" ||
    addGroup.value.trim() === "" ||
    addPrice.value.trim() === "" ||
    addRate.value.trim() === ""){
      alert(`欄位不得為空，請填入資訊`);
  }else{
    obj.id = data.length;
    obj.name = addName.value;
    obj.imgUrl = addImgUrl.value;
    obj.area = addArea.value;
    obj.description = addDescip.value;
    obj.group = + addGroup.value;
    obj.price = + addPrice.value;
    obj.rate = + addRate.value;
    data.push(obj);

    renderData(data);
    document.forms["addForm"].reset();
  }

})


function renderData(data){
  let content = "";

  data.forEach(i => {
    content += `
    <a class="col-4 mb-5" href="#">
      <div class="card">
        <div class="cardHeader">
          <span class="aeraTag">${i.area}</span>
          <span class="scoreTag">${i.rate}</span>
          <div class="cardImg"><img src="${i.imgUrl}" alt="${i.name}"></div>
        </div>
        <div class="cardBody">
          <div class="cardContent">
            <h3 class="cardTitle">${i.name}</h3>
            <p class="cardText">${i.description}</p>
          </div>
        </div>
        <div class="cardFooter">
          <div class="numberBlock">
            <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
            <p>剩下最後 ${i.group} 組</p>
          </div>
          <div class="priceBlock">
            <span>TWD</span>
            <p class="price">$${i.price}</p>
          </div>
        </div>
        </div>
      </div>
    </a>`;
  })
  
  list.innerHTML = content;
  filterResult.textContent = `共有 ${data.length} 筆資料，歡迎使用地區搜尋`;
};

renderData(data);