const btn1 = document.getElementById("submit");
const month = document.getElementById("month");
const year = document.getElementById("yearsearch");
const results = document.getElementById("results")


async function button() {

    const res = await fetch("https://calendarific.com/api/v2/holidays?api_key=2852014465833c55fd09778f4d7c39404f2f10e5&country=US&year=2022&month="+month.value)
    const data = await res.json()
    console.log(data)

    
        while (results.firstChild) {
          results.removeChild(results.firstChild);
        }
      

    for (let i = 0; i <= data.response.holidays.length; i++) {
        let a = document.createElement("p")

        

        a.innerText =data.response.holidays[i].name
        results.appendChild(a)
    }


    
};



//button()


 btn1.addEventListener("click", button)