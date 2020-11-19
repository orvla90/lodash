const _ = {
    clamp(num, lowerBound, upperBound){
        if(num<=lowerBound){
            return lowerBound;
        }else if(num>=upperBound){
            return upperBound;
        }else{
            return num;
        }
    },
    inRange(num, start, end){
        if (end === undefined) {
            end = start;
            start = 0;
        };
        if (start > end) {
            let tmp = start;
            start = end;
            end = tmp;
        };
        if (num === this.clamp(num, start, end) && num != end) {
            return true;            
        };
        return false;
    },
    words(string){
        let list_words = [];
        for (let index = 0; index < string.length; index++) {
            if (string[index]===' ') {
                list_words.push(string.slice(0, index));
                string = string.slice(index+1, string.length)
            };
        };
        list_words.push(string)
        return list_words;
    },
    pad(string, num){
        if (num > string.length){
            return " ".repeat(Math.floor((num-string.length)/2)) + string + ' '.repeat(Math.round((num-string.length)/2));
        };
        return string;
    },
    has(object, parameter){
        let result = false;
        const keys = Object.keys(object);
        for (let index = 0; index < keys.length; index++) {
            if (keys[index] === parameter) {
                result = true;
            };
        };
        return result;
    },
    invert(object){
        let inverted = {};
        const keys = Object.keys(object);
        for (let index = keys.length-1; index >= 0; index--) {
            inverted[object[keys[index]]] = keys[index];
        };
        return inverted;
    },
    findKey(object, predicate){
        let keys = Object.keys(object);
        for (let index = 0; index < keys.length; index++) {
            let key = keys[index];
            let value = object[keys[index]];
            if (predicate(value)){
                return key;
            };
        };
        return undefined;
    },
    drop(array, num){
        if (num === undefined) {
            num = 1;
        };
        let popped = [];
        for (let index = num; index < array.length; index++) {
            popped.push(array[index]);
        };
        return popped;
    },
    dropWhile(array, predicate){
        let finalIndex = 0;
        for (let index = 0; index < array.length; index++) {
            if (!predicate(array[index], index)) {
                finalIndex = index;
                break
            };
        };
        return _.drop(array, finalIndex);
    },
    dropWhile(array, predicate){
        let finalIndex = 0;
        for (let index = 0; index < array.length; index++) {
            if (!predicate(array[index], index)) {
                finalIndex = index;
                break
            };
        };
        return _.drop(array, finalIndex);
    },
    chunk(array, num){
      if (num === undefined) {
            num = 1;
        };
        let finalArray = [];
        for (let index = 0; index < array.length; index+=num) {
            let tempArray = [];
            let count = 0;
            while (count<num && array.length > count+index) {
                tempArray.push(array[index+count]);
                count++;
            };
            finalArray.push(tempArray);
        };
        return finalArray;
    },
};




// Do not write or modify code below this line.
module.exports = _;
