import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = { name, email, password, balance };
      const response = await axios.post(
        "http://localhost:3000/login",
        formData);
      console.log("✅ Response:", response.data);
      alert("User registered successfully!");

      // Reset form after submit
      setName("");
      setEmail("");
      setPassword("");
      setBalance("");
    } catch (error) {
      console.error("❌ Error submitting form:", error.response ? error.response.data : error.message);
      alert("Error submitting form!");
    }
  }

  return (
    <>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Balance:
          <input
            type="number"
            name="balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;