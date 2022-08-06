<div align="center">

# get-current-season-with-date
Get the current season in the part of the globe where is a specified date using [kennebec](https://stackoverflow.com/a/5671172)'s code

</div>

### How to use 🤔
He has 2 solutions to use this module

- First you have to recover the current seasons array with the `getCurrentSeasonsArray()` function.

```typescript
import { getCurrentSeasonsArray } from 'get-current-season-with-date';

let currentSeasonsArray = getCurrentSeasonsArray();
```

After this, you just have to call the `getCurrentSeasonIdByArray()` function for getting the current season ID

```typescript
import { getCurrentSeasonsArray, getCurrentSeasonIdByArray } from 'get-current-season-with-date';

let currentSeasonsArray = getCurrentSeasonsArray();
let currentSeasonId = getCurrentSeasonIdByArray(currentSeasonsArray);

return currentSeasonId;
//> 1, 2, 3 or 4
```

- If you don't need to recover the seasons array, you can simply call `getCurrentSeasonIdByArray()` without the array (he will automatically generate it)

```typescript
import { getCurrentSeasonIdByArray } from 'get-current-season-with-date';

let currentSeasonId = getCurrentSeasonIdByArray();

return currentSeason;
//> 1, 2, 3 or 4
```

To recover a season with an ID, you just have to do it as above but by adding `getSeasonById` function

```typescript
import { getCurrentSeasonIdByArray, getSeasonById } from 'get-current-season-with-date';

let currentSeasonId = getCurrentSeasonIdByArray();
let currentSeason = getSeasonById(currentSeasonId);

return currentSeason;
//> spring, summer, fall or winter
```

### Internationalization 🌍
You can change the language of the output season with the premade locales or do them by yourself

If you want to change the locale, add the parameter `locale` to the option. Currently, `en_us` and `fr_fr` are available

```typescript
import { getCurrentSeasonIdByArray, getSeasonById } from 'get-current-season-with-date';

let currentSeasonId = getCurrentSeasonIdByArray();
let currentSeason = getSeasonById(currentSeasonId, {
    locale: 'fr_fr'
});

return currentSeason;
//> printemps, été, automne or hiver
```

You can also put personalized locales like this

```typescript
import { getCurrentSeasonIdByArray, getSeasonById } from 'get-current-season-with-date';

let currentSeasonId = getCurrentSeasonIdByArray();
let currentSeason = getSeasonById(currentSeasonId, {
    locale: {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd'
    }
});

return currentSeason;
//> a, b, c or d
```

Last thing, adding the parameter `lowercaseSeason` to the options, you can choose with `true` or `false` if you want the first letter of the season to be uppercase or lowercase

<hr/>

**If you want the API is available [here](docs/modules.md)**

<br/>

> MIT © 2022 YuZesky <<yuri.delzesky@gmail.com>>