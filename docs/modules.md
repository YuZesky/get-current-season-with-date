[get-current-season-with-date](README.md) / Exports

# get-current-season-with-date

## Table of contents

### Interfaces

- [GetSeasonByIdOptions](interfaces/GetSeasonByIdOptions.md)

### Functions

- [createJulianArray](modules.md#createjulianarray)
- [dateFromJulianArray](modules.md#datefromjulianarray)
- [degCos](modules.md#degcos)
- [degRad](modules.md#degrad)
- [getCurrentSeasonIdByArray](modules.md#getcurrentseasonidbyarray)
- [getCurrentSeasonsArray](modules.md#getcurrentseasonsarray)
- [getLocaleFile](modules.md#getlocalefile)
- [getSeasonById](modules.md#getseasonbyid)

## Functions

### createJulianArray

▸ **createJulianArray**(`j`, `n?`): `number`[]

**`Author`**

kennebec

**`See`**

https://stackoverflow.com/a/5671172

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | `number` |
| `n?` | `any` |

#### Returns

`number`[]

#### Defined in

[utils.ts:11](https://github.com/YuZesky/get-current-season-with-date/blob/99fcdb8/src/utils.ts#L11)

___

### dateFromJulianArray

▸ **dateFromJulianArray**(`julianArray`): `Date`

Get a date from a Julian array

**`Author`**

kennebec

**`See`**

https://stackoverflow.com/a/5671172

#### Parameters

| Name | Type |
| :------ | :------ |
| `julianArray` | `number`[] |

#### Returns

`Date`

#### Defined in

[utils.ts:49](https://github.com/YuZesky/get-current-season-with-date/blob/99fcdb8/src/utils.ts#L49)

___

### degCos

▸ **degCos**(`x`): `number`

**`Author`**

kennebec

**`See`**

https://stackoverflow.com/a/5671172

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

#### Defined in

[utils.ts:73](https://github.com/YuZesky/get-current-season-with-date/blob/99fcdb8/src/utils.ts#L73)

___

### degRad

▸ **degRad**(`x`): `number`

**`Author`**

kennebec

**`See`**

https://stackoverflow.com/a/5671172

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

#### Defined in

[utils.ts:63](https://github.com/YuZesky/get-current-season-with-date/blob/99fcdb8/src/utils.ts#L63)

___

### getCurrentSeasonIdByArray

▸ **getCurrentSeasonIdByArray**(`seasonsArray?`): `number`

Get the current season with the seasons array

**`Author`**

apaul

**`See`**

http://jsfiddle.net/kynbvpLf/3/

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seasonsArray?` | `number`[] | A seasons array |

#### Returns

`number`

Localized current season

#### Defined in

[index.ts:81](https://github.com/YuZesky/get-current-season-with-date/blob/99fcdb8/src/index.ts#L81)

___

### getCurrentSeasonsArray

▸ **getCurrentSeasonsArray**(`date?`): `number`[]

Get the current seasons array

**`Author`**

kennebec

**`See`**

https://stackoverflow.com/a/5671172

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | `Date` | A date |

#### Returns

`number`[]

Seasons array

#### Defined in

[index.ts:12](https://github.com/YuZesky/get-current-season-with-date/blob/99fcdb8/src/index.ts#L12)

___

### getLocaleFile

▸ **getLocaleFile**(`locale`): `Object`

Get the JSON locale file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `string` | Locale |

#### Returns

`Object`

JSON

#### Defined in

[utils.ts:82](https://github.com/YuZesky/get-current-season-with-date/blob/99fcdb8/src/utils.ts#L82)

___

### getSeasonById

▸ **getSeasonById**(`seasonId`, `options?`): `string`

Get the localized season by id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seasonId` | `number` | A season Id |
| `options?` | [`GetSeasonByIdOptions`](interfaces/GetSeasonByIdOptions.md) | Options |

#### Returns

`string`

Localized season

#### Defined in

[index.ts:107](https://github.com/YuZesky/get-current-season-with-date/blob/99fcdb8/src/index.ts#L107)
