// Check if the file name is passed in the command line
if(process.argv.length == 2)
{
  console.error('File name not found. Command expected to be node goHealth.js [file path]');
}
else
{
  console.log('The bigrams with their counts: \n', calculateBigrams(process.argv[2]));
}

// Function to calculate Bigrams
function calculateBigrams(file)
{
  var fs = require('fs'); // To read the contents of the file

  // Variable declaration
  var bigramArray = [];
  var dataFromFile = '';

  try
  {
    dataFromFile = fs.readFileSync(file, 'utf8'); // Read the contents of file
    dataFromFile = dataFromFile.toLowerCase() // Store the contents in lower case to make parsing easy
  }
  catch (e)
  {
    console.log('Error', e.stack);
  }

  if (dataFromFile == '')
  {
    console.error('File empty. Aborting process');
  }

  dataFromFile = dataFromFile.match(/[\w]+/g); //Just picked words from the text excluding new lines and punctuations. Used this for the possibility of Words can be alphanumeric

  // Construct bigram array
  for (i = 0; i < dataFromFile.length - 1; i++)
  {
    bigramArray[i] = dataFromFile[i] + ' ' + dataFromFile[i + 1];
  }

  // Count the bigrams
  bigramArray = bigramArray.reduce(function(obj, bigram)
  {
    if (!obj[bigram])
    {
      obj[bigram] = 1;
    }
    else
    {
      obj[bigram]++;
    }
    return obj;
  }, []); // Passed [] as initial value

  return bigramArray;
}

module.exports = calculateBigrams;
