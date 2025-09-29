const results = [
    {
        name:"Avdhut Taral",
        mark: "80"
        
    },
 {
        name:"Gaurav Patil",
        mark: "70"
        
    },
    
];


// Populate Results
const resultsBody = document.getElementById('resultsBody');
results.forEach(result => {
    const row = document.createElement('tr');
    row.innerHTML = `
       
        <td>${result.name}</td>
        <td>${result.mark}</td>
    
    `;
    resultsBody.appendChild(row);
});

