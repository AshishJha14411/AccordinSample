const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq(parentElement) {
  //last child of the main element is p tag
  const lastChild = parentElement.lastChild;
  const showHideStatus = lastChild.style.display;
  lastChild.style.display = showHideStatus === "block" ? "none" : "block"

  let newStatus = showHideStatus === "block" ? "none" : "block"
  const btnTextChanger = parentElement.firstChild.lastChild;
  btnTextChanger.innerText = newStatus === "block"? "-" : "+"
}
//created the tags and added classes and id to it.
function createFaq() {
  let main = document.createElement("div")
  let heading = document.createElement("div")
  let headingText = document.createElement("h3")
  let headingBtn = document.createElement("button")
  let descText = document.createElement("p")
  
  main.classList.add("faq")
  heading.classList.add("faq_header")
  headingBtn.classList.add("show_btn")
  headingBtn.setAttribute("id","showHide_btn")
  descText.classList.add("hidden")
  headingBtn.innerText = '+'

  let tagList = {main,heading,headingText,headingBtn,descText}

  return tagList;
}
//function to add stuff in the tags
faqData.forEach((ele) => {
  let faqList = createFaq(ele.id);
  faqList.headingText.innerText = ele.question
  faqList.descText.innerText  = ele.answer
  accordianBody.append(faqList.main)
  faqList.main.append(faqList.heading)
  faqList.heading.append(faqList.headingText)
  faqList.heading.append(faqList.headingBtn)
  faqList.main.append(faqList.descText)
})


function btnStatusUpdate() {
 let toggleBtn= document.querySelectorAll(".show_btn");

 toggleBtn.forEach((ele) => {
  ele.addEventListener("click", () => {
    //passing the parentnode of btn which is heading and then parent element of heading which is main as parameter
    showFaq(ele.parentNode.parentElement)
  })
 })
}

btnStatusUpdate()
