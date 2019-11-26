function gcd(x, y) {
    while (y) {
        var tmp = x;
        x = y;
        y = tmp % y;
    }
    return x;
}