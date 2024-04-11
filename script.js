function oblicz() {
    var wartosc = document.getElementById('inputVariable').value;
    wartosc = parseFloat(wartosc);
    if (!isNaN(wartosc)) {
      var wynik = wartosc * 2115;
      document.getElementById('result').innerText = "Twoja liczba x 2115 to: " + wynik;
    } else {
      document.getElementById('result').innerText = "Proszę wprowadzić liczbę.";
    }
  }