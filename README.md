[![Build Status](https://travis-ci.com/various-project/noddi-rest.svg?branch=master)](https://travis-ci.com/various-project/noddi-rest)

# noddi-rest

## Setup

First run
```
npm install
```


Then
```
npm run start
```

## DB format

Food or drink

```
{
  "id" : "GTIN number",
  "merke" : "Brand",
  "navn" : "Name",
  "allergies" : {
    "gluten" : boolean,
    "skalldyr" : boolean,
    "fisk" : boolean,
    "egg" : boolean,
    "melk" : boolean,
    "peanotter" : boolean,
    "soya" : boolean,
    "notter" : boolean,
    "sesamfrø" : boolean,
    "selleri" : boolean,
    "sennep" : boolean,
    "svoveldioksid" : boolean,
    "sulfitter" : boolean,
    "blotdyr" : boolean,
  },
}
```
