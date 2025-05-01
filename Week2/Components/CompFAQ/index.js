document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".Faq-Item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".Faq-Question");

    question.addEventListener("click", () => {
      // If clicking the same item that's already active, just close it
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        return;
      }

      // Close other open items
      faqItems.forEach((otherItem) => {
        if (otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Open current item
      item.classList.add("active");
    });
  });
});
