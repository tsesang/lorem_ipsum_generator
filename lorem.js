let str = [
  "Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability.Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability",
  "Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability.Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability",
  "Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability.Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability",
  "Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability.Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability",
  "Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability.Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability",
  "Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability.Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability",
  "Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability.Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability",
  "Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability.Climate change is a pressing global issue, requiring urgent action to reduce greenhouse gas emissions and mitigate its impact on the environment.Democracy is a system of government that emphasizes the importance of citizen participation, representation, and accountability",
];

let input = Number(document.getElementById("input").value);
const para = document.getElementById("text-container");

let paras = [];
let data = [];

let inc=0;

let generate = () => {
  if (isNaN(input) || input <= 0 || input > 8) {
    const randomIndex = Math.floor(Math.random() * str.length);
    para.innerHTML = `<span>${++inc}</span><p>${str[randomIndex]}</p>`;
  } else {
    data = str.slice(0, input);
    paras = data.map((d) => {
      return `<span>${++inc}</span><p>${d}</p>`;
    });
    para.innerHTML = paras.join("   ");
  }
  inc = 0;
};
