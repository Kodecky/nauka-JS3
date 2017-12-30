function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return 'Nieprawidłowe dane. Podaj całkowite liczby dodatnie.';
    }
    return 'Wynik równania to: ' + a * h / 2;
}
alert(getTriangleArea(10, 6));
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(15, 20);
var triangle3Area = getTriangleArea(20, 25);