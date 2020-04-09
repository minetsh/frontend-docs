# [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)


```
function objectIs(x: any, y: any) {
	if (x === y) {
	   // 判断 -0 +0
		return x !== 0 || 1 / x === 1 / y;
	} else {
	   // 判断 NaN
		return x !== x && y !== y;
	}
}
```