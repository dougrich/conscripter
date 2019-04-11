# Contextual Vowel Symbols

## Specific Case

Contaxia, the example language, is an abugida where exach consonant has a symbol, and the vowel that follows it is placed either above or below the consonant symbol.

For example, `ha` is written as `ħ`, and `na` is written `ꞥ`.

Consonants are broken into three `classes`: 'diagonal bar', 'low bar' and 'high bar'. The class determines the position that the vowel symbol appears.

## Current way to accomplish this

1. Create the `h` symbol, devoid of any vowel
2. Create the `n` symbol, devoid of any vowel
3. Create the bar symbol for the `a` vowel, devoid of any consonant
4. Create the `ħ` symbol as a substitution for `ha` with a high specificity than the `h` or `a` substitutions
5. Create the `ꞥ` symbol as a substitution for `na`

Notably this creates a bad combinatorics problem - with the english alphabet alone there would be over a hundred symbols.

## How to ideally do this

1. Create the `h` symbol, devoid of any vowel
2. Create the `n` symbol, devoid of any vowel
3. Create the bar symbol for the `a` vowel, devoid of any consonant
4. Specify that if `a` is prefixed by the 'high bar' class, it should use the `a` symbol but shifted up.
5. Specify the 'high bar' class of letters.
6. Specify that if `a` is prefixed by the 'diagonal bar' class, it should use a different symbol.

This inverts the combinatorics problem - instead of a hundred symbols for the english alphabet, it would only need around 30.