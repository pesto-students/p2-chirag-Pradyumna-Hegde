function find_judge(n, trust) {
    let judge = -1;
    let trust_gains = new Array(n + 1);

    trust.forEach(i => {
        trust_gains[i[0]]--;
        trust_gains[i[1]]++;
    });

    for (let i = 1; i <= n; i++) {
        if (trust_gains[i] == n - 1) {
            judge = i;
        }
    }
    return judge;
}


let n = 3;
const trust = [[1, 3], [2, 3]];
console.log(find_judge(n, trust));