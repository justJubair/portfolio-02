// Open and close sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}

//   Download resume button
const buttons = document.querySelectorAll(".downloadButton");


buttons.forEach((button) => {
  button.addEventListener("click", () => {

    // Specify the URL of the PDF file you want to download
    const pdfUrl = "./assets/Jubair Ahmed Resume.pdf";

    // Create a link element
    const link = document.createElement("a");

    // Set the href attribute to the PDF file URL
    link.href = pdfUrl;

    // Set the download attribute to suggest the name for the downloaded file
    link.download = "Jubair Ahmed's Resume";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document after the download
    document.body.removeChild(link);
  });
});
