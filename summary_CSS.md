# Summary CSS for JavaScript-Library

## Media query for size control: `@media screen and (max-width:...)`

1. Syntax

- The syntax is self-explanatory

```
@media screen and (max-width: 2000px) {
    * {
        --BIG-FONT: 4rem;
    }
}
@media screen and (max-width: 1200px) {
    * {
        --BIG-FONT: 3rem;
    }
}
```

2. Phone vs computer monitor

- Let's assume 480 px is max width of mobile phone display.

- The declarations of CSS by default will be applicable to computer monitor.
  This means our media query will be the declaration for mobile user:

  ```
  @media screen and (max-width: 480px) {
    * {
        --MAIN-WRAPPER-WIDTH: 90%;
    }
  }
  ```

  Switch to 90% of phone screen width.

- For smooth transition when the viewport width is changing you might need to
  use higher value for the `max-width` in media query.

3. Padding of body element that is changing

- Achievable with point 2 if the `max-width` in screen media query is high
  enough. Smooth transition!
