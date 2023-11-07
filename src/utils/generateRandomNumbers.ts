function generateRandomNumbers(
    length: number,
    min: number,
    max: number
  ): number[] {
    if (max - min + 1 < length) {
      throw new Error(
        "Cannot generate unique random numbers with the given range and length."
      );
    }
  
    const uniqueNumbers: Set<number> = new Set();
    while (uniqueNumbers.size < length) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(randomNum);
    }
  
    // Convert the set to an array for the final result
    const uniqueNumbersArray = Array.from(uniqueNumbers);
    console.log(uniqueNumbersArray);
    return uniqueNumbersArray;
  }

export default generateRandomNumbers