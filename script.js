document.addEventListener('DOMContentLoaded', () => { 
  const btnTema = document.getElementById('btnTema');
  const btnAumentar = document.getElementById('btnAumentarFonte'); 
  const btnDiminuir = document.getElementById('btnDiminuirFonte'); 
  const btnCalcular = document.getElementById('btnCalcular');
  const inputHoras = document.getElementById('horasTrânsito'); 
  const divResultado = document.getElementById('resultado');
  const textoResultado = document.getElementById('textoResultado'); 
  let tamanhoFonte = 16;

  // Aumentar / Diminuir Fonte
  if (btnAumentar && btnDiminuir) { 
    btnAumentar.addEventListener('click', () => { 
      if (tamanhoFonte < 26) {
        tamanhoFonte += 2;
        document.documentElement.style.fontSize = `${tamanhoFonte}px`;
      }
    });

    btnDiminuir.addEventListener('click', () => { 
      if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.documentElement.style.fontSize = `${tamanhoFonte}px`;
      }
    });
  }

  // Alternar Modo Claro / Escuro 
  if (btnTema) {
    btnTema.addEventListener('click', () => { 
      document.body.classList.toggle('light-mode');
      btnTema.textContent = document.body.classList.contains('light-mode')
        ? '☀ Modo Claro'
        : '🌙 Modo Escuro';
    });
  }

  // Lógica do Simulador (240 dias letivos/úteis) 
  if (btnCalcular) {
    btnCalcular.addEventListener('click', () => {
      const horasPorDia = parseFloat(inputHoras.value);
      if (isNaN(horasPorDia) || horasPorDia <= 0) { 
        alert("Por favor, digite um valor válido de horas."); 
        return;
      } 

      const horasSalvasAno = Math.round(horasPorDia * 240); 
      const diasInteirosSalvos = Math.round(horasSalvasAno / 24);

      textoResultado.innerHTML = `
        Estudando com métodos adaptativos, você otimiza cerca de <strong>${horasSalvasAno} horas de conhecimento por ano</strong>!<br>
        Isso equivale a <strong>${diasInteirosSalvos} dias inteiros de aprendizado contínuo</strong> para impulsionar seus estudos e carreira.
      `;
      divResultado.classList.remove('hidden');
    });
  }
});