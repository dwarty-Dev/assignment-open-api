 
# API Documentation

This is the API documentation for the Netflix API service.

## Base URL
`http://localhost:3000/api/netflix`

### External API Host
This API uses the **Netflix API** hosted on **RapidAPI**:

`netflix-api10.p.rapidapi.com`

 
Here are the headers required for all requests:

X-Rapidapi-Key: f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026
X-Rapidapi-Host: netflix-api10.p.rapidapi.com


## Endpoints

### 1. Search genre

**URL**: `http://localhost:3000/netflix/movies?genre=romance`

**Method**: `GET`

#### Query Parameters:
- genre = romance

**Response**:
```json

{
    "status": 200,
    "message": "Successfully fetched movies for genre: romance. Enjoy your binge! 🎉",
    "data": [
        {
            "country": "AD, AE, AG, AL, AO, AR, AU, AZ, BA, BB, BE, BG, BH, BM, BO, BR, BS, BY, BZ, CH, CI, CL, CM, CO, CR, CU, CV, CY, CZ, DK, DO, DZ, EC, EE, EG, ES, FI, FJ, FR, GB, GF, GG, GH, GI, GQ, GR, GT, HK, HN, HR, HU, ID, IE, IL, IN, IQ, IS, IT, JM, JO, JP, KE, KR, KW, LB, LC, LT, LU, LV, LY, MA, MC, MD, ME, MG, MK, ML, MT, MU, MX, MY, MZ, NE, NG, NI, NL, NO, NZ, OM, PA, PE, PF, PH, PK, PL, PS, PT, PY, QA, RO, RS, SA, SC, SE, SG, SI, SK, SM, SN, SV, TC, TH, TN, TR, TT, TW, TZ, UA, UG, US, UY, VE, YE, ZA, ZM, ZW",
            "imdbAverageRating": 8.3,
            "imdbId": "tt0338013",
            "imdbNumVotes": 1114902,
            "listed_in": "Drama, Romance, Sci-Fi",
            "release_year": 2004,
            "title": "Eternal Sunshine of the Spotless Mind",
            "type": "movie"
        },
        {
            "country": "AG, AR, BB, BO, BR, BZ, CL, CO, CR, CU, DO, EC, ES, GF, GT, HN, JM, LC, MX, NI, PA, PE, PY, SV, TC, TT, UY, VE",
            "imdbAverageRating": 7.9,
            "imdbId": "tt0287467",
            "imdbNumVotes": 119106,
            "listed_in": "Drama, Mystery, Romance",
            "release_year": 2002,
            "title": "Talk to Her",
            "type": "movie"
        },
        {
            "country": "CY, KR, TR",
            "imdbAverageRating": 8.1,
            "imdbId": "tt0112471",
            "imdbNumVotes": 351741,
            "listed_in": "Drama, Romance",
            "release_year": 1995,
            "title": "Before Sunrise",
            "type": "movie"
        },
        {
            "country": "KR, US",
            "imdbAverageRating": 8.1,
            "imdbId": "tt0381681",
            "imdbNumVotes": 297080,
            "listed_in": "Drama, Romance",
            "release_year": 2004,
            "title": "Before Sunset",
            "type": "movie"
        },
        {
            "country": "CA",
            "imdbAverageRating": 7.1,
            "imdbId": "tt0092890",
            "imdbNumVotes": 265127,
            "listed_in": "Drama, Music, Romance",
            "release_year": 1987,
            "title": "Dirty Dancing",
            "type": "movie"
        },
        {
            "country": "ES",
            "imdbAverageRating": 7.8,
            "imdbId": "tt0185125",
            "imdbNumVotes": 105338,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 1999,
            "title": "All About My Mother",
            "type": "movie"
        },
        {
            "country": "DK, FI, NO, SE",
            "imdbAverageRating": 7.5,
            "imdbId": "tt0315543",
            "imdbNumVotes": 11159,
            "listed_in": "Drama, Romance",
            "release_year": 2002,
            "title": "Open Hearts",
            "type": "movie"
        },
        {
            "country": "DK, FI, NO, SE",
            "imdbAverageRating": 7,
            "imdbId": "tt0243862",
            "imdbNumVotes": 14081,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 2000,
            "title": "Italian for Beginners",
            "type": "movie"
        },
        {
            "country": "FR",
            "imdbAverageRating": 7.7,
            "imdbId": "tt0388795",
            "imdbNumVotes": 395368,
            "listed_in": "Drama, Romance",
            "release_year": 2005,
            "title": "Brokeback Mountain",
            "type": "movie"
        },
        {
            "country": "JP, TH",
            "imdbAverageRating": 8.3,
            "imdbId": "tt0211915",
            "imdbNumVotes": 809929,
            "listed_in": "Comedy, Romance",
            "release_year": 2001,
            "title": "Amélie",
            "type": "movie"
        },
        {
            "country": "AG, AR, BB, BO, BZ, CL, CO, CR, DO, EC, GT, HN, JM, LC, MX, NI, PA, PE, PY, SV, TC, TT, UY, VE",
            "imdbAverageRating": 7.1,
            "imdbId": "tt0099653",
            "imdbNumVotes": 243243,
            "listed_in": "Drama, Fantasy, Romance",
            "release_year": 1990,
            "title": "Ghost",
            "type": "movie"
        },
        {
            "country": "BE, CA, NL",
            "imdbAverageRating": 7.2,
            "imdbId": "tt0241303",
            "imdbNumVotes": 205154,
            "listed_in": "Drama, Romance",
            "release_year": 2000,
            "title": "Chocolat",
            "type": "movie"
        },
        {
            "country": "AT, CH, DE",
            "imdbAverageRating": 6.6,
            "imdbId": "tt0050974",
            "imdbNumVotes": 6207,
            "listed_in": "Drama, History, Romance",
            "release_year": 1957,
            "title": "Sissi: The Fateful Years of an Empress",
            "type": "movie"
        },
        {
            "country": "BG, CY, CZ, DK, EE, FI, GR, HR, HU, IS, IT, LT, LV, MT, NL, NO, PT, RO, SE, SI, SK",
            "imdbAverageRating": 7.7,
            "imdbId": "tt0043265",
            "imdbNumVotes": 85960,
            "listed_in": "Adventure, Drama, Romance",
            "release_year": 1951,
            "title": "The African Queen",
            "type": "movie"
        },
        {
            "country": "AD, AE, AL, AU, AZ, BA, BE, BG, BH, BY, CH, CY, CZ, DK, DZ, EE, EG, ES, FI, GR, HK, HR, HU, IL, IQ, IS, IT, JO, JP, KR, KW, LB, LT, LV, LY, MA, MC, MD, ME, MK, NL, NO, NZ, OM, PL, PS, PT, QA, RO, RS, SA, SE, SI, SK, TN, TR, TW, YE",
            "imdbAverageRating": 7.6,
            "imdbId": "tt0314331",
            "imdbNumVotes": 551068,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 2003,
            "title": "Love Actually",
            "type": "movie"
        },
        {
            "country": "AD, AU, BE, ES, FJ, FR, GB, GF, GG, GI, HK, ID, IE, IN, LU, MC, MY, NL, NZ, PF, PH, PK, SG, TH, TW",
            "imdbAverageRating": 7.2,
            "imdbId": "tt0125439",
            "imdbNumVotes": 356445,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 1999,
            "title": "Notting Hill",
            "type": "movie"
        },
        {
            "country": "AZ, BY, LT, LV, UA",
            "imdbAverageRating": 6.2,
            "imdbId": "tt0085549",
            "imdbNumVotes": 61113,
            "listed_in": "Drama, Music, Romance",
            "release_year": 1983,
            "title": "Flashdance",
            "type": "movie"
        },
        {
            "country": "MK, SI",
            "imdbAverageRating": 7.4,
            "imdbId": "tt0362227",
            "imdbNumVotes": 507711,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 2004,
            "title": "The Terminal",
            "type": "movie"
        },
        {
            "country": "AD, AE, AG, AL, AO, AR, AT, AU, BA, BB, BE, BG, BH, BO, BS, BZ, CH, CI, CL, CM, CO, CR, CU, CV, CY, CZ, DE, DK, DO, DZ, EC, EE, EG, ES, FI, FJ, FR, GB, GF, GG, GH, GQ, GR, GT, HK, HN, HR, HU, ID, IE, IL, IQ, IS, JM, JO, JP, KE, KR, KW, LB, LC, LI, LT, LU, LV, LY, MA, MC, ME, MG, MK, ML, MT, MU, MY, MZ, NE, NG, NI, NL, NO, NZ, OM, PA, PE, PF, PH, PL, PS, PT, PY, QA, RO, RS, SA, SC, SE, SG, SI, SK, SM, SN, SV, TC, TD, TH, TN, TR, TT, TW, TZ, UG, UY, VE, YE, ZA, ZM, ZW",
            "imdbAverageRating": 7.9,
            "imdbId": "tt0120338",
            "imdbNumVotes": 1319238,
            "listed_in": "Drama, Romance",
            "release_year": 1997,
            "title": "Titanic",
            "type": "movie"
        },
        {
            "country": "DK, FI, NO, SE",
            "imdbAverageRating": 8.1,
            "imdbId": "tt0050986",
            "imdbNumVotes": 118453,
            "listed_in": "Drama, Romance",
            "release_year": 1957,
            "title": "Wild Strawberries",
            "type": "movie"
        },
        {
            "country": "AD, ES, IT, JP, PT, SM",
            "imdbAverageRating": 6.4,
            "imdbId": "tt0103855",
            "imdbNumVotes": 151812,
            "listed_in": "Drama, Music, Romance",
            "release_year": 1992,
            "title": "The Bodyguard",
            "type": "movie"
        },
        {
            "country": "AU, BE, CA, GB, GG, IE, NL",
            "imdbAverageRating": 6.8,
            "imdbId": "tt0243155",
            "imdbNumVotes": 271049,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 2001,
            "title": "Bridget Jones's Diary",
            "type": "movie"
        },
        {
            "country": "IT, SM",
            "imdbAverageRating": 8.6,
            "imdbId": "tt0118799",
            "imdbNumVotes": 764813,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 1997,
            "title": "Life Is Beautiful",
            "type": "movie"
        },
        {
            "country": "CA",
            "imdbAverageRating": 6.3,
            "imdbId": "tt0290002",
            "imdbNumVotes": 292369,
            "listed_in": "Comedy, Romance",
            "release_year": 2004,
            "title": "Meet the Fockers",
            "type": "movie"
        },
        {
            "country": "AU, FJ, NZ",
            "imdbAverageRating": 7.5,
            "imdbId": "tt0107822",
            "imdbNumVotes": 97222,
            "listed_in": "Drama, Music, Romance",
            "release_year": 1993,
            "title": "The Piano",
            "type": "movie"
        },
        {
            "country": "DK, FI, NO, SE",
            "imdbAverageRating": 7.4,
            "imdbId": "tt0203166",
            "imdbNumVotes": 24824,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 2000,
            "title": "Together",
            "type": "movie"
        },
        {
            "country": "CZ, SK",
            "imdbAverageRating": 7.6,
            "imdbId": "tt0060802",
            "imdbNumVotes": 14211,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 1966,
            "title": "Closely Watched Trains",
            "type": "movie"
        },
        {
            "country": "AD, ES, PT",
            "imdbAverageRating": 6.7,
            "imdbId": "tt0120632",
            "imdbNumVotes": 130175,
            "listed_in": "Drama, Fantasy, Romance",
            "release_year": 1998,
            "title": "City of Angels",
            "type": "movie"
        },
        {
            "country": "KR",
            "imdbAverageRating": 8.1,
            "imdbId": "tt0118694",
            "imdbNumVotes": 172740,
            "listed_in": "Drama, Romance",
            "release_year": 2000,
            "title": "In the Mood for Love",
            "type": "movie"
        },
        {
            "country": "KR",
            "imdbAverageRating": 7.4,
            "imdbId": "tt0212712",
            "imdbNumVotes": 63013,
            "listed_in": "Drama, Romance, Sci-Fi",
            "release_year": 2004,
            "title": "2046",
            "type": "movie"
        },
        {
            "country": "LU, NL, PL",
            "imdbAverageRating": 6.8,
            "imdbId": "tt0108160",
            "imdbNumVotes": 195730,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 1993,
            "title": "Sleepless in Seattle",
            "type": "movie"
        },
        {
            "country": "AG, BM, BO, BS, BZ, CL, CO, CR, DK, DO, EC, GB, GG, GT, HN, IE, JM, KR, LC, MX, NO, PA, PE, PT, PY, SE, SV, TC, TW, US, UY",
            "imdbAverageRating": 8,
            "imdbId": "tt0352248",
            "imdbNumVotes": 202179,
            "listed_in": "Biography, Drama, Romance",
            "release_year": 2005,
            "title": "Cinderella Man",
            "type": "movie"
        },
        {
            "country": "AZ, BE, BY, CY, DZ, EE, GR, IN, JP, LT, LV, MD, MT, PK, PL, PT, TR, UA",
            "imdbAverageRating": 7.8,
            "imdbId": "tt0107943",
            "imdbNumVotes": 87321,
            "listed_in": "Drama, Romance",
            "release_year": 1993,
            "title": "The Remains of the Day",
            "type": "movie"
        },
        {
            "country": "KR",
            "imdbAverageRating": 7.9,
            "imdbId": "tt0423866",
            "imdbNumVotes": 59340,
            "listed_in": "Crime, Drama, Romance",
            "release_year": 2004,
            "title": "3-Iron",
            "type": "movie"
        },
        {
            "country": "ES",
            "imdbAverageRating": 7,
            "imdbId": "tt0254455",
            "imdbNumVotes": 39404,
            "listed_in": "Drama, Romance",
            "release_year": 2001,
            "title": "Sex and Lucía",
            "type": "movie"
        },
        {
            "country": "IT, MC, MT, SM",
            "imdbAverageRating": 7,
            "imdbId": "tt0285742",
            "imdbNumVotes": 95595,
            "listed_in": "Drama, Romance",
            "release_year": 2001,
            "title": "Monster's Ball",
            "type": "movie"
        },
        {
            "country": "ES",
            "imdbAverageRating": 7.4,
            "imdbId": "tt0350193",
            "imdbNumVotes": 7623,
            "listed_in": "Drama, Romance",
            "release_year": 2003,
            "title": "Take My Eyes",
            "type": "movie"
        },
        {
            "country": "AD, ES, PT",
            "imdbAverageRating": 7.5,
            "imdbId": "tt0404203",
            "imdbNumVotes": 118616,
            "listed_in": "Drama, Romance",
            "release_year": 2006,
            "title": "Little Children",
            "type": "movie"
        },
        {
            "country": "AD, AE, AL, AZ, BA, BG, BH, BY, CY, CZ, DK, EE, EG, ES, FI, FR, GF, GR, HK, HR, HU, IL, IQ, IS, IT, JO, KR, KW, LB, LT, LV, LY, MA, MC, MD, ME, MK, NO, OM, PF, PL, PS, PT, QA, RO, RS, SA, SE, SI, SK, TN, TR, TW, YE",
            "imdbAverageRating": 7.2,
            "imdbId": "tt0159097",
            "imdbNumVotes": 175394,
            "listed_in": "Drama, Romance",
            "release_year": 1999,
            "title": "The Virgin Suicides",
            "type": "movie"
        },
        {
            "country": "KR, TW",
            "imdbAverageRating": 7,
            "imdbId": "tt0473444",
            "imdbNumVotes": 46487,
            "listed_in": "Action, Drama, Romance",
            "release_year": 2006,
            "title": "Curse of the Golden Flower",
            "type": "movie"
        },
        {
            "country": "EE, HR, LI, LT, LV, SI",
            "imdbAverageRating": 7.3,
            "imdbId": "tt0283900",
            "imdbNumVotes": 43208,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 2002,
            "title": "The Spanish Apartment",
            "type": "movie"
        },
        {
            "country": "AD, AE, AG, AL, AO, AR, AT, AU, AZ, BA, BB, BE, BG, BH, BO, BR, BY, BZ, CH, CI, CL, CM, CO, CR, CU, CV, CY, CZ, DE, DK, DO, DZ, EC, EE, EG, ES, FI, FJ, FR, GB, GF, GG, GH, GI, GQ, GR, GT, HK, HN, HR, HU, ID, IE, IL, IQ, IS, IT, JM, JO, KE, KR, KW, LB, LC, LI, LT, LU, LV, LY, MA, MC, MD, ME, MG, MK, ML, MT, MU, MX, MY, MZ, NE, NG, NI, NL, NO, NZ, OM, PA, PE, PF, PH, PL, PS, PT, PY, QA, RO, RS, SA, SC, SE, SG, SI, SK, SM, SN, SV, TH, TN, TR, TT, TW, TZ, UA, UG, UY, VE, YE, ZA, ZM, ZW",
            "imdbAverageRating": 7,
            "imdbId": "tt0457939",
            "imdbNumVotes": 341813,
            "listed_in": "Comedy, Romance",
            "release_year": 2006,
            "title": "The Holiday",
            "type": "movie"
        },
        {
            "country": "KR",
            "imdbAverageRating": 6.1,
            "imdbId": "tt0204946",
            "imdbNumVotes": 108816,
            "listed_in": "Comedy, Romance, Sport",
            "release_year": 2000,
            "title": "Bring It On",
            "type": "movie"
        },
        {
            "country": "CA",
            "imdbAverageRating": 7,
            "imdbId": "tt0212338",
            "imdbNumVotes": 363452,
            "listed_in": "Comedy, Romance",
            "release_year": 2000,
            "title": "Meet the Parents",
            "type": "movie"
        },
        {
            "country": "AE, AG, AO, AR, BB, BH, BM, BO, BR, BS, BZ, CI, CL, CM, CO, CR, CU, CV, DO, DZ, EC, EG, FR, GF, GH, GQ, GT, HN, HR, IL, IQ, JM, JO, KE, KW, LB, LC, LY, MA, MC, MG, ML, MU, MX, MZ, NE, NG, NI, OM, PA, PE, PF, PS, PY, QA, SA, SC, SN, SV, TC, TN, TT, TZ, UG, UY, VE, YE, ZA, ZM, ZW",
            "imdbAverageRating": 6,
            "imdbId": "tt0386140",
            "imdbNumVotes": 109842,
            "listed_in": "Action, Adventure, Romance",
            "release_year": 2005,
            "title": "The Legend of Zorro",
            "type": "movie"
        },
        {
            "country": "CA",
            "imdbAverageRating": 7.4,
            "imdbId": "tt0124315",
            "imdbNumVotes": 106431,
            "listed_in": "Drama, Romance",
            "release_year": 1999,
            "title": "The Cider House Rules",
            "type": "movie"
        },
        {
            "country": "AZ, BY, ES, LT, LV, NZ, UA",
            "imdbAverageRating": 6.6,
            "imdbId": "tt0087277",
            "imdbNumVotes": 96433,
            "listed_in": "Drama, Music, Romance",
            "release_year": 1984,
            "title": "Footloose",
            "type": "movie"
        },
        {
            "country": "CA, GB, GG, GI, IE, IN, IS, MT, PK",
            "imdbAverageRating": 6.8,
            "imdbId": "tt0343660",
            "imdbNumVotes": 392321,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 2004,
            "title": "50 First Dates",
            "type": "movie"
        },
        {
            "country": "BG, EE, GR, HR, IS, LI, LT, LV, PT, RO, SI",
            "imdbAverageRating": 7,
            "imdbId": "tt0409184",
            "imdbNumVotes": 21509,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 2005,
            "title": "Russian Dolls",
            "type": "movie"
        },
        {
            "country": "US",
            "imdbAverageRating": 6.5,
            "imdbId": "tt0385267",
            "imdbNumVotes": 57197,
            "listed_in": "Comedy, Drama, Romance",
            "release_year": 2004,
            "title": "In Good Company",
            "type": "movie"
        }
    ]
}


### Endpoint: Get categories

### 2. Categories


### Method: `GET`
### URL: `/categories`
This endpoint retrieves information about netflix getting categories that are avaible.

#### Full Request Example:

http://localhost:3000/netflix/categories

#### Query Parameters:
- none

**Response**:

```json

{
    "status": 200,
    "message": "Successfully fetched all categories. Find your favorite genre and dive in! 🎭📚",
    "data": [
        "War",
        "Kids",
        "News",
        "Soap",
        "Talk",
        "Adult",
        "Crime",
        "Drama",
        "Music",
        "Short",
        "Sport",
        "Action",
        "Comedy",
        "Family",
        "Horror",
        "Sci-Fi",
        "Fantasy",
        "History",
        "Musical",
        "Mystery",
        "Reality",
        "Romance",
        "Western",
        "TV Movie",
        "Thriller",
        "Adventure",
        "Animation",
        "Biography",
        "Film-Noir",
        "Game-Show",
        "Talk-Show",
        "Reality-TV",
        "Documentary",
        "War & Politics",
        "Science Fiction",
        "Sci-Fi & Fantasy",
        "Action & Adventure"
    ]
}

