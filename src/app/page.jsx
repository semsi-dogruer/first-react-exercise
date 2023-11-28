"use client";
import alienPlanets from "@/library/planets.js";
import { useState } from "react";

export default function Home() {
  const [aliens, setAliens] = useState(alienPlanets);
  return (
    <div>
      <h1>1</h1>
      <hr />
      <div className='blueBox'></div>
      <h1>2</h1>
      <hr />
      <img src='/monkey.png' alt='a picture of a meme' />
      <h1>3</h1>
      <hr />
      <h3>Alien Planets</h3>
      <div className='container'>
        {aliens.map((alien) => {
          return (
            <div className='cards' key={alien.id}>
              <p>{alien.emoji}</p>
              <p>{alien.name}</p>
              <p>
                {alien.name} is {alien.distanceFromEarth} from earth.{" "}
                {alien.name} is believed{" "}
                {alien.hasLife ? "to have life." : "to not have life."} The
                atmosphere of {alien.name} is {alien.atmosphere}.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
