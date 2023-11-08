
    function searchTable() {
const input = document.getElementById("searchInput").value.toLowerCase(); // Get the search input and convert to lowercase
const table = document.getElementById("tableToConvert"); // Get the table element
const rows = table.querySelectorAll("tr"); // Select all rows except the header row
// console.log(input);
rows.forEach(row => {
 const columns = row.querySelectorAll("td");
 // console.log(rows.length);
 let found = false;

 columns.forEach(column => {
   if (column.textContent.toLowerCase().includes(input)) {
     found = true;
   }
 });

 if (found) {
   row.style.display = ""; // Show the row if a match is found
   // document.getElementById('noavailable').style.display="none";
 
 } else {
   row.style.display = "none"; 
   // document.getElementById('noavailable').style.display="block";
   // Hide the row if no match is found
 }
});
}
