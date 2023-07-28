# Age Calculator App style-guide

The project will be built to be responsive for two devices:

- mobile - 375px
- desktop - 1440px

## Color

```css
--purple: hsl(259, 100%, 65%);
--light-red: hsl(0, 100%, 67%);
--white: hsl(0, 0%, 100%);
--off-white: hsl(0, 0%, 94%);
--light-grey: hsl(0, 0%, 86%);
--smokey-grey: hsl(0, 1%, 44%);
--off-black: hsl(0, 0%, 8%);
```

## Gap

```css
--gap-0: 0px;
--gap-1: 1px;
--gap-1_25: 0.125rem;
--gap-2_5: 0.25rem;
--gap-3_75: 0.375rem;
--gap-5: 0.5rem;
--gap-6_25: 0.625rem;
--gap-7_5: 0.75rem;
--gap-8_75: 0.875rem;
--gap-10: 1rem;
--gap-12_5: 1.25rem;
--gap-15: 1.5rem;
--gap-17_5: 1.75rem;
--gap-20: 2rem;
--gap-22_5: 2.25rem;
--gap-27_5: 2.75rem;
--gap-30: 3rem;
--gap-35: 3.5rem;
--gap-40: 4rem;
--gap-50: 5rem;
--gap-60: 6rem;
--gap-70: 7rem;
--gap-80: 8rem;
--gap-90: 9rem;
--gap-100: 10rem;
--gap-110: 11rem;
--gap-120: 12rem;
--gap-130: 13rem;
--gap-140: 14rem;
--gap-150: 15rem;
--gap-160: 16rem;
--gap-180: 18rem;
--gap-200: 20rem;
--gap-240: 24rem;
```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-1: 2px;
--radius-2: 4px;
--radius-3: 6px;
--radius-4: 8px;
--radius-5: 12px;
--radius-6: 16px;
--radius-7: 20px;
--radius-8: 24px;
--radius-9: 26px;
--radius-10: 28px;
--radius-11: 30px;
--radius-12: 32px;
--radius-13: 34px;
--radius-14: 36px;
--radius-15: 38px;
--radius-16: 40px;
--radius-17: var(--radius-8) var(--radius-8) 200px var(--radius-8);
```

## Typography

```css
--ff-Poppins-sans-serif: var(--ff-Poppins), sans-serif;
--ff-Poppins: "Poppins";
--fs-1: 0.75rem;
--fs-2: 0.875rem;
--fs-3: 1.25rem;
--fs-4: 2rem;
--fs-5: 3.5rem;
--fs-6: 6.5rem;
--fw-400: 400;
--fw-700: 700;
--fw-800: 800;
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0em;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
```

## Font Face

```css
@font-face {
  font-family: var(--ff-Poppins);
  font-weight: var(--fw-700);
  font-style: normal;
  src: url() format("woff2"), url() format("woff"), url() format("ttf");
}

@font-face {
  font-family: var(--ff-Poppins);
  font-weight: var(--fw-700);
  font-style: italic;
  src: url() format("woff2"), url() format("woff"), url() format("ttf");
}

@font-face {
  font-family: var(--ff-Poppins);
  font-weight: var(--fw-800);
  font-style: normal;
  src: url() format("woff2"), url() format("woff"), url() format("ttf");
}

@font-face {
  font-family: var(--ff-Poppins);
  font-weight: var(--fw-800);
  font-style: italic;
  src: url() format("woff2"), url() format("woff"), url() format("ttf");
}

@font-face {
  font-family: var(--ff-Poppins);
  font-weight: var(--fw-400);
  font-style: italic;
  src: url() format("woff2"), url() format("woff"), url() format("ttf");
}

@font-face {
  font-family: var(--ff-Poppins);
  font-weight: var(--fw-400);
  font-style: normal;
  src: url() format("woff2"), url() format("woff"), url() format("ttf");
}
```
