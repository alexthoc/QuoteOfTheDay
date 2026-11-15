(function () {
  'use strict';

  const QUOTES = [
    { text: 'We suffer more often in imagination than in reality.', author: 'Seneca' },
    { text: 'It is not that we have a short time to live, but that we waste a lot of it.', author: 'Seneca' },
    { text: 'While we are postponing, life speeds by.', author: 'Seneca' },
    { text: 'The impediment to action advances action. What stands in the way becomes the way.', author: 'Marcus Aurelius' },
    { text: 'The soul becomes dyed with the colour of its thoughts.', author: 'Marcus Aurelius' },
    { text: 'If it is not right, do not do it; if it is not true, do not say it.', author: 'Marcus Aurelius' },
    { text: 'Men are disturbed not by things, but by the views which they take of them.', author: 'Epictetus' },
    { text: 'No man is free who is not master of himself.', author: 'Epictetus' },
    { text: 'To see what is right and not to do it is want of courage.', author: 'Confucius' },
    { text: 'What you do not want done to yourself, do not do to others.', author: 'Confucius' },
    { text: 'A journey of a thousand miles begins with a single step.', author: 'Lao Tzu' },
    { text: 'He who knows he has enough is rich.', author: 'Lao Tzu' },
    { text: 'Well done is better than well said.', author: 'Benjamin Franklin' },
    { text: 'Lost time is never found again.', author: 'Benjamin Franklin' },
    { text: 'Always do right. This will gratify some people and astonish the rest.', author: 'Mark Twain' },
    { text: 'Courage is resistance to fear, mastery of fear, not absence of fear.', author: 'Mark Twain' },
    { text: 'The only way to have a friend is to be one.', author: 'Ralph Waldo Emerson' },
    { text: 'Nothing great was ever achieved without enthusiasm.', author: 'Ralph Waldo Emerson' },
    { text: 'A friend may well be reckoned the masterpiece of nature.', author: 'Ralph Waldo Emerson' },
    { text: 'If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.', author: 'Henry David Thoreau' },
    { text: 'It is not enough to be industrious; so are the ants. What are you industrious about?', author: 'Henry David Thoreau' },
    { text: 'The only thing we have to fear is fear itself.', author: 'Franklin D. Roosevelt' },
    { text: 'The unexamined life is not worth living.', author: 'Socrates' },
    { text: 'Diligence is the mother of good luck.', author: 'Benjamin Franklin' }
  ];

  const dateEl = document.getElementById('qotd-date');
  const cardEl = document.getElementById('qotd-card');
  const textEl = document.getElementById('qotd-text');
  const authorEl = document.getElementById('qotd-author');
  const nextBtn = document.getElementById('qotd-next');
  const todayBtn = document.getElementById('qotd-today');

  let currentIndex = -1;
  let changeTimer = null;

  function dailyIndex() {
    const now = new Date();
    // Local calendar day number: use local Y/M/D as UTC so DST doesn't skew it.
    const days = Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000);
    return ((days % QUOTES.length) + QUOTES.length) % QUOTES.length;
  }

  function show(index) {
    const quote = QUOTES[index];
    currentIndex = index;
    textEl.textContent = quote.text;
    authorEl.textContent = '— ' + quote.author;
    todayBtn.hidden = index === dailyIndex();

    cardEl.classList.remove('is-changing');
    clearTimeout(changeTimer);
    // Force reflow so the class re-add restarts the animation.
    void cardEl.offsetWidth;
    cardEl.classList.add('is-changing');
    changeTimer = setTimeout(function () {
      cardEl.classList.remove('is-changing');
    }, 250);
  }

  function randomOther() {
    if (QUOTES.length < 2) return currentIndex;
    let i;
    do {
      i = Math.floor(Math.random() * QUOTES.length);
    } while (i === currentIndex);
    return i;
  }

  dateEl.textContent = new Date().toLocaleDateString(undefined, {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  nextBtn.addEventListener('click', function () { show(randomOther()); });
  todayBtn.addEventListener('click', function () { show(dailyIndex()); });

  show(dailyIndex());
})();
