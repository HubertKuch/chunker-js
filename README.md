# Arrays chunker

Chunk single-dimensional array into multidimensional.

## By value
```javascript
const arr = [2, 4, '.', 5, 1];

// will be [ [2, 4], ['.', 5, 1] ]
const chunks = Chunker.divideByValue(arr, '.');
```
__
## By callback
```javascript
const arr = [2, 4, '.', 5, 1];

// will be [ [2, 4], ['.', 5, 1] ]
const chunks = Chunker.divideByCallback(arr, (el) => el === ".");
```

## By indexes
```javascript
const arr = [2, 4, '.', 5, 1];

// will be [ [2, 4], ['.', 5, 1] ]
const chunks = Chunker.divideByIndexes(arr, [2]);
```
