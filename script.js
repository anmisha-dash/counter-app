let count = 0;
const history = [];

const countEl  = document.getElementById('count');
const statusEl = document.getElementById('status');
const historyList = document.getElementById('historyList');

function updateDisplay() {
  countEl.textContent = count;

  countEl.className = 'count';
  statusEl.className = 'status';

  if (count > 0) {
    countEl.classList.add('positive');
    statusEl.classList.add('positive');
    statusEl.textContent = 'positive';
  } else if (count < 0) {
    countEl.classList.add('negative');
    statusEl.classList.add('negative');
    statusEl.textContent = 'negative';
  } else {
    countEl.classList.add('neutral');
    statusEl.textContent = 'neutral';
  }
}

function addHistory(action, value) {
  history.unshift({ action, value });

  const empty = historyList.querySelector('.history-empty');
  if (empty) empty.remove();

  const li = document.createElement('li');
  const colorClass = value > 0 ? 'plus' : value < 0 ? 'minus' : 'zero';
  const sign = value > 0 ? '+' : '';

  li.innerHTML = `
    <span>${action}</span>
    <span class="${colorClass}">${sign}${value}</span>
  `;

  historyList.insertBefore(li, historyList.firstChild);

  if (history.length > 10) {
    historyList.removeChild(historyList.lastChild);
  }
}

function increment() {
  count++;
  addHistory('Increment', count);
  updateDisplay();
}

function decrement() {
  count--;
  addHistory('Decrement', count);
  updateDisplay();
}

function reset() {
  count = 0;
  addHistory('Reset', 0);
  updateDisplay();
}