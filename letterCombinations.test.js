const letterCombinations = require('./letterCombinations');

describe('letterCombinations', () => {
  it('should generate combinations for valid digits', () => {
    expect(letterCombinations('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    expect(letterCombinations('456')).toEqual(["gjm", "gjn", "gjo", "gkm", "gkn", "gko", "glm", "gln", "glo", "hjm", "hjn", "hjo", "hkm", "hkn", "hko", "hlm", "hln", "hlo", "ijm", "ijn", "ijo", "ikm", "ikn", "iko", "ilm", "iln", "ilo"]);
  });

  it('should handle invalid digits', () => {
    expect(letterCombinations('1')).toEqual(['']);
    expect(letterCombinations('0')).toEqual(['']);
    expect(letterCombinations('23455')).toEqual([''])
    expect(letterCombinations('234')).toEqual(["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"]);
  });
});
