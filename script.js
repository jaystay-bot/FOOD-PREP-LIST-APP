(function () {
  const synth = window.speechSynthesis;
  const transcripts = window.transcripts || {};
  const ids = {
    mission: document.getElementById('mission-text'),
    goal: document.getElementById('goal-text'),
    retention: document.getElementById('retention-text')
  };

  Object.keys(ids).forEach((key) => {
    if (ids[key]) ids[key].textContent = transcripts[key] || '';
  });

  function speak(key) {
    if (!synth || !transcripts[key]) return;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(transcripts[key]);
    utterance.rate = 1;
    utterance.pitch = 1;
    synth.speak(utterance);
  }

  document.querySelectorAll('[data-speak]').forEach((btn) => {
    btn.addEventListener('click', () => speak(btn.getAttribute('data-speak')));
  });

  document.querySelectorAll('[data-stop]').forEach((btn) => {
    btn.addEventListener('click', () => synth && synth.cancel());
  });
})();
