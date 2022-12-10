const elements = {
    state: 'batteryChargingStatus',
    cTime: 'batteryChargingTime',
    dTime: 'batteryDischargingTime',
    level: 'batteryLevel',
    statuses: 'statuses',
    error: 'error',
}

const el = (id) => document.getElementById(id) || null;


const updateBatteryUI = (battery) => {
    el(elements.level).textContent = (battery.level * 100) + '%';
    el(elements.cTime).textContent = battery.chargingTime.toLocaleString('ru-RU');
    el(elements.dTime).textContent = battery.dischargingTime.toLocaleString('ru-RU');

    if (battery.charging === true) {
        el(elements.state).textContent = 'Charging';
    }
    if (battery.charging === false) {
        el(elements.state).textContent = 'Discharging';
    }
}

const monitorBattery = (battery) => {
    updateBatteryUI(battery);
    battery.addEventListener('levelchange', updateBatteryUI.bind(null, battery));
    battery.addEventListener('chargingchange', updateBatteryUI.bind(null, battery));
    battery.addEventListener('dischargingtimechange', updateBatteryUI.bind(null, battery));
    battery.addEventListener('chargingtimechange', updateBatteryUI.bind(null, battery));
}

if ('getBattery' in navigator) {
    navigator.getBattery().then(monitorBattery);
} else {
    el(elements.statuses).style.display = 'none';
    el(elements.error).style.display = 'block';
}
