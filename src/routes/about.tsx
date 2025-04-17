import type { Component } from "solid-js";

const About: Component = () => {
  return (
    <main class="p-8 max-w-xl mx-auto">
      <h1 class="text-2xl font-bold text-green-600 mb-4">O UnoCSS Listi Zadataka</h1>
      <p class="text-lg text-gray-700">
        Ovo je jednostavna To-Do lista napravljena uz pomoć SolidStart i UnoCSS. 
        Koristi reaktivnost SolidJS-a za upravljanje podacima i stilizirana je koristeći 
        korisne utility klase iz UnoCSS-a.
      </p>
      <p class="mt-4 text-gray-600">
        Možeš dodavati stavke, brisati ih i uživati u brzom i responzivnom interfejsu 
        bez dodatnog CSS-a. 
      </p>
    </main>
  );
};

export default About;
