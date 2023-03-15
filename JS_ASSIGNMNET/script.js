(function() {
    const myself = [
      { about: "Name", value: "EKAGRA" },
      { about: "Age", value: "21" },
      { about: "DOB", value: "15-Oct-2002" },
      { about: "Email", value: "ekagra1212@gmail.com" },
      { about: "Company", value: "Gemini Solutions Pvt Ltd." }
    ];
    

    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
  
    const headRow = document.createElement("tr");
    for (let i = 0; i < 5 ; i++) {
      const headerCell = document.createElement("th");
      headerCell.style.border = "2px solid black";
      headerCell.style.padding = "12px";
      headerCell.style.fontWeight = '600';
      headerCell.style.fontSize = '30px';
      headerCell.style.textAlign = 'center';
      const textCell = document.createTextNode(myself[i].about);
      headerCell.appendChild(textCell);
      headRow.appendChild(headerCell);
    }
    table.appendChild(headRow);
    for (let i = 0; i < 5; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 5; j++) {
        const cells = document.createElement("td");
        cells.style.border = "2px solid black";
        cells.style.padding = "10px";
        cells.style.fontSize = '20px';
        cells.style.textAlign = 'center';
        const textCell = document.createTextNode( myself[j].value);
        cells.appendChild(textCell);
        row.appendChild(cells);
      }
      table.appendChild(row);
    }
  
    document.body.appendChild(table);
})();