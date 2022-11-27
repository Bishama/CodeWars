/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). */

function DNAStrand(dna){
    //P => string
    //R => string
    
    // Create a dictionary
    const dna_dict = {
      'A':'T',
      'T':'A',
      'C':'G',
      'G':'C'
    }
    
    let res = dna.split('').map(x => dna_dict[x]).join('')
    
    return res;
    Object.keys(dna_dict).forEach((key) => {
    let res = dna.split('').replaceAll(key, dna_dict[key]).join('');
  });
    return res;
  }