const pdfFiles = [
  { title: 'كتاب الروحانية الناضجة وجدانياً', file: 'book/كتاب الروحانية الناضجة  وجدانيا .pdf' },
  { title: 'قبل أن تقول نعم', file: 'book/قبل ان تقول نعم ـ مشير سمير.pdf' },
  { title: 'المرأة والقيادة', file: 'book/المرأة والقيادة[1].pdf' },
  { title: 'القضية - المسيح لي ستروبل', file: 'book/القضية-المسيح-لي-ستروبل - [christianlib.com].pdf' },
  { title: 'الحب المحرر', file: 'book/الحب_المحرر-١.pdf' },
  { title: 'Story of Marriage', file: 'book/Story_of_Marriage_Book_Arabic.pdf' }
];



function renderPdfList() {
  const container = document.getElementById('pdf-list');
  if (!container) return;
  container.innerHTML = `
    <ul class="link-list">
      ${pdfFiles.map((item) => `<li><a href="${encodeURI(item.file)}" target="_blank" rel="noopener">${item.title}</a></li>`).join('')}
    </ul>
  `;
}


renderPdfList();
