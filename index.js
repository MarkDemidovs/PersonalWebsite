function updateLatviaTime() {
      const options = {
        timeZone: 'Europe/Riga',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(new Date());
      document.getElementById('latvia-time').textContent = `TIME IN LATVIA - ${timeStr}`;
    }

    updateLatviaTime(); // Initial call
    setInterval(updateLatviaTime, 1000); // Update every second