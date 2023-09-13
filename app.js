const tableBody = document.getElementById('table-body');

let flights = [
  {
    time: '06:00',
    destination: 'MIAMI',
    flight: 'AA 2589',
    gate: 'A 16',
    remarks: 'ON TIME',
  },
  {
    time: '06:10',
    destination: 'HOUSTON',
    flight: 'NZ 9987',
    gate: 'F 97',
    remarks: 'ON TIME',
  },
  {
    time: '07:30',
    destination: 'NEWARK',
    flight: 'UA 3435',
    gate: 'F 64',
    remarks: 'ON TIME',
  },
  {
    time: '08:15',
    destination: 'OMAN',
    flight: 'OX 203',
    gate: 'B 32',
    remarks: 'ON TIME',
  },
  {
    time: '09:10',
    destination: 'PHOENIX',
    flight: 'AC 1721',
    gate: 'F 53',
    remarks: 'ON TIME',
  },
];

const destinations = ['TOKYO', 'SEOUL', 'DUBAI', 'LONDON', 'BUSAN'];
const remarks = ['ON TIME', 'DELAYRED', 'CANCELLED'];
let hour = 15;

function populateTables() {
  for (const flight of flights) {
    const tableRow = document.createElement('tr');

    for (const flightDetail in flight) {
      const tableCell = document.createElement('td');
      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement('div');

        setTimeout(() => {
          letterElement.classList.add('flip');
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }

      tableRow.append(tableCell);
    }

    tableBody.append(tableRow);
  }
}

populateTables();

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(maxNumber) {
  const numbers = '0123456789';
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber + 1);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function generateTime() {
  let displayHour = hour;

  if (hour < 24) {
    hour++;
  }
  if (hour >= 24) {
    hour = 1;
    displayHour = hour;
  }
  if (hour < 10) {
    displayHour = '0' + hour;
  }

  return displayHour + ':' + generateRandomNumber() + generateRandomNumber();
}

function shuffleUp() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight: generateRandomLetter() + generateRandomLetter() + ' ' + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
    gate: generateRandomLetter() + ' ' + generateRandomNumber() + generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  });
  tableBody.textContent = '';
  populateTables();
}

setInterval(shuffleUp, 5000);
