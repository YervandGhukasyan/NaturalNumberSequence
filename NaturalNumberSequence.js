class NaturalNumberSequence {
    findMissNumberSequence(arr){
        let counter = 1
        arr.sort((a, b) => a - b );
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]  < counter) {
                continue;
            }
            if(arr[i] === counter) {
                counter++;
                continue;
            }
            if(arr[i] > counter) {
                return counter
            }
        }
        return arr
    }
}
module.exports = NaturalNumberSequence;