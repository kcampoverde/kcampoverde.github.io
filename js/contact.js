document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");

  if (!form) return; // Salir si no existe el formulario

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Validación básica
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      messageBox.textContent = "⚠️ Por favor, introduce un email válido.";
      messageBox.className = "form-message error show";
      return;
    }

    // Configuración del endpoint basado en el entorno
    const apiUrl = window.location.hostname === "localhost" 
      ? "http://localhost:5000/send" 
      : "https://tu-dominio.com/api/send";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        messageBox.textContent = "✅ Mensaje enviado con éxito.";
        messageBox.className = "form-message success show";
        form.reset();
      } else {
        messageBox.textContent = "❌ Error al enviar el mensaje: " + (result.message || "Desconocido");
        messageBox.className = "form-message error show";
      }
    } catch (err) {
      messageBox.textContent = "⚠️ Error de conexión con el servidor.";
      messageBox.className = "form-message error show";
      console.error("Error en el envío del formulario:", err);
    }

    // Ocultar el mensaje después de un tiempo
    setTimeout(() => {
      messageBox.classList.add("fade-out");
      setTimeout(() => {
        messageBox.className = "form-message";
        messageBox.textContent = "";
      }, 600);
    }, 5000);
  });
});
