console.log('ProjectedRetirement init');
var rut = prompt("Indique un rut", "15960907");
var initdate = prompt("Indique una fecha", "2016-10-10");
function sampleCallbackFunction(event) {
    console.log('my custom callback for my-sws widget');
    var customEvent = event.detail[0];
    switch (customEvent.eventName) {
    case 'onClickContactCappedAPVCustomer':
        console.log("Se cliqueó el botón para llamar a un cliente que está topado en APV", customEvent.data);
        break;
    case 'onRetirementAgeChange':
        console.log("Se cambió la edad de retiro simulada", customEvent.updatedData, customEvent.data);
        break;
    case 'onIncomeChange':
        console.log("Se cambió el ingreso", customEvent.updatedData, customEvent.data);
        break;
    case 'onCustomAPVChange':
        console.log("Se cambió el APV simulado", customEvent.updatedData, customEvent.data);
        break;
    case 'onClickAPV':
        console.log("Se quiere contratar más APV", customEvent.data);
        break;
    }
} 
var swsWidget = document.createElement('my-sws');
swsWidget.setAttribute('rut', rut);
swsWidget.setAttribute('init-date', initdate);
swsWidget.addEventListener('wellness-score-event', sampleCallbackFunction);
document.DXWidgetManagerLoaded.content.appendChild(swsWidget);
console.log('ProjectedRetirement ready');
