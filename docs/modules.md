[get-current-season-with-date](README.md) / Exports

# get-current-season-with-date

## Table of contents

### Interfaces

- [GetSeasonByIdOptions](interfaces/GetSeasonByIdOptions.md)

### Type Aliases

- [localizedSeason](modules.md#localizedseason)

### Functions

- [createJulianArray](modules.md#createjulianarray)
- [dateFromJulianArray](modules.md#datefromjulianarray)
- [degCos](modules.md#degcos)
- [degRad](modules.md#degrad)
- [getCurrentSeasonsArray](modules.md#getcurrentseasonsarray)
- [getSeasonByArray](modules.md#getseasonbyarray)

## Type Aliases

### localizedSeason

Ƭ **localizedSeason**: ``"spring"`` \| ``"summer"`` \| ``"fall"`` \| ``"winter"``

#### Defined in

index.ts:102

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

utils.ts:8

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

utils.ts:46

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

utils.ts:70

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

utils.ts:60

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

index.ts:10

___

### getSeasonByArray

▸ **getSeasonByArray**(`seasonsArray?`, `options?`): [`localizedSeason`](modules.md#localizedseason)

Get the current season with the seasons array

**`Author`**

apaul

**`See`**

https://stackoverflow.com/a/5671172

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seasonsArray?` | `number`[] | A seasons array |
| `options?` | [`GetSeasonByIdOptions`](interfaces/GetSeasonByIdOptions.md) | Options |

#### Returns

[`localizedSeason`](modules.md#localizedseason)

Localized current season

#### Defined in

index.ts:80
