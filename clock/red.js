function cleanBusRows() {
  const busContainer = document.getElementById('busContainer');
  while (busContainer.firstChild) {
    busContainer.removeChild(busContainer.firstChild);
  }
}

function createBusRow(stopCode) {
  const busContainer = document.getElementById('busContainer');
  const busRow = document.createElement('div');
  const rawHtml = `
    <h4 class="text-light text-start">
      <i class="fas fa-clock loading"></i>${stopCode}
    </h4>
    <div class="row" id="bus-row-${stopCode}"></div>
    <br/>
  `;
  busRow.innerHTML = rawHtml;
  busContainer.appendChild(busRow);
}

function createBusItem(
  stopCode,
  busCode,
  busDestination,
  busColor,
  expectedTime1,
  distance1,
  expectedTime2,
  distance2,
) {
  const busStopRowId = `bus-row-${stopCode}`;
  const row = document.getElementById(busStopRowId);
  const item = document.createElement('div');
  item.className = 'col';
  const opacity = expectedTime1 ? 1 : 0.3;
  const line1 = expectedTime1 ? `${expectedTime1} (${distance1} mts.)` : ``;
  const line2 = expectedTime2 ? `${expectedTime2} (${distance2} mts.)` : ``;
  const rawHtml = `
    <div class="card animate" style="opacity:${opacity}">
      <h4 class="card-header">
        <span class="badge badge-primary" style="background-color: ${busColor};">${busCode}</span>
      </h4>
      <div class="card-body">
        <p class="card-text">${line1}</p>
        <p class="card-text">${line2}</p>
      </div>
      <div class="card-footer"">
        <b>a ${busDestination}</b>
      </div>
    </div>
  `;
  item.innerHTML = rawHtml;
  row.appendChild(item);
}

async function retrieveBusStop(codsimt) {
  const jwt =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzM0NzM1MTY5MzJ9.LphGjvJ9DdgZnhM4oQHdP4FpNd_QX5rJRhOLiGQBuiA';
  const redUrl = `https://www.red.cl/predictor/prediccion?t=${jwt}&codsimt=${codsimt}&codser=`;
  const { data } = await axios.get(redUrl);
  return data;
}

async function retrieveBusStops() {
  const stopCodes = ['PD106', 'PD53'];
  const promises = await Promise.all(stopCodes.map(retrieveBusStop));
  cleanBusRows();
  promises.forEach((busStop) => {
    createBusRow(busStop.paradero);
    busStop.servicios.item.forEach((bus) => {
      createBusItem(
        busStop.paradero,
        bus.servicio,
        bus.destino,
        bus.color,
        bus.horaprediccionbus1,
        bus.distanciabus1,
        bus.horaprediccionbus2,
        bus.distanciabus2,
      );
    });
  });
}

async function scheduleBusStop() {
  await retrieveBusStops();
  setInterval(() => retrieveBusStops(), 20000);
}

scheduleBusStop();
