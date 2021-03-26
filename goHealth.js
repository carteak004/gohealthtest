console.log('this is a rest');
calculateBigrams('gohealth.txt');
async function calculateBigrams(file) {
  console.log('this is a rest');
  var splitArray = '';
  // var rawFile = new XMLHttpRequest();
  // rawFile.open("GET", file, false);
  // rawFile.onreadystatechange = function() {
  //   if (rawFile.readyState === 4) {
  //     if (rawFile.status === 200 || rawFile.status == 0) {
  //       splitArray = rawFile.responseText;
  //     }
  //   }
  // }
  // rawFile.send(null);

  var splitArray = await file.text();

  splitArray = splitArray.match(/[\w']+/g); //Just picked words from the text excluding new lines and punctuations. Used this for the possibility of Words can be alphanumeric
  var bigramArray = [];

  for (i = 0; i < splitArray.length - 1; i++) {
    bigramArray[i] = splitArray[i] + ' ' + splitArray[i + 1];
    // bigramArray.push(splitArray[i] + ' ' + splitArray[i+1]);
  }

  bigramArray = bigramArray.reduce(function(obj, bigram) {
    if (!obj[bigram]) {
      obj[bigram] = 1;
    } else {
      obj[bigram]++;
    }
    return obj;
  }, {});

  console.log(bigramArray);
  return bigramArray;
}
