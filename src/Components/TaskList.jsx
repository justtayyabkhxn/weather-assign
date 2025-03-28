import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../store/taskSlice";
import { fetchWeather } from "../utils/weatherService";

const outdoorKeywords = ["outdoor", "walk", "park", "run", "cycling"];

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null); 

  useEffect(() => {
    const fetchWeatherData = async () => {
      const city = "Aligarh"; 
      const weatherData = await fetchWeather(city);

      console.log("Weather Data:", weatherData); 

      if (weatherData) {
        setWeather({
          temp: Math.round(weatherData.main.temp), 
          condition: weatherData.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
        });
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="task-list">
      {tasks.length === 0 ? <p>No tasks yet.</p> : null}

      {tasks.map((task) => (
        <div key={task.id} className={`task ${task.priority.toLowerCase()}`}>
          <span>{task.text} ({task.priority})</span>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>

          {outdoorKeywords.some((keyword) => task.text.toLowerCase().includes(keyword)) && weather && (
            <div className="weather-info">
              <img src={weather.icon} alt="Weather" />
              <span>{weather.temp}°C - {weather.condition}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
