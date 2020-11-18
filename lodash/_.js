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
};


console.log(_.words('Hi hello matias'))


// Do not write or modify code below this line.
module.exports = _;