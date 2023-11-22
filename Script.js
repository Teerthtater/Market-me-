async function getTemperature() {
    const cityInput = document.getElementById('cityInput').value;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=YOUR_API_KEY`);
        const data = await response.json();

        const temperature = data.main.temp;
        document.getElementById('temperatureResult').innerHTML = `Temperature in ${cityInput}: ${temperature}°C`;
    } catch (error) {
        console.error('Error fetching temperature data:', error);
        document.getElementById('temperatureResult').innerHTML = 'Error fetching temperature data.';
    }
}
