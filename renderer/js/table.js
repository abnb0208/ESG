function drawTable(result){
  const th_names = ["环境", "社会", "治理", "ESG评级"];
  const th_names_en = ["Environmental", "Social", "Governance", "ESG"];
  
  th_names.forEach((name, index)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <th scope="row">${name}</th>
      <td>${result[th_names_en[index]][0]}</td>
      <td>${result[th_names_en[index]][1]}</td>
      <td>${result[th_names_en[index]][2]}</td>
      <td>${result[th_names_en[index]][3]}</td>
      <td>${result[th_names_en[index]][4]}</td>
      <td>${result[th_names_en[index]][5]}</td>
      <td>${result[th_names_en[index]][6]}</td>
      <td>${result[th_names_en[index]][7]}</td>
      <td>${result[th_names_en[index]][8]}</td>
      <td>${result[th_names_en[index]][9]}</td>
      `;
    ESG_table_bodey_holder.appendChild(tr);
  });
  const h_tr = document.createElement('tr');
  h_tr.innerHTML = `
      <th scope="col">#</th>
      <th scope="col">2011</th>
      <th scope="col">2012</th>
      <th scope="col">2013</th>
      <th scope="col">2014</th>
      <th scope="col">2015</th>
      <th scope="col">2016</th>
      <th scope="col">2017</th>
      <th scope="col">2018</th>
      <th scope="col">2019</th>
      <th scope="col">2020</th>
      `;
      ESG_table_head_holder.appendChild(h_tr);

      table_biaoti.innerHTML = '详细数据';
}


