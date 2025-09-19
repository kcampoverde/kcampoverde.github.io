document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  const formMessage = document.getElementById("formMessage");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (!nombre || !email || !mensaje) {
    formMessage.textContent = "⚠️ Todos los campos son obligatorios.";
    formMessage.style.color = "orange";
    return;
  }

  if (!validateEmail(email)) {
    formMessage.textContent = "⚠️ Por favor, introduce un correo electrónico válido.";
    formMessage.style.color = "orange";
    return;
  }

  try {
    const response = await fetch("https://api.example.com/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, mensaje }),
    });

    const result = await response.json();

    if (result.success) {
      formMessage.textContent = "✅ Mensaje enviado con éxito. Gracias por contactarme, te responderé pronto.";
      formMessage.style.color = "green";
      document.getElementById("contactForm").reset();
    } else {
      formMessage.textContent = "❌ Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.";
      formMessage.style.color = "red";
    }
  } catch (error) {
    formMessage.textContent = "⚠️ No se pudo conectar con el servidor.";
    formMessage.style.color = "orange";
  }
});
