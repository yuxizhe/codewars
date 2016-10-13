// 去除元音

function disemvowel(str) {
    var vowel = ["a", "e", "i", "o", "u"];
    var strArray = Array.prototype.slice.call(str);
    strArray.forEach(function(value, index) {
        if (vowel.indexOf(value.toLowerCase()) != "-1") {

            strArray.splice(index, 1)
        }
    });
    return strArray.join('');
}
// 找出数组中前后相等的位置  Equal Sides Of An Array
function findEvenIndex(arr) {
    //Code goes here!
    return sumbetween(1, arr);

}

function sumbetween(index, arr) {
    var sumTop = 0;
    var sumBotton = 0;
    var n = 0;
    for (n = 0; n < index; n++) {
        sumTop += arr[n]
    };
    for (n = index + 1; n < arr.length; n++) {
        sumBotton += arr[n]
    };
    if (sumBotton == sumTop) {
        console.log(index);
        return index;
    } else {
        if (index < arr.length) {
            // 这句一定要加return 
            return sumbetween(index + 1, arr)
        } else {
            return -1;
        }
    }
}
// 例子
function findEvenIndex1(arr) {
    for (var i = 1; i < arr.length - 1; i++) {
        if (arr.slice(0, i).reduce((a, b) => a + b) === arr.slice(i + 1).reduce((a, b) => a + b)) {
            return i;
        }
    }
    return -1;
}

// 找出齐偶数
function iqTest(numbers) {
    // 字符串空格数组 split
    var number = numbers.split(' ');
    var even = [];
    var odd = [];
    for (var n = 0; n < number.length; n++) {
        number[n] % 2 == 0 ? even.push(n) : odd.push(n);
    }
    // 字符串前面加个+ 可以转化为数字
    return even.length > odd.length ? +odd[0] + 1 : +even[0] + 1;
}

// 去除最小数
function removeSmallest(numbers) {
    var index = 0;
    var min = numbers[0];
    //可用 Math.min.apply(null,numbers)
    for (var n = 0; n < numbers.length; n++) {
        if (numbers[n] < min) {
            index = n;
            min = numbers[n];
        }
    }
    numbers.splice(index, 1);
    return numbers;


}

//团购券验校
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode === correctCode && getdate(currentDate) <= getdate(expirationDate)) {
        return true
    } else {
        return false;
    }
}

function getdate(date) {
    var getdate = date.split(' ');
    var newdate = [];
    newdate[1] = { "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7, "Augest": 8, "September": 9, "October": 10, "November": 11, "December": 12 }[getdate[0]] - 1;
    newdate[2] = +Array.prototype.slice.call(getdate[1])[0];
    newdate[0] = +getdate[2];
    var d = new Date();
    d.setFullYear(newdate[0], newdate[1], newdate[2]);
    return d;
}
