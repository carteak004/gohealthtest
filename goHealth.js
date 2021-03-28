// Check if the file name is passed in the command line
if(process.argv.length == 2)
{
  console.error('File name not found. Command expected to be node goHealth.js [file path]');
  process.exit(1);
}
else
{
  calculateBigrams(process.argv[2]);
}

// Function to calculate Bigrams
async function calculateBigrams(file)
{
  var fs = require('fs'); // To read the contents of the file
  try
  {
    await fs.readFile(file, 'utf8', function(err, data)
    {
      if (err) throw err;

      // Variable declaration
      var dataFromFile = '';
      var bigramArray = [];

      dataFromFile = data.toLowerCase(); // Read the data from text file and store everything in lower case to make parsing easy

      if (dataFromFile == '')
      {
        console.error('File empty. Aborting process');
        process.exit(1);
      }
      dataFromFile = dataFromFile.match(/[\w']+/g); //Just picked words from the text excluding new lines and punctuations. Used this for the possibility of Words can be alphanumeric

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
      }, {}); // Passed {} as initial value

      console.log('Bigrams \n', bigramArray);
    });
  }
  catch (e)
  {
    console.log('Error', e.stack);
  }
}
