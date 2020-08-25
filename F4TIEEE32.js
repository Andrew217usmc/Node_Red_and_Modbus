function convert(value, base = 2) {
    var [integer, fraction = ''] = value.toString().split('.');

    return parseInt(integer, base) + (integer[0] !== '-' || -1) * fraction
        .split('')
        .reduceRight((r, a) => (r + parseInt(a, base)) / base, 0);
}
var x = msg.payload[0];
var y = msg.payload[1];
var a = parseInt(x,10).toString(2)
while (a.length < 16)
{
    z = '0';
    var a = z.concat(a);
}

var b = parseInt(y,10).toString(2)
while (b.length < 16)
{
    z = '0';
    var b = z.concat(b);
}
var res = a.concat(b);
var sign = res.substring(0,1);
var exp = res.substring(1,9);
var man = res.substring(9);
exp = parseInt(exp,2)-127;
//exp = exp.toString(10);
z = '1';
man = z.concat(man);
var LeftofPoint = man.substring(0,(exp+1));
var RightofPoint = man.substring(exp+1);
z = '.';
var mantissa = LeftofPoint.concat(z);
mantissa = mantissa.concat(RightofPoint);
mantissa = convert(mantissa);
z = '-';
if (sign == '1'){
    var FinalResult = z.concat(mantissa);}
if (sign == '0'){
    var FinalResult = mantissa;
}
msg.payload=FinalResult;
return msg;
