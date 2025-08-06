
const sections = document.querySelectorAll('.page-section');
        let currentSection = 0;
      
        function showSection(index) {
          sections.forEach((section, i) => {
            section.style.display = (i === index) ? 'flex' : 'none';
          });
        }
      
        document.getElementById('nextBtn').addEventListener('click', () => {
          currentSection = (currentSection + 1) % sections.length;
          showSection(currentSection);
        });
      
        document.getElementById('prevBtn').addEventListener('click', () => {
          currentSection = (currentSection - 1 + sections.length) % sections.length;
          showSection(currentSection);
        });
      
        // Show only the first section at start
        showSection(currentSection);