document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(item => {
      const question = item.querySelector(".question");
      const answer = item.querySelector(".answer");
  
      question.addEventListener("click", function() {
        const isAnswerVisible = answer.classList.contains("show");
        answer.classList.toggle("show");
        answer.style.display = isAnswerVisible ? 'none' : 'block';
        cross.style.display = isAnswerVisible ? 'none' : 'block';
      });
    });
  });

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const share = document.querySelector('.share');

setTimeout(() => {
  share.classList.add("hover");
}, 1000);

setTimeout(() => {
  share.classList.remove("hover");
}, 3000);


    document.addEventListener("DOMContentLoaded", function () {
        // Get the "SHARE" link by its id
        var shareLink = document.getElementById("shareLink");

        // Add a click event listener to the "SHARE" link
        shareLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the current page's URL
            var currentURL = window.location.href;

            // Create a temporary input element to copy the URL to the clipboard
            var tempInput = document.createElement("input");
            tempInput.value = currentURL;

            // Append the input element to the document
            document.body.appendChild(tempInput);

            // Select the input element's content
            tempInput.select();

            // Copy the selected content to the clipboard
            document.execCommand("copy");

            // Remove the temporary input element
            document.body.removeChild(tempInput);

            // Optionally, you can provide some user feedback
            // alert("Website link copied to clipboard!");
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Get the "SHARE" link by its id
        var shareLink = document.getElementById("shareLink");

        // Add a click event listener to the "SHARE" link
        shareLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the current page's URL
            var currentURL = window.location.href;

            // Create a temporary input element to copy the URL to the clipboard
            var tempInput = document.createElement("input");
            tempInput.value = currentURL;

            // Append the input element to the document
            document.body.appendChild(tempInput);

            // Select the input element's content
            tempInput.select();

            // Copy the selected content to the clipboard
            document.execCommand("copy");

            // Remove the temporary input element
            document.body.removeChild(tempInput);

            // Check if the browser supports the Web Share API
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: currentURL,
                })
                    .then(function () {
                        // Sharing succeeded
                        console.log("Shared successfully!");
                    })
                    .catch(function (error) {
                        // Sharing failed
                        console.error("Error sharing:", error);
                    });
            } else {
                // Browser doesn't support Web Share API, provide a fallback
                alert("Website link copied to clipboard. You can manually share it using your device's share functionality.");
            }
        });
    });

 
    