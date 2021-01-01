
const checkBtn = document.getElementById("check");
const orderBtn = document.getElementById("order");
const checkPopup = document.getElementById("check-popup");
const orderPopup = document.getElementById("order-popup");

checkBtn.addEventListener("click",  () => {
    const tableNo = document.getElementById("input-table").value;
    checkPopup.classList.toggle("active") 

    if (tableNo === "") console.log("please enter a number");
    else {
      const data = { tableNo, order: "not ordered", check: "check",btn: "check" };
      console.log(tableNo);
      const options = {
        method: "POST",
        headers: {
    "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      fetch("/api", options);
    }
    setTimeout(() => {
            checkPopup.classList.toggle("active")
          }, 1300);       
})
orderBtn.addEventListener("click",  () => {
    const tableNo = document.getElementById("input-table").value;
    orderPopup.classList.toggle("active") 

    if (tableNo === "") console.log("please enter a number");
    else {
      const data = { tableNo, order: "ordered", check: "no check",btn: "order" };
      
      console.log(tableNo);
      const options = {
        method: "POST",
        headers: {
    "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      fetch("/api", options);
    }
    setTimeout(() => {
            orderPopup.classList.toggle("active")
          }, 1300);       
})
function submit() {
        const tableNo = document.getElementById("input-table").value;
        const data = { tableNo, order: "not ordered", check: "no check",btn: "submit"};
        console.log(tableNo);
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        fetch("/api", options);

       
      }


