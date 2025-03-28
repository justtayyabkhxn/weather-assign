export const fetchWeather = async (city) => {
    const API_KEY = "f72114c0510d3a49dc64db1fe02a353d";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Failed to fetch weather data");
        return await response.json();
    } catch (error) {
        console.error("Weather API Error:", error);
        return null;
    }
};
