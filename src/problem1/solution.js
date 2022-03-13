//Three ways to sum to n

//Plain way of summing to n
var sum_to_n_a = function (n) {
    sum = 0;
    for (let i = 1; i <= n; ++i) {
        sum += i;
    }
    return sum;
};

//Using the summation formula from mathematics
var sum_to_n_b = function (n) {
    return (n) * (n + 1) / 2;
};

//Using the pairing method
var sum_to_n_c = function (n) {
    if (n == 1) return 1;

    let i = 1;
    let j = n;
    let onePairSum = 1 + n;
    let counter = 0;
    while (i < j) {
        counter++;
        i++;
        j--;
    }
    return counter * onePairSum + (n % 2 == 0 ? 0 : ((n + 1) / 2));


};
