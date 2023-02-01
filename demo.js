let methodErNaamDiyeDe = category => {
  let finalCategory = '';
  category = category.trim().toLowerCase();
  let splitedCategory = category.split(' ');
  let specialCharacter = ['', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

  splitedCategory.forEach(element => {
    finalCategory = (specialCharacter.includes(element)) ?
      finalCategory + '' :
      finalCategory + element + ' ';
  });

  return finalCategory;
};

let methodErNaamDiyeDe2 = (category = "Testing category") => {
  let finalCategory = '';
  category = category.trim().toLowerCase();
  let splitedCategory = category.split('');
  let specialCharacter = [
    ' ', '`', '~', '!', '@', '#', '$',
    '%', '^', '&', '*', '(', ')', '-',
    '=', '+', '[', ']', '{', '}', ';',
    ':', '"', '\'', '<', '>', ',', '.', '?', '/', '\\', '_'
  ];

  splitedCategory.forEach((element, index) => {
    if (!specialCharacter.includes(element)) {
      if (
        splitedCategory[index - 1] == ' ' ||
        splitedCategory[index - 1] == undefined ||
        specialCharacter.includes(splitedCategory[index - 1])
      )
        finalCategory += (' ' + element.toUpperCase());
      else
        finalCategory += element;
    }
    else if (specialCharacter.includes(element))
      finalCategory += '';
  });

  return finalCategory.trimStart();
};

let category = "   %$$%   &   *** ()iNDiAn    meAL**(_)  _ + "
console.log(`The result is: ${methodErNaamDiyeDe2(category)}`);
