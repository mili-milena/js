function findUniqueElements(array) {
    let unique = [];
    for (let i = 0; i < array.length; i++) {
      if (!includesElement(unique, array[i])) {
        unique.push(array[i]);
      }
    }
    return unique;
  }
