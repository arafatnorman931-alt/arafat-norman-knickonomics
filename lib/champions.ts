export type ChampionPlayer = {
  id: string
  name: string
  position: string
  number: string
  /** Salary for that season in USD, or null when it could not be verified. */
  salary: number | null
}

export type ChampionSeason = {
  season: string
  team: string
  sourceUrl: string
  players: ChampionPlayer[]
}

// Rosters and salaries sourced from Basketball-Reference team pages (Roster and Salaries tables).
export const championSeasons: ChampionSeason[] = [
  {
    "season": "2025–26",
    "team": "New York Knicks",
    "sourceUrl": "https://www.basketball-reference.com/teams/NYK/2026.html",
    "players": [
      {
        "id": "alvarjo01",
        "name": "Jose Alvarado",
        "position": "PG",
        "number": "5",
        "salary": 4500000
      },
      {
        "id": "anunoog01",
        "name": "OG Anunoby",
        "position": "PF",
        "number": "8",
        "salary": 39568966
      },
      {
        "id": "bridgmi01",
        "name": "Mikal Bridges",
        "position": "SF",
        "number": "25",
        "salary": 24900000
      },
      {
        "id": "brunsja01",
        "name": "Jalen Brunson",
        "position": "PG",
        "number": "11",
        "salary": 34944001
      },
      {
        "id": "clarkjo01",
        "name": "Jordan Clarkson",
        "position": "SG",
        "number": "00",
        "salary": 2296274
      },
      {
        "id": "dadiepa01",
        "name": "Pacôme Dadiet",
        "position": "SG",
        "number": "4",
        "salary": 2847600
      },
      {
        "id": "diawamo01",
        "name": "Mohamed Diawara",
        "position": "SF",
        "number": "51",
        "salary": 1272870
      },
      {
        "id": "evbuoto01",
        "name": "Tosan Evbuomwan",
        "position": "SF",
        "number": "20",
        "salary": null
      },
      {
        "id": "hartjo01",
        "name": "Josh Hart",
        "position": "SF",
        "number": "3",
        "salary": 19472240
      },
      {
        "id": "hukpoar01",
        "name": "Ariel Hukporti",
        "position": "C",
        "number": "55",
        "salary": 1955377
      },
      {
        "id": "jemistr01",
        "name": "Trey Jemison",
        "position": "C",
        "number": "50",
        "salary": null
      },
      {
        "id": "jonesdi01",
        "name": "Dillon Jones",
        "position": "SF",
        "number": "1",
        "salary": null
      },
      {
        "id": "kolekty01",
        "name": "Tyler Kolek",
        "position": "PG",
        "number": "13",
        "salary": 2191897
      },
      {
        "id": "mcbrimi01",
        "name": "Miles McBride",
        "position": "SG",
        "number": "2",
        "salary": 4333333
      },
      {
        "id": "mcculke01",
        "name": "Kevin McCullar Jr.",
        "position": "SF",
        "number": "9",
        "salary": null
      },
      {
        "id": "robinmi01",
        "name": "Mitchell Robinson",
        "position": "C",
        "number": "23",
        "salary": 12954546
      },
      {
        "id": "shamela01",
        "name": "Landry Shamet",
        "position": "SG",
        "number": "44",
        "salary": 2296274
      },
      {
        "id": "sochaje01",
        "name": "Jeremy Sochan",
        "position": "PF",
        "number": "20",
        "salary": 778622
      },
      {
        "id": "townska01",
        "name": "Karl-Anthony Towns",
        "position": "C",
        "number": "32",
        "salary": 53142264
      },
      {
        "id": "yabusgu01",
        "name": "Guerschon Yabusele",
        "position": "C",
        "number": "28",
        "salary": null
      }
    ]
  },
  {
    "season": "2024–25",
    "team": "Oklahoma City Thunder",
    "sourceUrl": "https://www.basketball-reference.com/teams/OKC/2025.html",
    "players": [
      {
        "id": "carlsbr01",
        "name": "Branden Carlson",
        "position": "C",
        "number": "15",
        "salary": null
      },
      {
        "id": "carusal01",
        "name": "Alex Caruso",
        "position": "SG",
        "number": "9",
        "salary": 9890000
      },
      {
        "id": "diengou01",
        "name": "Ousmane Dieng",
        "position": "C",
        "number": "13",
        "salary": 5027040
      },
      {
        "id": "dortlu01",
        "name": "Luguentz Dort",
        "position": "SF",
        "number": "5",
        "salary": 16500000
      },
      {
        "id": "ducasal01",
        "name": "Alex Ducas",
        "position": "SG",
        "number": "88",
        "salary": null
      },
      {
        "id": "flaglad01",
        "name": "Adam Flagler",
        "position": "SG",
        "number": "14",
        "salary": null
      },
      {
        "id": "gilgesh01",
        "name": "Shai Gilgeous-Alexander",
        "position": "PG",
        "number": "2",
        "salary": 35859950
      },
      {
        "id": "harteis01",
        "name": "Isaiah Hartenstein",
        "position": "C",
        "number": "55",
        "salary": 30000000
      },
      {
        "id": "holmgch01",
        "name": "Chet Holmgren",
        "position": "C",
        "number": "7",
        "salary": 10880640
      },
      {
        "id": "joeis01",
        "name": "Isaiah Joe",
        "position": "SG",
        "number": "11",
        "salary": 12991650
      },
      {
        "id": "jonesdi01",
        "name": "Dillon Jones",
        "position": "SF",
        "number": "3",
        "salary": 2622360
      },
      {
        "id": "leonsma01",
        "name": "Malevy Leons",
        "position": "SF",
        "number": "17",
        "salary": 126356
      },
      {
        "id": "mitchaj01",
        "name": "Ajay Mitchell",
        "position": "SG",
        "number": "25",
        "salary": null
      },
      {
        "id": "reeseal01",
        "name": "Alex Reese",
        "position": "PF",
        "number": "15",
        "salary": null
      },
      {
        "id": "wallaca01",
        "name": "Cason Wallace",
        "position": "SG",
        "number": "22",
        "salary": 5555880
      },
      {
        "id": "wiggiaa01",
        "name": "Aaron Wiggins",
        "position": "SG",
        "number": "21",
        "salary": 10514017
      },
      {
        "id": "willija06",
        "name": "Jalen Williams",
        "position": "SG",
        "number": "8",
        "salary": 4775760
      },
      {
        "id": "willija07",
        "name": "Jaylin Williams",
        "position": "PF",
        "number": "6",
        "salary": 2019699
      },
      {
        "id": "willike04",
        "name": "Kenrich Williams",
        "position": "PF",
        "number": "34",
        "salary": 6669000
      }
    ]
  },
  {
    "season": "2023–24",
    "team": "Boston Celtics",
    "sourceUrl": "https://www.basketball-reference.com/teams/BOS/2024.html",
    "players": [
      {
        "id": "bantoda01",
        "name": "Dalano Banton",
        "position": "PG",
        "number": "45",
        "salary": null
      },
      {
        "id": "brissos01",
        "name": "Oshae Brissett",
        "position": "SF",
        "number": "12",
        "salary": 2165000
      },
      {
        "id": "brownja02",
        "name": "Jaylen Brown",
        "position": "SF",
        "number": "7",
        "salary": 31830357
      },
      {
        "id": "davisjd01",
        "name": "JD Davison",
        "position": "SG",
        "number": "20",
        "salary": null
      },
      {
        "id": "hausesa01",
        "name": "Sam Hauser",
        "position": "SF",
        "number": "30",
        "salary": 1927896
      },
      {
        "id": "holidjr01",
        "name": "Jrue Holiday",
        "position": "PG",
        "number": "4",
        "salary": 36861707
      },
      {
        "id": "horfoal01",
        "name": "Al Horford",
        "position": "C",
        "number": "42",
        "salary": 10000000
      },
      {
        "id": "kornelu01",
        "name": "Luke Kornet",
        "position": "C",
        "number": "40",
        "salary": 2413304
      },
      {
        "id": "mykhasv01",
        "name": "Svi Mykhailiuk",
        "position": "SF",
        "number": "50",
        "salary": 2019706
      },
      {
        "id": "peterdr01",
        "name": "Drew Peterson",
        "position": "PF",
        "number": "13",
        "salary": null
      },
      {
        "id": "porzikr01",
        "name": "Kristaps Porziņģis",
        "position": "C",
        "number": "8",
        "salary": 36016200
      },
      {
        "id": "pritcpa01",
        "name": "Payton Pritchard",
        "position": "PG",
        "number": "11",
        "salary": 4037277
      },
      {
        "id": "quetane01",
        "name": "Neemias Queta",
        "position": "C",
        "number": "88",
        "salary": null
      },
      {
        "id": "sprinja01",
        "name": "Jaden Springer",
        "position": "SG",
        "number": "44",
        "salary": 2226240
      },
      {
        "id": "stevela01",
        "name": "Lamar Stevens",
        "position": "PF",
        "number": "77",
        "salary": null
      },
      {
        "id": "tatumja01",
        "name": "Jayson Tatum",
        "position": "PF",
        "number": "0",
        "salary": 32600060
      },
      {
        "id": "tillmxa01",
        "name": "Xavier Tillman Sr.",
        "position": "PF",
        "number": "26",
        "salary": 1930681
      },
      {
        "id": "walshjo01",
        "name": "Jordan Walsh",
        "position": "SF",
        "number": "27",
        "salary": 1119563
      },
      {
        "id": "whitede01",
        "name": "Derrick White",
        "position": "SG",
        "number": "9",
        "salary": 18357143
      }
    ]
  },
  {
    "season": "2022–23",
    "team": "Denver Nuggets",
    "sourceUrl": "https://www.basketball-reference.com/teams/DEN/2023.html",
    "players": [
      {
        "id": "braunch01",
        "name": "Christian Braun",
        "position": "SG",
        "number": "0",
        "salary": 2808600
      },
      {
        "id": "brownbr01",
        "name": "Bruce Brown",
        "position": "SF",
        "number": "11",
        "salary": 6479000
      },
      {
        "id": "bryanth01",
        "name": "Thomas Bryant",
        "position": "C",
        "number": "13",
        "salary": 1836090
      },
      {
        "id": "caldwke01",
        "name": "Kentavious Caldwell-Pope",
        "position": "SG",
        "number": "5",
        "salary": 14004703
      },
      {
        "id": "cancavl01",
        "name": "Vlatko Čančar",
        "position": "PF",
        "number": "31",
        "salary": 2234359
      },
      {
        "id": "gordoaa01",
        "name": "Aaron Gordon",
        "position": "PF",
        "number": "50",
        "salary": 19690909
      },
      {
        "id": "greenje02",
        "name": "Jeff Green",
        "position": "PF",
        "number": "32",
        "salary": 4500000
      },
      {
        "id": "hylanbo01",
        "name": "Bones Hyland",
        "position": "PG",
        "number": "3",
        "salary": null
      },
      {
        "id": "jacksre01",
        "name": "Reggie Jackson",
        "position": "PG",
        "number": "7",
        "salary": 580373
      },
      {
        "id": "jokicni01",
        "name": "Nikola Jokić",
        "position": "C",
        "number": "15",
        "salary": 33047803
      },
      {
        "id": "jordade01",
        "name": "DeAndre Jordan",
        "position": "C",
        "number": "6",
        "salary": 1836090
      },
      {
        "id": "murraja01",
        "name": "Jamal Murray",
        "position": "PG",
        "number": "27",
        "salary": 31650600
      },
      {
        "id": "nnajize01",
        "name": "Zeke Nnaji",
        "position": "PF",
        "number": "22",
        "salary": 2617800
      },
      {
        "id": "portemi01",
        "name": "Michael Porter Jr.",
        "position": "SF",
        "number": "1",
        "salary": 30913750
      },
      {
        "id": "reedda01",
        "name": "Davon Reed",
        "position": "SG",
        "number": "9",
        "salary": null
      },
      {
        "id": "smithis01",
        "name": "Ish Smith",
        "position": "PG",
        "number": "14",
        "salary": 4725000
      },
      {
        "id": "watsope01",
        "name": "Peyton Watson",
        "position": "SG",
        "number": "8",
        "salary": 2193960
      },
      {
        "id": "whiteja03",
        "name": "Jack White",
        "position": "SF",
        "number": "10",
        "salary": null
      }
    ]
  },
  {
    "season": "2021–22",
    "team": "Golden State Warriors",
    "sourceUrl": "https://www.basketball-reference.com/teams/GSW/2022.html",
    "players": [
      {
        "id": "bjeline01",
        "name": "Nemanja Bjelica",
        "position": "C",
        "number": "8",
        "salary": 2089448
      },
      {
        "id": "chiozch01",
        "name": "Chris Chiozza",
        "position": "PG",
        "number": "2",
        "salary": 0
      },
      {
        "id": "curryst01",
        "name": "Stephen Curry",
        "position": "PG",
        "number": "30",
        "salary": 45780966
      },
      {
        "id": "dowtije01",
        "name": "Jeff Dowtin Jr.",
        "position": "PG",
        "number": "21",
        "salary": 0
      },
      {
        "id": "greendr01",
        "name": "Draymond Green",
        "position": "PF",
        "number": "23",
        "salary": 24026712
      },
      {
        "id": "iguodan01",
        "name": "Andre Iguodala",
        "position": "SF",
        "number": "9",
        "salary": 2641691
      },
      {
        "id": "kuminjo01",
        "name": "Jonathan Kuminga",
        "position": "SF",
        "number": "00",
        "salary": 5466360
      },
      {
        "id": "leeda03",
        "name": "Damion Lee",
        "position": "SG",
        "number": "1",
        "salary": 1910860
      },
      {
        "id": "looneke01",
        "name": "Kevon Looney",
        "position": "C",
        "number": "5",
        "salary": 5178572
      },
      {
        "id": "moodymo01",
        "name": "Moses Moody",
        "position": "SG",
        "number": "4",
        "salary": 3562080
      },
      {
        "id": "paytoga02",
        "name": "Gary Payton II",
        "position": "SG",
        "number": "0",
        "salary": 1939350
      },
      {
        "id": "poolejo01",
        "name": "Jordan Poole",
        "position": "SG",
        "number": "3",
        "salary": 2161440
      },
      {
        "id": "porteot01",
        "name": "Otto Porter Jr.",
        "position": "PF",
        "number": "32",
        "salary": 2389641
      },
      {
        "id": "thompkl01",
        "name": "Klay Thompson",
        "position": "SG",
        "number": "11",
        "salary": 37980720
      },
      {
        "id": "toscaju01",
        "name": "Juan Toscano-Anderson",
        "position": "SF",
        "number": "95",
        "salary": 1701593
      },
      {
        "id": "weathqu01",
        "name": "Quinndary Weatherspoon",
        "position": "SG",
        "number": "12",
        "salary": 95930
      },
      {
        "id": "wiggian01",
        "name": "Andrew Wiggins",
        "position": "SF",
        "number": "22",
        "salary": 31579390
      }
    ]
  },
  {
    "season": "2020–21",
    "team": "Milwaukee Bucks",
    "sourceUrl": "https://www.basketball-reference.com/teams/MIL/2021.html",
    "players": [
      {
        "id": "adamsja01",
        "name": "Jaylen Adams",
        "position": "PG",
        "number": "6",
        "salary": null
      },
      {
        "id": "antetgi01",
        "name": "Giannis Antetokounmpo",
        "position": "PF",
        "number": "34",
        "salary": 27528088
      },
      {
        "id": "antetth01",
        "name": "Thanasis Antetokounmpo",
        "position": "SF",
        "number": "43",
        "salary": 1701593
      },
      {
        "id": "augusdj01",
        "name": "D.J. Augustin",
        "position": "PG",
        "number": "12",
        "salary": null
      },
      {
        "id": "bryanel01",
        "name": "Elijah Bryant",
        "position": "SG",
        "number": "3",
        "salary": 24611
      },
      {
        "id": "connapa01",
        "name": "Pat Connaughton",
        "position": "SG",
        "number": "24",
        "salary": 4938273
      },
      {
        "id": "craigto01",
        "name": "Torrey Craig",
        "position": "SF",
        "number": "3",
        "salary": null
      },
      {
        "id": "diakima01",
        "name": "Mamadi Diakite",
        "position": "PF",
        "number": "25",
        "salary": 160173
      },
      {
        "id": "divindo01",
        "name": "Donte DiVincenzo",
        "position": "SG",
        "number": "0",
        "salary": 3044160
      },
      {
        "id": "forbebr01",
        "name": "Bryn Forbes",
        "position": "SG",
        "number": "7",
        "salary": 2337145
      },
      {
        "id": "holidjr01",
        "name": "Jrue Holiday",
        "position": "PG",
        "number": "21",
        "salary": 25876111
      },
      {
        "id": "jacksju01",
        "name": "Justin Jackson",
        "position": "SF",
        "number": "44",
        "salary": 0
      },
      {
        "id": "kurucro01",
        "name": "Rodions Kurucs",
        "position": "SF",
        "number": "00",
        "salary": 1780152
      },
      {
        "id": "lopezbr01",
        "name": "Brook Lopez",
        "position": "C",
        "number": "11",
        "salary": 12697675
      },
      {
        "id": "merrisa01",
        "name": "Sam Merrill",
        "position": "SG",
        "number": "15",
        "salary": 898310
      },
      {
        "id": "middlkh01",
        "name": "Khris Middleton",
        "position": "SF",
        "number": "22",
        "salary": 33051724
      },
      {
        "id": "nworajo01",
        "name": "Jordan Nwora",
        "position": "SF",
        "number": "13",
        "salary": 898310
      },
      {
        "id": "portibo01",
        "name": "Bobby Portis",
        "position": "C",
        "number": "9",
        "salary": 3623000
      },
      {
        "id": "teaguje01",
        "name": "Jeff Teague",
        "position": "PG",
        "number": "5",
        "salary": 510589
      },
      {
        "id": "toupaax01",
        "name": "Axel Toupane",
        "position": "SF",
        "number": "66",
        "salary": 0
      },
      {
        "id": "tuckepj01",
        "name": "P.J. Tucker",
        "position": "PF",
        "number": "17",
        "salary": 7969537
      },
      {
        "id": "wilsodj01",
        "name": "D.J. Wilson",
        "position": "PF",
        "number": "5",
        "salary": null
      }
    ]
  },
  {
    "season": "2019–20",
    "team": "Los Angeles Lakers",
    "sourceUrl": "https://www.basketball-reference.com/teams/LAL/2020.html",
    "players": [
      {
        "id": "antetko01",
        "name": "Kostas Antetokounmpo",
        "position": "PF",
        "number": "37",
        "salary": 0
      },
      {
        "id": "bradlav01",
        "name": "Avery Bradley",
        "position": "SG",
        "number": "11",
        "salary": 4767000
      },
      {
        "id": "cacokde01",
        "name": "Devontae Cacok",
        "position": "C",
        "number": "12",
        "salary": 0
      },
      {
        "id": "caldwke01",
        "name": "Kentavious Caldwell-Pope",
        "position": "SG",
        "number": "1",
        "salary": 8089282
      },
      {
        "id": "carusal01",
        "name": "Alex Caruso",
        "position": "PG",
        "number": "4",
        "salary": 2750000
      },
      {
        "id": "cookqu01",
        "name": "Quinn Cook",
        "position": "PG",
        "number": "2, 28",
        "salary": 3000000
      },
      {
        "id": "danietr01",
        "name": "Troy Daniels",
        "position": "SG",
        "number": "30",
        "salary": 2028594
      },
      {
        "id": "davisan02",
        "name": "Anthony Davis",
        "position": "PF",
        "number": "3",
        "salary": 27093019
      },
      {
        "id": "dudleja01",
        "name": "Jared Dudley",
        "position": "PF",
        "number": "10",
        "salary": 2564753
      },
      {
        "id": "greenda02",
        "name": "Danny Green",
        "position": "SG",
        "number": "14",
        "salary": 14634146
      },
      {
        "id": "hortota01",
        "name": "Talen Horton-Tucker",
        "position": "SG",
        "number": "5",
        "salary": 898310
      },
      {
        "id": "howardw01",
        "name": "Dwight Howard",
        "position": "C",
        "number": "39",
        "salary": 2564753
      },
      {
        "id": "jamesle01",
        "name": "LeBron James",
        "position": "PG",
        "number": "23",
        "salary": 37436858
      },
      {
        "id": "kuzmaky01",
        "name": "Kyle Kuzma",
        "position": "PF",
        "number": "0",
        "salary": 1974600
      },
      {
        "id": "mcgeeja01",
        "name": "JaVale McGee",
        "position": "C",
        "number": "7",
        "salary": 4000000
      },
      {
        "id": "morrima02",
        "name": "Markieff Morris",
        "position": "PF",
        "number": "88",
        "salary": 1750000
      },
      {
        "id": "norveza01",
        "name": "Zach Norvell",
        "position": "SG",
        "number": "21",
        "salary": null
      },
      {
        "id": "rondora01",
        "name": "Rajon Rondo",
        "position": "PG",
        "number": "9",
        "salary": 2564753
      },
      {
        "id": "smithjr01",
        "name": "J.R. Smith",
        "position": "SG",
        "number": "21",
        "salary": 289803
      },
      {
        "id": "waitedi01",
        "name": "Dion Waiters",
        "position": "SG",
        "number": "18",
        "salary": 503656
      }
    ]
  },
  {
    "season": "2018–19",
    "team": "Toronto Raptors",
    "sourceUrl": "https://www.basketball-reference.com/teams/TOR/2019.html",
    "players": [
      {
        "id": "anunoog01",
        "name": "OG Anunoby",
        "position": "SF",
        "number": "3",
        "salary": 1952760
      },
      {
        "id": "bouchch01",
        "name": "Chris Boucher",
        "position": "PF",
        "number": "25",
        "salary": 457418
      },
      {
        "id": "brownlo01",
        "name": "Lorenzo Brown",
        "position": "PG",
        "number": "4",
        "salary": 800000
      },
      {
        "id": "gasolma01",
        "name": "Marc Gasol",
        "position": "C",
        "number": "33",
        "salary": 24119025
      },
      {
        "id": "greenda02",
        "name": "Danny Green",
        "position": "SG",
        "number": "14",
        "salary": 10000000
      },
      {
        "id": "ibakase01",
        "name": "Serge Ibaka",
        "position": "C",
        "number": "9",
        "salary": 21666667
      },
      {
        "id": "leonaka01",
        "name": "Kawhi Leonard",
        "position": "SF",
        "number": "2",
        "salary": 23114067
      },
      {
        "id": "linje01",
        "name": "Jeremy Lin",
        "position": "PG",
        "number": "17",
        "salary": 697000
      },
      {
        "id": "lowryky01",
        "name": "Kyle Lowry",
        "position": "PG",
        "number": "7",
        "salary": 31200000
      },
      {
        "id": "loydjo01",
        "name": "Jordan Loyd",
        "position": "PG",
        "number": "8",
        "salary": 0
      },
      {
        "id": "mccawpa01",
        "name": "Patrick McCaw",
        "position": "SG",
        "number": "1",
        "salary": 786211
      },
      {
        "id": "meeksjo01",
        "name": "Jodie Meeks",
        "position": "SG",
        "number": "20",
        "salary": 319677
      },
      {
        "id": "milescj01",
        "name": "C.J. Miles",
        "position": "SF",
        "number": "0",
        "salary": null
      },
      {
        "id": "millema01",
        "name": "Malcolm Miller",
        "position": "SF",
        "number": "13",
        "salary": 457418
      },
      {
        "id": "monrogr01",
        "name": "Greg Monroe",
        "position": "C",
        "number": "15",
        "salary": null
      },
      {
        "id": "moreler01",
        "name": "Eric Moreland",
        "position": "PF",
        "number": "15",
        "salary": 106237
      },
      {
        "id": "powelno01",
        "name": "Norman Powell",
        "position": "SG",
        "number": "24",
        "salary": 9367200
      },
      {
        "id": "richama01",
        "name": "Malachi Richardson",
        "position": "SG",
        "number": "22",
        "salary": null
      },
      {
        "id": "siakapa01",
        "name": "Pascal Siakam",
        "position": "PF",
        "number": "43",
        "salary": 1544951
      },
      {
        "id": "valanjo01",
        "name": "Jonas Valančiūnas",
        "position": "C",
        "number": "17",
        "salary": null
      },
      {
        "id": "vanvlfr01",
        "name": "Fred VanVleet",
        "position": "PG",
        "number": "23",
        "salary": 8653847
      },
      {
        "id": "wrighde01",
        "name": "Delon Wright",
        "position": "PG",
        "number": "55",
        "salary": null
      }
    ]
  },
  {
    "season": "2017–18",
    "team": "Golden State Warriors",
    "sourceUrl": "https://www.basketball-reference.com/teams/GSW/2018.html",
    "players": [
      {
        "id": "belljo01",
        "name": "Jordan Bell",
        "position": "C",
        "number": "2",
        "salary": 815615
      },
      {
        "id": "bouchch01",
        "name": "Chris Boucher",
        "position": "PF",
        "number": "25",
        "salary": 0
      },
      {
        "id": "casspom01",
        "name": "Omri Casspi",
        "position": "SF",
        "number": "18",
        "salary": 1471382
      },
      {
        "id": "cookqu01",
        "name": "Quinn Cook",
        "position": "PG",
        "number": "4",
        "salary": 14832
      },
      {
        "id": "curryst01",
        "name": "Stephen Curry",
        "position": "PG",
        "number": "30",
        "salary": 34682550
      },
      {
        "id": "duranke01",
        "name": "Kevin Durant",
        "position": "SF",
        "number": "35",
        "salary": 25000000
      },
      {
        "id": "greendr01",
        "name": "Draymond Green",
        "position": "PF",
        "number": "23",
        "salary": 16400000
      },
      {
        "id": "iguodan01",
        "name": "Andre Iguodala",
        "position": "SF",
        "number": "9",
        "salary": 14814815
      },
      {
        "id": "jonesda03",
        "name": "Damian Jones",
        "position": "C",
        "number": "15",
        "salary": 1312611
      },
      {
        "id": "livinsh01",
        "name": "Shaun Livingston",
        "position": "PG",
        "number": "34",
        "salary": 7692308
      },
      {
        "id": "looneke01",
        "name": "Kevon Looney",
        "position": "C",
        "number": "5",
        "salary": 1471382
      },
      {
        "id": "mccawpa01",
        "name": "Patrick McCaw",
        "position": "SG",
        "number": "0",
        "salary": 1312611
      },
      {
        "id": "mcgeeja01",
        "name": "JaVale McGee",
        "position": "C",
        "number": "1",
        "salary": 1471382
      },
      {
        "id": "pachuza01",
        "name": "Zaza Pachulia",
        "position": "C",
        "number": "27",
        "salary": 3477600
      },
      {
        "id": "thompkl01",
        "name": "Klay Thompson",
        "position": "SG",
        "number": "11",
        "salary": 17826150
      },
      {
        "id": "westda01",
        "name": "David West",
        "position": "C",
        "number": "3",
        "salary": 1471382
      },
      {
        "id": "youngni01",
        "name": "Nick Young",
        "position": "SG",
        "number": "6",
        "salary": 5192000
      }
    ]
  },
  {
    "season": "2016–17",
    "team": "Golden State Warriors",
    "sourceUrl": "https://www.basketball-reference.com/teams/GSW/2017.html",
    "players": [
      {
        "id": "barnema02",
        "name": "Matt Barnes",
        "position": "SF",
        "number": "22",
        "salary": 383351
      },
      {
        "id": "clarkia01",
        "name": "Ian Clark",
        "position": "SG",
        "number": "21",
        "salary": 1015696
      },
      {
        "id": "curryst01",
        "name": "Stephen Curry",
        "position": "PG",
        "number": "30",
        "salary": 12112359
      },
      {
        "id": "duranke01",
        "name": "Kevin Durant",
        "position": "PF",
        "number": "35",
        "salary": 26540100
      },
      {
        "id": "greendr01",
        "name": "Draymond Green",
        "position": "PF",
        "number": "23",
        "salary": 15330435
      },
      {
        "id": "iguodan01",
        "name": "Andre Iguodala",
        "position": "SF",
        "number": "9",
        "salary": 11131368
      },
      {
        "id": "jonesda03",
        "name": "Damian Jones",
        "position": "C",
        "number": "15",
        "salary": 1171560
      },
      {
        "id": "livinsh01",
        "name": "Shaun Livingston",
        "position": "PG",
        "number": "34",
        "salary": 5782450
      },
      {
        "id": "looneke01",
        "name": "Kevon Looney",
        "position": "C",
        "number": "5",
        "salary": 1182840
      },
      {
        "id": "mcadoja01",
        "name": "James Michael McAdoo",
        "position": "PF",
        "number": "20",
        "salary": 980431
      },
      {
        "id": "mccawpa01",
        "name": "Patrick McCaw",
        "position": "SG",
        "number": "0",
        "salary": 543471
      },
      {
        "id": "mcgeeja01",
        "name": "JaVale McGee",
        "position": "C",
        "number": "1",
        "salary": 1403611
      },
      {
        "id": "pachuza01",
        "name": "Zaza Pachulia",
        "position": "C",
        "number": "27",
        "salary": 2898000
      },
      {
        "id": "thompkl01",
        "name": "Klay Thompson",
        "position": "SG",
        "number": "11",
        "salary": 16663575
      },
      {
        "id": "varejan01",
        "name": "Anderson Varejão",
        "position": "C",
        "number": "18",
        "salary": 1551659
      },
      {
        "id": "weberbr01",
        "name": "Briante Weber",
        "position": "PG",
        "number": "2",
        "salary": 102898
      },
      {
        "id": "westda01",
        "name": "David West",
        "position": "C",
        "number": "3",
        "salary": 1551659
      }
    ]
  },
  {
    "season": "2015–16",
    "team": "Cleveland Cavaliers",
    "sourceUrl": "https://www.basketball-reference.com/teams/CLE/2016.html",
    "players": [
      {
        "id": "cunnija01",
        "name": "Jared Cunningham",
        "position": "SG",
        "number": "9",
        "salary": null
      },
      {
        "id": "dellama01",
        "name": "Matthew Dellavedova",
        "position": "PG",
        "number": "8",
        "salary": 1147280
      },
      {
        "id": "fryech01",
        "name": "Channing Frye",
        "position": "C",
        "number": "9",
        "salary": 7807579
      },
      {
        "id": "harrijo01",
        "name": "Joe Harris",
        "position": "SG",
        "number": "12",
        "salary": null
      },
      {
        "id": "irvinky01",
        "name": "Kyrie Irving",
        "position": "PG",
        "number": "2",
        "salary": 14746000
      },
      {
        "id": "jamesle01",
        "name": "LeBron James",
        "position": "SF",
        "number": "23",
        "salary": 22971000
      },
      {
        "id": "jefferi01",
        "name": "Richard Jefferson",
        "position": "SF",
        "number": "24",
        "salary": 1499000
      },
      {
        "id": "jonesda02",
        "name": "Dahntay Jones",
        "position": "SF",
        "number": "30",
        "salary": 8819
      },
      {
        "id": "jonesja02",
        "name": "James Jones",
        "position": "SF",
        "number": "1",
        "salary": 1499000
      },
      {
        "id": "kaunsa01",
        "name": "Sasha Kaun",
        "position": "C",
        "number": "14",
        "salary": 1300000
      },
      {
        "id": "loveke01",
        "name": "Kevin Love",
        "position": "PF",
        "number": "0",
        "salary": 19500000
      },
      {
        "id": "mcraejo01",
        "name": "Jordan McRae",
        "position": "PG",
        "number": "12",
        "salary": 172972
      },
      {
        "id": "mozgoti01",
        "name": "Timofey Mozgov",
        "position": "C",
        "number": "20",
        "salary": 4950000
      },
      {
        "id": "shumpim01",
        "name": "Iman Shumpert",
        "position": "SG",
        "number": "4",
        "salary": 9000000
      },
      {
        "id": "smithjr01",
        "name": "J.R. Smith",
        "position": "SG",
        "number": "5",
        "salary": 5000000
      },
      {
        "id": "thomptr01",
        "name": "Tristan Thompson",
        "position": "PF",
        "number": "13",
        "salary": 14260870
      },
      {
        "id": "varejan01",
        "name": "Anderson Varejão",
        "position": "C",
        "number": "17",
        "salary": null
      },
      {
        "id": "willima01",
        "name": "Mo Williams",
        "position": "PG",
        "number": "52",
        "salary": 2100000
      }
    ]
  }
]
