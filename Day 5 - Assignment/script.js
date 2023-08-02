let formData = () => {
  let inpt = document.getElementById("inptDate").value;
  //   alert("Yoy got her..." + inpt);
  if (!inpt) {
    let tblBody = document.getElementById("tBody");
    let tableHTML = "";
    tableHTML += `
      <tr>
        <td colspan="3" style="color:red">Please enter date </td>
      </tr>
    `;
    tblBody.innerHTML = tableHTML;
    // break;
  } else {
    displayData(inpt.trim());
  }
};
async function fetchData() {
  const response = await fetch("https://data.covid19india.org/data.json");
  const data = await response.json();
  const timeSeriesData = data["cases_time_series"];
  return timeSeriesData;
}
async function displayData(param1) {
  var flag = false;
  let data = await fetchData();
  let tblBody = document.getElementById("tBody");
  let tbl = document.getElementById("tblData");
  //   console.log(data.data.length);
  data.forEach((entry) => {
    if (entry.date == param1) {
      const row = tbl.insertRow();
      row.insertCell().textContent = entry.date;
      row.insertCell().textContent = entry.dailyconfirmed;
      row.insertCell().textContent = entry.dailydeceased;
      flag = true;
      console.log(flag);
    }
  });
  console.log(flag);
  let tableHTML = "";
  if (flag != true) {
    console.log(flag);
    console.log(flag);
    tableHTML += `
      <tr>
        <td>${param1}</td>
        <td colspan="2" style="color:red">Date not found</td>
      </tr>
    `;
    tblBody.innerHTML = tableHTML;
  }
}

let form2Data = () => {
  let inpt = document.getElementById("inptDate").value;
  //   alert("Yoy got her..." + inpt);
  if (!inpt) {
    let tblBody = document.getElementById("tBody");
    let tableHTML = "";
    tableHTML += `
      <tr>
        <td colspan="3" style="color:red">Please enter scheme code</td>
      </tr>
    `;
    tblBody.innerHTML = tableHTML;
    // alert("null");
    // break;
  } else {
    display2Data(inpt.trim());
  }
};
async function fetch2Data() {
  const response = await fetch("https://api.mfapi.in/mf");
  const data = await response.json();
  const mtf = data;

  let scNo = document.getElementById("schNo");
  scNo.innerHTML = data.length;

  return mtf;
}
async function display2Data(param1) {
  var flag = false;
  let data = await fetch2Data();
  let tblBody = document.getElementById("tBody");
  let tbl = document.getElementById("tblData");
  let i = 0;

  data.forEach((entry) => {
    if (entry.schemeCode == param1) {
      const row = tbl.insertRow();
      row.insertCell().textContent = entry.schemeCode;
      row.insertCell().textContent = entry.schemeName;
      //   row.insertCell().textContent = entry.dailydeceased;
      flag = true;
      console.log(flag);
    }
  });

  //   data.forEach((entry) => {
  //     i += 1;
  //   });
  //   console.log("Total schemes : "+i);

  let tableHTML = "";
  if (flag != true) {
    console.log(flag);
    console.log(flag);
    tableHTML += `
      <tr>
        <td>${param1}</td>
        <td colspan="2" style="color:red">Scheme not found</td>
      </tr>
    `;
    tblBody.innerHTML = tableHTML;
  }
}
