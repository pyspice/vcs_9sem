function gcd(x, y) {
    while (x) {
        var tmp = x;
        x = y;
        y = tmp % y;
    }
    return x;
}