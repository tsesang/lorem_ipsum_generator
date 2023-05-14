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

  const item = Number(document.getElementById('items'));
  const dataContainer = document.getElementById('data')
  const generate=()=>{
    if(isNaN(item.value) || item.value <0 || item.value >8){
        const randomIndex = Math.floor(Math.random()*str.length);
        dataContainer.innerHTML = `<p> ${str[randomIndex]}</p>`
    }
    else{
        const data = str.slice(0,item.value);
        const paras = data.map((d)=>{
            return '${d}'
        })
        data.dataContainer.innerHTML = paras.join(" ");
    }
  }