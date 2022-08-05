<div align="center">

# get-current-season-with-date

</div>

### How to use 🤔
He has 2 solutions to use this module

- First you have to recover the current seasons array with the `getCurrentSeasonsArray()` function.

```typescript
import { getCurrentSeasonsArray } from 'get-current-season-with-date';

let currentSeasonsArray = getCurrentSeasonsArray();
```

After this, you just have to call the "getSeasonByArray()" function

```typescript
import { getCurrentSeasonsArray, getSeasonByArray } from 'get-current-season-with-date';

let currentSeasonsArray = getCurrentSeasonsArray();
let currentSeason = getSeasonByArray(currentSeasonsArray);

return currentSeasonsArray;
//> spring, summer, fall or winter
```

- If you don't need to recover the seasons array, you can simply call `getSeasonByArray()` without the array

```typescript
import { getSeasonByArray } from 'get-current-season-with-date';

let currentSeason = getSeasonByArray();

return currentSeasonsArray;
//> spring, summer, fall or winter
```

<hr/>

**If you want the API is available [here](get-current-season-with-date/modules.md)**

<br/>

> MIT © 2022 YuZesky <<yuri.delzesky@gmail.com>>