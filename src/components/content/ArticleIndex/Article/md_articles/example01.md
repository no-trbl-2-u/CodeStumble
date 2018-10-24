# This is another, seperate article

It will be used as :
>A testing platform <br> 
>To make sure that <br>
>all this stuff works right

```javascript
const test = (arr) => {
  let tmp = [...arr]
  const allDbl = tmp.map((ea) => ea * 2)
  const allHlv = tmp.map((ea) => ea / 2)
  return [...allDbl, ...allHlv]
}

```

**This concludes my .md test**