const pdfFiles = [
  { title: 'كتاب الروحانية الناضجة وجدانياً', file: 'book/كتاب الروحانية الناضجة  وجدانيا .pdf' },
  { title: 'قبل أن تقول نعم', file: 'book/قبل ان تقول نعم ـ مشير سمير.pdf' },
  { title: 'المرأة والقيادة', file: 'book/المرأة والقيادة[1].pdf' },
  { title: 'القضية - المسيح لي ستروبل', file: 'book/القضية-المسيح-لي-ستروبل - [christianlib.com].pdf' },
  { title: 'الحب المحرر', file: 'book/الحب_المحرر-١.pdf' },
  { title: 'Story of Marriage', file: 'book/Story_of_Marriage_Book_Arabic.pdf' }
];

const songs = [
  { title: 'استيقظي', file: 'songs/01 استيقظي.mp3' },
  { title: 'ملناش غيرك', file: 'songs/01 ملناش غيرك.mp3' },
  { title: 'قلبي يذكر باسمك', file: 'songs/01_مالي سواك.mp3' },
  { title: 'باركي يا نفسي الرب', file: 'songs/02 باركي يا نفسي الرب.mp3' },
  { title: 'موسيقى', file: 'songs/03 موسيقى.mp3' },
  { title: 'أنت عظيم', file: 'songs/أنت عظيم (1).mp3' },
  { title: 'أنا المؤمن أنا المفدى', file: 'songs/أنا المؤمن أنا المفدى.mp3' },
  { title: 'أنت الأسد الخارج', file: 'songs/أنت الأسد الخارج.mp3' },
  { title: 'أنت هدف أهداف العمر', file: 'songs/أنت هدف أهداف العمر.mp3' },
  { title: 'يا رب اسمع صلاتي', file: 'songs/يارب اسمع صلاتى.mp3' },
  { title: 'قدوس أنت يا الله', file: 'songs/قدوس انت يا الله.mp3' },
  { title: 'قدوس قدوس', file: 'songs/قدوس قدوس.mp3' },
  { title: 'أه لو', file: 'songs/أه لو.mp3' },
  { title: 'ما أبهج اليوم', file: 'songs/ما أبهج اليوم.MP3' },
  { title: 'لك يا سيدي', file: 'songs/لك يا سيدى.mp3' },
  { title: 'محتاجينلك', file: 'songs/محتاجينلك.mp3' },
  { title: 'نباركك يا مليك المجد', file: 'songs/نباركك يا مليك المجد.mp3' },
  { title: 'عالي وعالي وعلياك', file: 'songs/عالى وعالى وعليناك.mp3' },
  { title: 'يا صاحب الحنان', file: 'songs/يا صاحب الحنان.mp3' },
  { title: 'مستحق السجود', file: 'songs/مستحق السجود.mp3' },
  { title: 'يوم جديد', file: 'songs/استيقظى.mp3' }
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

function renderSongs() {
  const container = document.getElementById('song-list');
  const playerLabel = document.querySelector('.player-label');
  const audioPlayer = document.getElementById('audio-player');
  if (!container || !audioPlayer || !playerLabel) return;

  container.innerHTML = songs
    .map(
      (song, index) => `
        <li class="song-item">
          <button type="button" class="song-btn" data-file="${encodeURI(song.file)}" data-title="${song.title}">
            ▶ ${song.title}
          </button>
        </li>
      `
    )
    .join('');

  container.querySelectorAll('.song-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const file = button.getAttribute('data-file');
      const title = button.getAttribute('data-title');
      audioPlayer.src = file;
      audioPlayer.hidden = false;
      audioPlayer.play().catch(() => {});
      playerLabel.textContent = `الترنيمة قيد التشغيل: ${title}`;
      container.querySelectorAll('.song-btn').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

renderPdfList();
renderSongs();
