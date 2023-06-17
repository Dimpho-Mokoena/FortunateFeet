 function openModal(imageUrl) {
                let modal = document.getElementById("modal");
                let modalImage = document.getElementById("modal-image");
                modalImage.src = imageUrl;
                modal.style.display = "block";
            }


            function closeModal() {
                let modal = document.getElementById("modal");
                modal.style.display = "none";
            }

        function showSection(sectionId) {
            let sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                if (section.id === sectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        }

        let navbarLinks = document.querySelectorAll('.navbar a');
        navbarLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                let sectionId = link.getAttribute('href').substring(1);
                showSection(sectionId);
            });
        });
