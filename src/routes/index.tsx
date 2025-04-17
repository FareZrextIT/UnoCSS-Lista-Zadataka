import { createSignal } from "solid-js";
import type { Component } from "solid-js";

const Home: Component = () => {
  const [items, setItems] = createSignal<string[]>([]);
  const [input, setInput] = createSignal("");

  const addItem = () => {
    const value = input().trim();
    if (value) {
      setItems([...items(), value]);
      setInput("");
    }
  };

  const removeItem = (index: number) => {
    setItems(items().filter((_, i) => i !== index));
  };

  return (
    <main class="p-8 max-w-xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-6 text-blue-700">
        📝 UnoCSS Lista Zadataka
      </h1>

      <div class="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Unesi zadatak..."
          class="flex-1 p-3 border border-blue-400 rounded outline-none focus:border-blue-600"
          value={input()}
          onInput={(e) => setInput(e.currentTarget.value)}
        />
        <button
          class="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition"
          onClick={addItem}
        >
          Dodaj
        </button>
      </div>

      <ul class="space-y-3">
        {items().length === 0 && (
          <p class="text-gray-500 text-center">Lista je prazna.</p>
        )}
        {items().map((item, i) => (
          <li
            class="flex justify-between items-center p-4 bg-blue-100 rounded shadow-sm"
            
          >
            <span class="text-blue-900 font-medium">{item}</span>
            <button
              class="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => removeItem(i)}
            >
              Obriši
            </button>
          </li>
        ))}
      </ul>

      <footer class="mt-10 text-center text-sm text-gray-500">
        SolidStart + UnoCSS 
      </footer>
    </main>
  );
};

export default Home;
