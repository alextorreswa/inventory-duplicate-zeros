/**
 * Inventory Management Update:
 * Duplicate each 0 in-place, shifting elements right.
 * Any elements that fall beyond the original length are ignored.
 *
 * @param {number[]} inventory
 * @returns {void}
 */
function duplicateZeros(inventory) {
  const n = inventory.length;
  let zeros = 0;

  // Count how many zeros exist
  for (let k = 0; k < n; k++) {
    if (inventory[k] === 0) zeros++;
  }

  // i: reads original; j: writes to "virtual expanded" index
  let i = n - 1;
  let j = n + zeros - 1;

  // Move backward to avoid overwriting unread values
  while (i >= 0) {
    // Write the value if j is within the real array bounds
    if (j < n) inventory[j] = inventory[i];

    // If the value is zero, write it one more time
    if (inventory[i] === 0) {
      j--;
      if (j < n) inventory[j] = 0;
    }

    i--;
    j--;
  }
}

module.exports = { duplicateZeros };
