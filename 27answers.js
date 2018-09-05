
s= ''+1000000/k
f1= x=> s.slice(i=s.indexOf(x)+1, i+1)
f2= x=> x.reduce((a,n) => 1*a+n*1)

r= ['+',2,2,'']
R= i=> i? R(i-1).map(f1) : r
m= [1,2,3].map(R)
m.splice(Math.min(...m[1]), 0, 1)
m.splice(Math.min(...m[0]), 0, 4)
m.splice(Math.min(...m[0]), 0, 0)

a= [].concat(...m)
S= a.slice(7)

var [p,x]= [S.splice(3), S];
[p,x]= [p,x].map(f2)
a.splice(p,0,x)

answer = a.map((n,i) => 1+i+') '+(n? String.fromCharCode(n^96) : 'Your code here'))
console.log(answer);
