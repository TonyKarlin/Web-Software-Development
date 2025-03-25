const div = document.querySelector('#target');

const browser = document.createElement('p');
browser.textContent = `Browser: ${navigator.userAgentData?.brands[2]?.brand}`;

const version = document.createElement('p');
version.textContent = `Version: ${navigator.userAgentData?.brands[2]?.version}`;

div.appendChild(browser);
div.appendChild(version);

function getOS() {
  const platform = navigator.userAgentData?.platform;
  if (platform) {
    return platform;
  }
  return 'unknown';
}

const OS = document.createElement('p');
OS.textContent = `OS: ${getOS()}`;
div.appendChild(OS);

function getDimensions() {
  return `Screen dimensions: ${window.screen.width}x${window.screen.height}`;
}

const dimensions = document.createElement('p');
dimensions.textContent = getDimensions();
div.appendChild(dimensions);

function getAvailableSpace() {
  return `Available space: ${window.screen.availWidth}x${window.screen.availHeight}`;
}

const space = document.createElement('p');
space.textContent = getAvailableSpace();
div.appendChild(space);

function getTimeAndDate() {
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return `Time and date: ${date.toLocaleDateString('en-FI', options)}`;
}

const timeAndDate = document.createElement('p');
timeAndDate.textContent = getTimeAndDate();
div.appendChild(timeAndDate);
