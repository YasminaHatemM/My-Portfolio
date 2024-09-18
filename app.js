const email = document.getElementById("email");
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const list = document.getElementById("user__data__list");
function userData(name, email, subject, message) {
  this.name = name;
  this.email = email;
  this.subject = subject;
  this.message = message;
}
let dataList = [];
let i = 0;
submit.addEventListener("click", (event) => {
  event.preventDefault();
  dataList.push(
    new userData(name.value, email.value, subject.value, message.value)
  );
  console.log(
    i + 1,
    dataList[i].name,
    dataList[i].email,
    dataList[i].subject,
    dataList[i].message
  );
  const listItem = document.createElement("li");
  list.appendChild(listItem);
  listItem.innerHTML = `(${i + 1})<br>Name: ${dataList[i].name}<br>Email: ${dataList[i].email}<br>Subject: ${dataList[i].subject}<br>Message: ${dataList[i].message} <br>`;
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  i++;
});
