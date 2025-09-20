document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  const formMessage = document.getElementById("formMessage");

  try {
    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, mensaje }),
    });

    const result = await response.json();

    if (result.success) {
      formMessage.textContent = "✅ Mensaje enviado con éxito.";
      formMessage.style.color = "green";
      document.getElementById("contactForm").reset();
    } else {
      formMessage.textContent = "❌ Error al enviar el mensaje.";
      formMessage.style.color = "red";
    }
  } catch (error) {
    formMessage.textContent = "⚠️ No se pudo conectar con el servidor.";
    formMessage.style.color = "orange";
  }
});
