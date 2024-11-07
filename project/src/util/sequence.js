/**
 * Generates new sequence
 *
 * @param {int} rows Number of rows
 * @param {int} cols Number of columns
 * @returns {array} New sequence
 */
export function generateSequence(rows, cols) {
    let sequence = [];
    for (let i = 1; i < rows * cols; i++) {
        sequence.push(i);
    }
    sequence.push(null);
    return shuffleSequence(sequence);
}

/**
 * Shuffles existing sequence
 *
 * @param {array} sequence Sequence to shuffle
 * @returns {array} Shuffled sequence
 */
function shuffleSequence(sequence) {
    let currentIndex = sequence.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = sequence[currentIndex];
        sequence[currentIndex] = sequence[randomIndex];
        sequence[randomIndex] = temporaryValue;
    }
    if (checkSequenceIsValid(sequence)) {
        sequence = shuffleSequence(sequence);
    }
    return sequence;
}

/**
 * Validates sequence
 *
 * @param {array} sequence Sequence to check
 * @returns {boolean} Validation result
 */
export function checkSequenceIsValid(sequence) {
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] !== i + 1) {
            return false;
        }
    }
    if (sequence[sequence.length - 1] !== null) {
        return false;
    }
    return true;
}
