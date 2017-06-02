
var quotes = [
  'Do not well in the past, do not dream of the future, concentrate the mind on the present moment',
   'What we think, we become',
  'Three things that cannot be long hidden: the sun, the moon and the truth',
  'No one saves us but ourselves. No one can and no one may. We ourselves must walk the path',
  'We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves',
  'You will not be punished for your anger, you will punished by your anger',
  'The mind is everything. What you think you become',
  'It is better to travel well than to arrive',
  'You, yourself, as much as anybody in the entire universe, deserve your love and affection',
  'Work out your own salvation. Do not depend on others',
  'Even death is not to be feared by the one who has lived wisely',]

  function genQuote() {
    var randNum = Math.floor(Math.random() * 11) ;
    document.getElementById('quote').innerHTML = quotes[randNum];

  }
