window.addEventListener("load", solve);

function solve() {

  const snowmanName = document.getElementById("snowman-name");
  const snowmanHeight = document.getElementById("snowman-height");
  const location = document.getElementById("location");
  const creatorName = document.getElementById("creator-name");
  const specialAtt = document.getElementById("special-attribute");
  const addButton = document.querySelector('.add-btn');
  const snowballPreview = document.querySelector(".snowman-preview");
  const snowList = document.querySelector(".snow-list");
  const main = document.getElementById("hero");
  const backImg = document.getElementById("back-img");




  addButton.addEventListener('click', addPreview)


  function addPreview(e) {
    e.preventDefault();

    if (
      snowmanName.value == "" ||
      snowmanHeight.value == "" ||
      location.value == "" ||
      creatorName == "" ||
      specialAtt == ""
    ) {
      return
    }
    let liElementInfo = document.createElement('li');
    liElementInfo.setAttribute('class', 'snowman-info');
    let articleElementInfo = document.createElement("article");


    let name = document.createElement('p');
    name.textContent = `Name: ${snowmanName.value}`;
    let height = document.createElement('p');
    height.textContent = `Height: ${snowmanHeight.value}`;
    let locationPreview = document.createElement('p');
    locationPreview.textContent = `Location: ${location.value}`;
    let creatorPreview = document.createElement('p');
    creatorPreview.textContent = `Creator: ${creatorName.value}`;
    let attributePreview = document.createElement('p');
    attributePreview.textContent = `Attribute: ${specialAtt.value}`;

    let btnContainer = document.createElement("div");
    btnContainer.setAttribute('class', 'btn-container');

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = 'Next';

    let editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    articleElementInfo.appendChild(name);
    articleElementInfo.appendChild(height);
    articleElementInfo.appendChild(locationPreview);
    articleElementInfo.appendChild(creatorPreview);
    articleElementInfo.appendChild(attributePreview);



    liElementInfo.appendChild(articleElementInfo)
    snowballPreview.appendChild(liElementInfo)


    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    snowballPreview.appendChild(btnContainer)

    let nextSnowmanName = snowmanName.value;
    let nextSnowmanHeight = snowmanHeight.value;
    let nextLocation = location.value;
    let nextCreatorName = creatorName.value;
    let nextSpecialAtt = specialAtt.value;

    snowmanName.value = "";
    snowmanHeight.value = "";
    location.value = "";
    creatorName.value = "";
    specialAtt.value = "";

    addButton.disabled = true;


    editBtn.addEventListener("click", onEdit);
    function onEdit() {

      snowmanName.value = nextSnowmanName;
      snowmanHeight.value = nextSnowmanHeight;
      location.value = nextLocation;
      creatorName.value = nextCreatorName;
      specialAtt.value = nextSpecialAtt;

      liElementInfo.remove();
      btnContainer.remove();


      addButton.disabled = false;
    }

    nextBtn.addEventListener('click', onNext);

    function onNext(e) {

      let liElementContent = document.createElement('li');
      liElementContent.setAttribute('class', 'snowman-content');




      let sendBtn = document.createElement("button");
      sendBtn.setAttribute('class', 'send-btn');
      sendBtn.textContent = 'Send';




      liElementContent.appendChild(articleElementInfo)
      articleElementInfo.appendChild(sendBtn)
      snowList.appendChild(liElementContent)

      liElementInfo.remove();
      btnContainer.remove();

      sendBtn.addEventListener('click', onSend);


      function onSend() {
        main.remove();
        backImg.style.display = "block";

        let backBtn = document.createElement("button");
        backBtn.setAttribute('class', 'back-btn');
        backBtn.textContent = 'Back';

       
       document.body.appendChild(backBtn);

        

        backBtn.addEventListener('click', onBack);

        function onBack(e) {
          window.location.reload()
        }
      }
    }
  }
}
