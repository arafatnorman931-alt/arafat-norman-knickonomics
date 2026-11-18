// Champonomics data: the last 30 completed NBA championship seasons (1996–97 to 2025–26).
// Generated from verified sources. Do not hand-edit amounts without a source.
//
// Rosters, coach, executive, arena & attendance: Basketball-Reference team pages.
// Salaries: HoopsHype team payroll pages, HoopsHype player salary pages, Spotrac team
// financial pages, or the original project dataset (Basketball-Reference salaries table).
// `salary: null` means no figure could be confirmed. It is never estimated.
// `onRoster: false` marks someone on that season's payroll (waived, traded or retired)
// who is not on Basketball-Reference's season roster.

export type ChampionPlayer = {
  id: string
  name: string
  position: string
  number: string
  /** Salary for that season in USD, or null when it could not be verified. */
  salary: number | null
  /** False when the player was paid that season but is not on the season roster. */
  onRoster: boolean
}

export type SourceRef = { label: string; url: string }

export type ChampionSeason = {
  season: string
  team: string
  abbr: string
  /** Calendar year the season (and the Finals) ended. Used for CPI. */
  endYear: number
  coach: string
  executive: string
  arena: string
  /** Regular-season home attendance (Basketball-Reference), or null if unavailable. */
  attendance: number | null
  attendanceRank: string | null
  attendanceNote: string | null
  rosterSourceUrl: string
  salarySource: SourceRef
  /** "complete" when every listed player has a verified salary. */
  payrollStatus: 'complete' | 'partial'
  /** A team payroll total published by the source, when one exists. */
  reportedPayroll: (SourceRef & { amount: number }) | null
  players: ChampionPlayer[]
}

export const championSeasons: ChampionSeason[] = [
  {
    "season": "2025–26",
    "team": "New York Knicks",
    "abbr": "NYK",
    "endYear": 2026,
    "coach": "Mike Brown",
    "executive": "Leon Rose",
    "arena": "Madison Square Garden",
    "attendance": 792480,
    "attendanceRank": "6th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/NYK/2026.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/NYK/2026.html"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "alvarjo01",
        "name": "Jose Alvarado",
        "position": "PG",
        "number": "5",
        "salary": 4500000,
        "onRoster": true
      },
      {
        "id": "anunoog01",
        "name": "OG Anunoby",
        "position": "PF",
        "number": "8",
        "salary": 39568966,
        "onRoster": true
      },
      {
        "id": "bridgmi01",
        "name": "Mikal Bridges",
        "position": "SF",
        "number": "25",
        "salary": 24900000,
        "onRoster": true
      },
      {
        "id": "brunsja01",
        "name": "Jalen Brunson",
        "position": "PG",
        "number": "11",
        "salary": 34944001,
        "onRoster": true
      },
      {
        "id": "clarkjo01",
        "name": "Jordan Clarkson",
        "position": "SG",
        "number": "00",
        "salary": 2296274,
        "onRoster": true
      },
      {
        "id": "dadiepa01",
        "name": "Pacôme Dadiet",
        "position": "SG",
        "number": "4",
        "salary": 2847600,
        "onRoster": true
      },
      {
        "id": "diawamo01",
        "name": "Mohamed Diawara",
        "position": "SF",
        "number": "51",
        "salary": 1272870,
        "onRoster": true
      },
      {
        "id": "evbuoto01",
        "name": "Tosan Evbuomwan",
        "position": "SF",
        "number": "20",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "hartjo01",
        "name": "Josh Hart",
        "position": "SF",
        "number": "3",
        "salary": 19472240,
        "onRoster": true
      },
      {
        "id": "hukpoar01",
        "name": "Ariel Hukporti",
        "position": "C",
        "number": "55",
        "salary": 1955377,
        "onRoster": true
      },
      {
        "id": "jemistr01",
        "name": "Trey Jemison",
        "position": "C",
        "number": "50",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "jonesdi01",
        "name": "Dillon Jones",
        "position": "SF",
        "number": "1",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "kolekty01",
        "name": "Tyler Kolek",
        "position": "PG",
        "number": "13",
        "salary": 2191897,
        "onRoster": true
      },
      {
        "id": "mcbrimi01",
        "name": "Miles McBride",
        "position": "SG",
        "number": "2",
        "salary": 4333333,
        "onRoster": true
      },
      {
        "id": "mcculke01",
        "name": "Kevin McCullar Jr.",
        "position": "SF",
        "number": "9",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "robinmi01",
        "name": "Mitchell Robinson",
        "position": "C",
        "number": "23",
        "salary": 12954546,
        "onRoster": true
      },
      {
        "id": "shamela01",
        "name": "Landry Shamet",
        "position": "SG",
        "number": "44",
        "salary": 2296274,
        "onRoster": true
      },
      {
        "id": "sochaje01",
        "name": "Jeremy Sochan",
        "position": "PF",
        "number": "20",
        "salary": 778622,
        "onRoster": true
      },
      {
        "id": "townska01",
        "name": "Karl-Anthony Towns",
        "position": "C",
        "number": "32",
        "salary": 53142264,
        "onRoster": true
      },
      {
        "id": "yabusgu01",
        "name": "Guerschon Yabusele",
        "position": "C",
        "number": "28",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2024–25",
    "team": "Oklahoma City Thunder",
    "abbr": "OKC",
    "endYear": 2025,
    "coach": "Mark Daigneault",
    "executive": "Sam Presti",
    "arena": "Paycom Center",
    "attendance": 754832,
    "attendanceRank": "14th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/OKC/2025.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/OKC/2025.html"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "carlsbr01",
        "name": "Branden Carlson",
        "position": "C",
        "number": "15",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "carusal01",
        "name": "Alex Caruso",
        "position": "SG",
        "number": "9",
        "salary": 9890000,
        "onRoster": true
      },
      {
        "id": "diengou01",
        "name": "Ousmane Dieng",
        "position": "C",
        "number": "13",
        "salary": 5027040,
        "onRoster": true
      },
      {
        "id": "dortlu01",
        "name": "Luguentz Dort",
        "position": "SF",
        "number": "5",
        "salary": 16500000,
        "onRoster": true
      },
      {
        "id": "ducasal01",
        "name": "Alex Ducas",
        "position": "SG",
        "number": "88",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "flaglad01",
        "name": "Adam Flagler",
        "position": "SG",
        "number": "14",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "gilgesh01",
        "name": "Shai Gilgeous-Alexander",
        "position": "PG",
        "number": "2",
        "salary": 35859950,
        "onRoster": true
      },
      {
        "id": "harteis01",
        "name": "Isaiah Hartenstein",
        "position": "C",
        "number": "55",
        "salary": 30000000,
        "onRoster": true
      },
      {
        "id": "holmgch01",
        "name": "Chet Holmgren",
        "position": "C",
        "number": "7",
        "salary": 10880640,
        "onRoster": true
      },
      {
        "id": "joeis01",
        "name": "Isaiah Joe",
        "position": "SG",
        "number": "11",
        "salary": 12991650,
        "onRoster": true
      },
      {
        "id": "jonesdi01",
        "name": "Dillon Jones",
        "position": "SF",
        "number": "3",
        "salary": 2622360,
        "onRoster": true
      },
      {
        "id": "leonsma01",
        "name": "Malevy Leons",
        "position": "SF",
        "number": "17",
        "salary": 126356,
        "onRoster": true
      },
      {
        "id": "mitchaj01",
        "name": "Ajay Mitchell",
        "position": "SG",
        "number": "25",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "reeseal01",
        "name": "Alex Reese",
        "position": "PF",
        "number": "15",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "wallaca01",
        "name": "Cason Wallace",
        "position": "SG",
        "number": "22",
        "salary": 5555880,
        "onRoster": true
      },
      {
        "id": "wiggiaa01",
        "name": "Aaron Wiggins",
        "position": "SG",
        "number": "21",
        "salary": 10514017,
        "onRoster": true
      },
      {
        "id": "willija06",
        "name": "Jalen Williams",
        "position": "SG",
        "number": "8",
        "salary": 4775760,
        "onRoster": true
      },
      {
        "id": "willija07",
        "name": "Jaylin Williams",
        "position": "PF",
        "number": "6",
        "salary": 2019699,
        "onRoster": true
      },
      {
        "id": "willike04",
        "name": "Kenrich Williams",
        "position": "PF",
        "number": "34",
        "salary": 6669000,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2023–24",
    "team": "Boston Celtics",
    "abbr": "BOS",
    "endYear": 2024,
    "coach": "Joe Mazzulla",
    "executive": "Brad Stevens",
    "arena": "TD Garden",
    "attendance": 785396,
    "attendanceRank": "10th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/BOS/2024.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/BOS/2024.html"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "bantoda01",
        "name": "Dalano Banton",
        "position": "PG",
        "number": "45",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "brissos01",
        "name": "Oshae Brissett",
        "position": "SF",
        "number": "12",
        "salary": 2165000,
        "onRoster": true
      },
      {
        "id": "brownja02",
        "name": "Jaylen Brown",
        "position": "SF",
        "number": "7",
        "salary": 31830357,
        "onRoster": true
      },
      {
        "id": "davisjd01",
        "name": "JD Davison",
        "position": "SG",
        "number": "20",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "hausesa01",
        "name": "Sam Hauser",
        "position": "SF",
        "number": "30",
        "salary": 1927896,
        "onRoster": true
      },
      {
        "id": "holidjr01",
        "name": "Jrue Holiday",
        "position": "PG",
        "number": "4",
        "salary": 36861707,
        "onRoster": true
      },
      {
        "id": "horfoal01",
        "name": "Al Horford",
        "position": "C",
        "number": "42",
        "salary": 10000000,
        "onRoster": true
      },
      {
        "id": "kornelu01",
        "name": "Luke Kornet",
        "position": "C",
        "number": "40",
        "salary": 2413304,
        "onRoster": true
      },
      {
        "id": "mykhasv01",
        "name": "Svi Mykhailiuk",
        "position": "SF",
        "number": "50",
        "salary": 2019706,
        "onRoster": true
      },
      {
        "id": "peterdr01",
        "name": "Drew Peterson",
        "position": "PF",
        "number": "13",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "porzikr01",
        "name": "Kristaps Porziņģis",
        "position": "C",
        "number": "8",
        "salary": 36016200,
        "onRoster": true
      },
      {
        "id": "pritcpa01",
        "name": "Payton Pritchard",
        "position": "PG",
        "number": "11",
        "salary": 4037277,
        "onRoster": true
      },
      {
        "id": "quetane01",
        "name": "Neemias Queta",
        "position": "C",
        "number": "88",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "sprinja01",
        "name": "Jaden Springer",
        "position": "SG",
        "number": "44",
        "salary": 2226240,
        "onRoster": true
      },
      {
        "id": "stevela01",
        "name": "Lamar Stevens",
        "position": "PF",
        "number": "77",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "tatumja01",
        "name": "Jayson Tatum",
        "position": "PF",
        "number": "0",
        "salary": 32600060,
        "onRoster": true
      },
      {
        "id": "tillmxa01",
        "name": "Xavier Tillman Sr.",
        "position": "PF",
        "number": "26",
        "salary": 1930681,
        "onRoster": true
      },
      {
        "id": "walshjo01",
        "name": "Jordan Walsh",
        "position": "SF",
        "number": "27",
        "salary": 1119563,
        "onRoster": true
      },
      {
        "id": "whitede01",
        "name": "Derrick White",
        "position": "SG",
        "number": "9",
        "salary": 18357143,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2022–23",
    "team": "Denver Nuggets",
    "abbr": "DEN",
    "endYear": 2023,
    "coach": "Michael Malone",
    "executive": "Calvin Booth",
    "arena": "Ball Arena",
    "attendance": 788635,
    "attendanceRank": "7th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/DEN/2023.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/DEN/2023.html"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "braunch01",
        "name": "Christian Braun",
        "position": "SG",
        "number": "0",
        "salary": 2808600,
        "onRoster": true
      },
      {
        "id": "brownbr01",
        "name": "Bruce Brown",
        "position": "SF",
        "number": "11",
        "salary": 6479000,
        "onRoster": true
      },
      {
        "id": "bryanth01",
        "name": "Thomas Bryant",
        "position": "C",
        "number": "13",
        "salary": 1836090,
        "onRoster": true
      },
      {
        "id": "caldwke01",
        "name": "Kentavious Caldwell-Pope",
        "position": "SG",
        "number": "5",
        "salary": 14004703,
        "onRoster": true
      },
      {
        "id": "cancavl01",
        "name": "Vlatko Čančar",
        "position": "PF",
        "number": "31",
        "salary": 2234359,
        "onRoster": true
      },
      {
        "id": "gordoaa01",
        "name": "Aaron Gordon",
        "position": "PF",
        "number": "50",
        "salary": 19690909,
        "onRoster": true
      },
      {
        "id": "greenje02",
        "name": "Jeff Green",
        "position": "PF",
        "number": "32",
        "salary": 4500000,
        "onRoster": true
      },
      {
        "id": "hylanbo01",
        "name": "Bones Hyland",
        "position": "PG",
        "number": "3",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "jacksre01",
        "name": "Reggie Jackson",
        "position": "PG",
        "number": "7",
        "salary": 580373,
        "onRoster": true
      },
      {
        "id": "jokicni01",
        "name": "Nikola Jokić",
        "position": "C",
        "number": "15",
        "salary": 33047803,
        "onRoster": true
      },
      {
        "id": "jordade01",
        "name": "DeAndre Jordan",
        "position": "C",
        "number": "6",
        "salary": 1836090,
        "onRoster": true
      },
      {
        "id": "murraja01",
        "name": "Jamal Murray",
        "position": "PG",
        "number": "27",
        "salary": 31650600,
        "onRoster": true
      },
      {
        "id": "nnajize01",
        "name": "Zeke Nnaji",
        "position": "PF",
        "number": "22",
        "salary": 2617800,
        "onRoster": true
      },
      {
        "id": "portemi01",
        "name": "Michael Porter Jr.",
        "position": "SF",
        "number": "1",
        "salary": 30913750,
        "onRoster": true
      },
      {
        "id": "reedda01",
        "name": "Davon Reed",
        "position": "SG",
        "number": "9",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "smithis01",
        "name": "Ish Smith",
        "position": "PG",
        "number": "14",
        "salary": 4725000,
        "onRoster": true
      },
      {
        "id": "watsope01",
        "name": "Peyton Watson",
        "position": "SG",
        "number": "8",
        "salary": 2193960,
        "onRoster": true
      },
      {
        "id": "whiteja03",
        "name": "Jack White",
        "position": "SF",
        "number": "10",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2021–22",
    "team": "Golden State Warriors",
    "abbr": "GSW",
    "endYear": 2022,
    "coach": "Steve Kerr",
    "executive": "Bob Myers",
    "arena": "Chase Center",
    "attendance": 740624,
    "attendanceRank": "10th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/GSW/2022.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/GSW/2022.html"
    },
    "payrollStatus": "complete",
    "reportedPayroll": null,
    "players": [
      {
        "id": "bjeline01",
        "name": "Nemanja Bjelica",
        "position": "C",
        "number": "8",
        "salary": 2089448,
        "onRoster": true
      },
      {
        "id": "chiozch01",
        "name": "Chris Chiozza",
        "position": "PG",
        "number": "2",
        "salary": 0,
        "onRoster": true
      },
      {
        "id": "curryst01",
        "name": "Stephen Curry",
        "position": "PG",
        "number": "30",
        "salary": 45780966,
        "onRoster": true
      },
      {
        "id": "dowtije01",
        "name": "Jeff Dowtin Jr.",
        "position": "PG",
        "number": "21",
        "salary": 0,
        "onRoster": true
      },
      {
        "id": "greendr01",
        "name": "Draymond Green",
        "position": "PF",
        "number": "23",
        "salary": 24026712,
        "onRoster": true
      },
      {
        "id": "iguodan01",
        "name": "Andre Iguodala",
        "position": "SF",
        "number": "9",
        "salary": 2641691,
        "onRoster": true
      },
      {
        "id": "kuminjo01",
        "name": "Jonathan Kuminga",
        "position": "SF",
        "number": "00",
        "salary": 5466360,
        "onRoster": true
      },
      {
        "id": "leeda03",
        "name": "Damion Lee",
        "position": "SG",
        "number": "1",
        "salary": 1910860,
        "onRoster": true
      },
      {
        "id": "looneke01",
        "name": "Kevon Looney",
        "position": "C",
        "number": "5",
        "salary": 5178572,
        "onRoster": true
      },
      {
        "id": "moodymo01",
        "name": "Moses Moody",
        "position": "SG",
        "number": "4",
        "salary": 3562080,
        "onRoster": true
      },
      {
        "id": "paytoga02",
        "name": "Gary Payton II",
        "position": "SG",
        "number": "0",
        "salary": 1939350,
        "onRoster": true
      },
      {
        "id": "poolejo01",
        "name": "Jordan Poole",
        "position": "SG",
        "number": "3",
        "salary": 2161440,
        "onRoster": true
      },
      {
        "id": "porteot01",
        "name": "Otto Porter Jr.",
        "position": "PF",
        "number": "32",
        "salary": 2389641,
        "onRoster": true
      },
      {
        "id": "thompkl01",
        "name": "Klay Thompson",
        "position": "SG",
        "number": "11",
        "salary": 37980720,
        "onRoster": true
      },
      {
        "id": "toscaju01",
        "name": "Juan Toscano-Anderson",
        "position": "SF",
        "number": "95",
        "salary": 1701593,
        "onRoster": true
      },
      {
        "id": "weathqu01",
        "name": "Quinndary Weatherspoon",
        "position": "SG",
        "number": "12",
        "salary": 95930,
        "onRoster": true
      },
      {
        "id": "wiggian01",
        "name": "Andrew Wiggins",
        "position": "SF",
        "number": "22",
        "salary": 31579390,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2020–21",
    "team": "Milwaukee Bucks",
    "abbr": "MIL",
    "endYear": 2021,
    "coach": "Mike Budenholzer",
    "executive": "Jon Horst",
    "arena": "Fiserv Forum",
    "attendance": 64780,
    "attendanceRank": "10th of 30",
    "attendanceNote": "COVID-19 limited-capacity season",
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/MIL/2021.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/MIL/2021.html"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "adamsja01",
        "name": "Jaylen Adams",
        "position": "PG",
        "number": "6",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "antetgi01",
        "name": "Giannis Antetokounmpo",
        "position": "PF",
        "number": "34",
        "salary": 27528088,
        "onRoster": true
      },
      {
        "id": "antetth01",
        "name": "Thanasis Antetokounmpo",
        "position": "SF",
        "number": "43",
        "salary": 1701593,
        "onRoster": true
      },
      {
        "id": "augusdj01",
        "name": "D.J. Augustin",
        "position": "PG",
        "number": "12",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "bryanel01",
        "name": "Elijah Bryant",
        "position": "SG",
        "number": "3",
        "salary": 24611,
        "onRoster": true
      },
      {
        "id": "connapa01",
        "name": "Pat Connaughton",
        "position": "SG",
        "number": "24",
        "salary": 4938273,
        "onRoster": true
      },
      {
        "id": "craigto01",
        "name": "Torrey Craig",
        "position": "SF",
        "number": "3",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "diakima01",
        "name": "Mamadi Diakite",
        "position": "PF",
        "number": "25",
        "salary": 160173,
        "onRoster": true
      },
      {
        "id": "divindo01",
        "name": "Donte DiVincenzo",
        "position": "SG",
        "number": "0",
        "salary": 3044160,
        "onRoster": true
      },
      {
        "id": "forbebr01",
        "name": "Bryn Forbes",
        "position": "SG",
        "number": "7",
        "salary": 2337145,
        "onRoster": true
      },
      {
        "id": "holidjr01",
        "name": "Jrue Holiday",
        "position": "PG",
        "number": "21",
        "salary": 25876111,
        "onRoster": true
      },
      {
        "id": "jacksju01",
        "name": "Justin Jackson",
        "position": "SF",
        "number": "44",
        "salary": 0,
        "onRoster": true
      },
      {
        "id": "kurucro01",
        "name": "Rodions Kurucs",
        "position": "SF",
        "number": "00",
        "salary": 1780152,
        "onRoster": true
      },
      {
        "id": "lopezbr01",
        "name": "Brook Lopez",
        "position": "C",
        "number": "11",
        "salary": 12697675,
        "onRoster": true
      },
      {
        "id": "merrisa01",
        "name": "Sam Merrill",
        "position": "SG",
        "number": "15",
        "salary": 898310,
        "onRoster": true
      },
      {
        "id": "middlkh01",
        "name": "Khris Middleton",
        "position": "SF",
        "number": "22",
        "salary": 33051724,
        "onRoster": true
      },
      {
        "id": "nworajo01",
        "name": "Jordan Nwora",
        "position": "SF",
        "number": "13",
        "salary": 898310,
        "onRoster": true
      },
      {
        "id": "portibo01",
        "name": "Bobby Portis",
        "position": "C",
        "number": "9",
        "salary": 3623000,
        "onRoster": true
      },
      {
        "id": "teaguje01",
        "name": "Jeff Teague",
        "position": "PG",
        "number": "5",
        "salary": 510589,
        "onRoster": true
      },
      {
        "id": "toupaax01",
        "name": "Axel Toupane",
        "position": "SF",
        "number": "66",
        "salary": 0,
        "onRoster": true
      },
      {
        "id": "tuckepj01",
        "name": "P.J. Tucker",
        "position": "PF",
        "number": "17",
        "salary": 7969537,
        "onRoster": true
      },
      {
        "id": "wilsodj01",
        "name": "D.J. Wilson",
        "position": "PF",
        "number": "5",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2019–20",
    "team": "Los Angeles Lakers",
    "abbr": "LAL",
    "endYear": 2020,
    "coach": "Frank Vogel",
    "executive": "Rob Pelinka",
    "arena": "STAPLES Center",
    "attendance": 588907,
    "attendanceRank": "14th of 30",
    "attendanceNote": "Season interrupted by COVID-19; playoffs held without fans",
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/LAL/2020.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/LAL/2020.html"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "antetko01",
        "name": "Kostas Antetokounmpo",
        "position": "PF",
        "number": "37",
        "salary": 0,
        "onRoster": true
      },
      {
        "id": "bradlav01",
        "name": "Avery Bradley",
        "position": "SG",
        "number": "11",
        "salary": 4767000,
        "onRoster": true
      },
      {
        "id": "cacokde01",
        "name": "Devontae Cacok",
        "position": "C",
        "number": "12",
        "salary": 0,
        "onRoster": true
      },
      {
        "id": "caldwke01",
        "name": "Kentavious Caldwell-Pope",
        "position": "SG",
        "number": "1",
        "salary": 8089282,
        "onRoster": true
      },
      {
        "id": "carusal01",
        "name": "Alex Caruso",
        "position": "PG",
        "number": "4",
        "salary": 2750000,
        "onRoster": true
      },
      {
        "id": "cookqu01",
        "name": "Quinn Cook",
        "position": "PG",
        "number": "2, 28",
        "salary": 3000000,
        "onRoster": true
      },
      {
        "id": "danietr01",
        "name": "Troy Daniels",
        "position": "SG",
        "number": "30",
        "salary": 2028594,
        "onRoster": true
      },
      {
        "id": "davisan02",
        "name": "Anthony Davis",
        "position": "PF",
        "number": "3",
        "salary": 27093019,
        "onRoster": true
      },
      {
        "id": "dudleja01",
        "name": "Jared Dudley",
        "position": "PF",
        "number": "10",
        "salary": 2564753,
        "onRoster": true
      },
      {
        "id": "greenda02",
        "name": "Danny Green",
        "position": "SG",
        "number": "14",
        "salary": 14634146,
        "onRoster": true
      },
      {
        "id": "hortota01",
        "name": "Talen Horton-Tucker",
        "position": "SG",
        "number": "5",
        "salary": 898310,
        "onRoster": true
      },
      {
        "id": "howardw01",
        "name": "Dwight Howard",
        "position": "C",
        "number": "39",
        "salary": 2564753,
        "onRoster": true
      },
      {
        "id": "jamesle01",
        "name": "LeBron James",
        "position": "PG",
        "number": "23",
        "salary": 37436858,
        "onRoster": true
      },
      {
        "id": "kuzmaky01",
        "name": "Kyle Kuzma",
        "position": "PF",
        "number": "0",
        "salary": 1974600,
        "onRoster": true
      },
      {
        "id": "mcgeeja01",
        "name": "JaVale McGee",
        "position": "C",
        "number": "7",
        "salary": 4000000,
        "onRoster": true
      },
      {
        "id": "morrima02",
        "name": "Markieff Morris",
        "position": "PF",
        "number": "88",
        "salary": 1750000,
        "onRoster": true
      },
      {
        "id": "norveza01",
        "name": "Zach Norvell",
        "position": "SG",
        "number": "21",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "rondora01",
        "name": "Rajon Rondo",
        "position": "PG",
        "number": "9",
        "salary": 2564753,
        "onRoster": true
      },
      {
        "id": "smithjr01",
        "name": "J.R. Smith",
        "position": "SG",
        "number": "21",
        "salary": 289803,
        "onRoster": true
      },
      {
        "id": "waitedi01",
        "name": "Dion Waiters",
        "position": "SG",
        "number": "18",
        "salary": 503656,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2018–19",
    "team": "Toronto Raptors",
    "abbr": "TOR",
    "endYear": 2019,
    "coach": "Nick Nurse",
    "executive": "Masai Ujiri",
    "arena": "Scotiabank Arena",
    "attendance": 812822,
    "attendanceRank": "4th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/TOR/2019.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/TOR/2019.html"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "anunoog01",
        "name": "OG Anunoby",
        "position": "SF",
        "number": "3",
        "salary": 1952760,
        "onRoster": true
      },
      {
        "id": "bouchch01",
        "name": "Chris Boucher",
        "position": "PF",
        "number": "25",
        "salary": 457418,
        "onRoster": true
      },
      {
        "id": "brownlo01",
        "name": "Lorenzo Brown",
        "position": "PG",
        "number": "4",
        "salary": 800000,
        "onRoster": true
      },
      {
        "id": "gasolma01",
        "name": "Marc Gasol",
        "position": "C",
        "number": "33",
        "salary": 24119025,
        "onRoster": true
      },
      {
        "id": "greenda02",
        "name": "Danny Green",
        "position": "SG",
        "number": "14",
        "salary": 10000000,
        "onRoster": true
      },
      {
        "id": "ibakase01",
        "name": "Serge Ibaka",
        "position": "C",
        "number": "9",
        "salary": 21666667,
        "onRoster": true
      },
      {
        "id": "leonaka01",
        "name": "Kawhi Leonard",
        "position": "SF",
        "number": "2",
        "salary": 23114067,
        "onRoster": true
      },
      {
        "id": "linje01",
        "name": "Jeremy Lin",
        "position": "PG",
        "number": "17",
        "salary": 697000,
        "onRoster": true
      },
      {
        "id": "lowryky01",
        "name": "Kyle Lowry",
        "position": "PG",
        "number": "7",
        "salary": 31200000,
        "onRoster": true
      },
      {
        "id": "loydjo01",
        "name": "Jordan Loyd",
        "position": "PG",
        "number": "8",
        "salary": 0,
        "onRoster": true
      },
      {
        "id": "mccawpa01",
        "name": "Patrick McCaw",
        "position": "SG",
        "number": "1",
        "salary": 786211,
        "onRoster": true
      },
      {
        "id": "meeksjo01",
        "name": "Jodie Meeks",
        "position": "SG",
        "number": "20",
        "salary": 319677,
        "onRoster": true
      },
      {
        "id": "milescj01",
        "name": "C.J. Miles",
        "position": "SF",
        "number": "0",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "millema01",
        "name": "Malcolm Miller",
        "position": "SF",
        "number": "13",
        "salary": 457418,
        "onRoster": true
      },
      {
        "id": "monrogr01",
        "name": "Greg Monroe",
        "position": "C",
        "number": "15",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "moreler01",
        "name": "Eric Moreland",
        "position": "PF",
        "number": "15",
        "salary": 106237,
        "onRoster": true
      },
      {
        "id": "powelno01",
        "name": "Norman Powell",
        "position": "SG",
        "number": "24",
        "salary": 9367200,
        "onRoster": true
      },
      {
        "id": "richama01",
        "name": "Malachi Richardson",
        "position": "SG",
        "number": "22",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "siakapa01",
        "name": "Pascal Siakam",
        "position": "PF",
        "number": "43",
        "salary": 1544951,
        "onRoster": true
      },
      {
        "id": "valanjo01",
        "name": "Jonas Valančiūnas",
        "position": "C",
        "number": "17",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "vanvlfr01",
        "name": "Fred VanVleet",
        "position": "PG",
        "number": "23",
        "salary": 8653847,
        "onRoster": true
      },
      {
        "id": "wrighde01",
        "name": "Delon Wright",
        "position": "PG",
        "number": "55",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2017–18",
    "team": "Golden State Warriors",
    "abbr": "GSW",
    "endYear": 2018,
    "coach": "Steve Kerr",
    "executive": "Bob Myers",
    "arena": "Oracle Arena",
    "attendance": 803436,
    "attendanceRank": "7th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/GSW/2018.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/GSW/2018.html"
    },
    "payrollStatus": "complete",
    "reportedPayroll": null,
    "players": [
      {
        "id": "belljo01",
        "name": "Jordan Bell",
        "position": "C",
        "number": "2",
        "salary": 815615,
        "onRoster": true
      },
      {
        "id": "bouchch01",
        "name": "Chris Boucher",
        "position": "PF",
        "number": "25",
        "salary": 0,
        "onRoster": true
      },
      {
        "id": "casspom01",
        "name": "Omri Casspi",
        "position": "SF",
        "number": "18",
        "salary": 1471382,
        "onRoster": true
      },
      {
        "id": "cookqu01",
        "name": "Quinn Cook",
        "position": "PG",
        "number": "4",
        "salary": 14832,
        "onRoster": true
      },
      {
        "id": "curryst01",
        "name": "Stephen Curry",
        "position": "PG",
        "number": "30",
        "salary": 34682550,
        "onRoster": true
      },
      {
        "id": "duranke01",
        "name": "Kevin Durant",
        "position": "SF",
        "number": "35",
        "salary": 25000000,
        "onRoster": true
      },
      {
        "id": "greendr01",
        "name": "Draymond Green",
        "position": "PF",
        "number": "23",
        "salary": 16400000,
        "onRoster": true
      },
      {
        "id": "iguodan01",
        "name": "Andre Iguodala",
        "position": "SF",
        "number": "9",
        "salary": 14814815,
        "onRoster": true
      },
      {
        "id": "jonesda03",
        "name": "Damian Jones",
        "position": "C",
        "number": "15",
        "salary": 1312611,
        "onRoster": true
      },
      {
        "id": "livinsh01",
        "name": "Shaun Livingston",
        "position": "PG",
        "number": "34",
        "salary": 7692308,
        "onRoster": true
      },
      {
        "id": "looneke01",
        "name": "Kevon Looney",
        "position": "C",
        "number": "5",
        "salary": 1471382,
        "onRoster": true
      },
      {
        "id": "mccawpa01",
        "name": "Patrick McCaw",
        "position": "SG",
        "number": "0",
        "salary": 1312611,
        "onRoster": true
      },
      {
        "id": "mcgeeja01",
        "name": "JaVale McGee",
        "position": "C",
        "number": "1",
        "salary": 1471382,
        "onRoster": true
      },
      {
        "id": "pachuza01",
        "name": "Zaza Pachulia",
        "position": "C",
        "number": "27",
        "salary": 3477600,
        "onRoster": true
      },
      {
        "id": "thompkl01",
        "name": "Klay Thompson",
        "position": "SG",
        "number": "11",
        "salary": 17826150,
        "onRoster": true
      },
      {
        "id": "westda01",
        "name": "David West",
        "position": "C",
        "number": "3",
        "salary": 1471382,
        "onRoster": true
      },
      {
        "id": "youngni01",
        "name": "Nick Young",
        "position": "SG",
        "number": "6",
        "salary": 5192000,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2016–17",
    "team": "Golden State Warriors",
    "abbr": "GSW",
    "endYear": 2017,
    "coach": "Steve Kerr",
    "executive": "Bob Myers",
    "arena": "Oracle Arena",
    "attendance": 803436,
    "attendanceRank": "8th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/GSW/2017.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/GSW/2017.html"
    },
    "payrollStatus": "complete",
    "reportedPayroll": null,
    "players": [
      {
        "id": "barnema02",
        "name": "Matt Barnes",
        "position": "SF",
        "number": "22",
        "salary": 383351,
        "onRoster": true
      },
      {
        "id": "clarkia01",
        "name": "Ian Clark",
        "position": "SG",
        "number": "21",
        "salary": 1015696,
        "onRoster": true
      },
      {
        "id": "curryst01",
        "name": "Stephen Curry",
        "position": "PG",
        "number": "30",
        "salary": 12112359,
        "onRoster": true
      },
      {
        "id": "duranke01",
        "name": "Kevin Durant",
        "position": "PF",
        "number": "35",
        "salary": 26540100,
        "onRoster": true
      },
      {
        "id": "greendr01",
        "name": "Draymond Green",
        "position": "PF",
        "number": "23",
        "salary": 15330435,
        "onRoster": true
      },
      {
        "id": "iguodan01",
        "name": "Andre Iguodala",
        "position": "SF",
        "number": "9",
        "salary": 11131368,
        "onRoster": true
      },
      {
        "id": "jonesda03",
        "name": "Damian Jones",
        "position": "C",
        "number": "15",
        "salary": 1171560,
        "onRoster": true
      },
      {
        "id": "livinsh01",
        "name": "Shaun Livingston",
        "position": "PG",
        "number": "34",
        "salary": 5782450,
        "onRoster": true
      },
      {
        "id": "looneke01",
        "name": "Kevon Looney",
        "position": "C",
        "number": "5",
        "salary": 1182840,
        "onRoster": true
      },
      {
        "id": "mcadoja01",
        "name": "James Michael McAdoo",
        "position": "PF",
        "number": "20",
        "salary": 980431,
        "onRoster": true
      },
      {
        "id": "mccawpa01",
        "name": "Patrick McCaw",
        "position": "SG",
        "number": "0",
        "salary": 543471,
        "onRoster": true
      },
      {
        "id": "mcgeeja01",
        "name": "JaVale McGee",
        "position": "C",
        "number": "1",
        "salary": 1403611,
        "onRoster": true
      },
      {
        "id": "pachuza01",
        "name": "Zaza Pachulia",
        "position": "C",
        "number": "27",
        "salary": 2898000,
        "onRoster": true
      },
      {
        "id": "thompkl01",
        "name": "Klay Thompson",
        "position": "SG",
        "number": "11",
        "salary": 16663575,
        "onRoster": true
      },
      {
        "id": "varejan01",
        "name": "Anderson Varejão",
        "position": "C",
        "number": "18",
        "salary": 1551659,
        "onRoster": true
      },
      {
        "id": "weberbr01",
        "name": "Briante Weber",
        "position": "PG",
        "number": "2",
        "salary": 102898,
        "onRoster": true
      },
      {
        "id": "westda01",
        "name": "David West",
        "position": "C",
        "number": "3",
        "salary": 1551659,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2015–16",
    "team": "Cleveland Cavaliers",
    "abbr": "CLE",
    "endYear": 2016,
    "coach": "David Blatt / Tyronn Lue",
    "executive": "David Griffin",
    "arena": "Quicken Loans Arena",
    "attendance": null,
    "attendanceRank": null,
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/CLE/2016.html",
    "salarySource": {
      "label": "Basketball-Reference salaries table (original project dataset)",
      "url": "https://www.basketball-reference.com/teams/CLE/2016.html"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "cunnija01",
        "name": "Jared Cunningham",
        "position": "SG",
        "number": "9",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "dellama01",
        "name": "Matthew Dellavedova",
        "position": "PG",
        "number": "8",
        "salary": 1147280,
        "onRoster": true
      },
      {
        "id": "fryech01",
        "name": "Channing Frye",
        "position": "C",
        "number": "9",
        "salary": 7807579,
        "onRoster": true
      },
      {
        "id": "harrijo01",
        "name": "Joe Harris",
        "position": "SG",
        "number": "12",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "irvinky01",
        "name": "Kyrie Irving",
        "position": "PG",
        "number": "2",
        "salary": 14746000,
        "onRoster": true
      },
      {
        "id": "jamesle01",
        "name": "LeBron James",
        "position": "SF",
        "number": "23",
        "salary": 22971000,
        "onRoster": true
      },
      {
        "id": "jefferi01",
        "name": "Richard Jefferson",
        "position": "SF",
        "number": "24",
        "salary": 1499000,
        "onRoster": true
      },
      {
        "id": "jonesda02",
        "name": "Dahntay Jones",
        "position": "SF",
        "number": "30",
        "salary": 8819,
        "onRoster": true
      },
      {
        "id": "jonesja02",
        "name": "James Jones",
        "position": "SF",
        "number": "1",
        "salary": 1499000,
        "onRoster": true
      },
      {
        "id": "kaunsa01",
        "name": "Sasha Kaun",
        "position": "C",
        "number": "14",
        "salary": 1300000,
        "onRoster": true
      },
      {
        "id": "loveke01",
        "name": "Kevin Love",
        "position": "PF",
        "number": "0",
        "salary": 19500000,
        "onRoster": true
      },
      {
        "id": "mcraejo01",
        "name": "Jordan McRae",
        "position": "PG",
        "number": "12",
        "salary": 172972,
        "onRoster": true
      },
      {
        "id": "mozgoti01",
        "name": "Timofey Mozgov",
        "position": "C",
        "number": "20",
        "salary": 4950000,
        "onRoster": true
      },
      {
        "id": "shumpim01",
        "name": "Iman Shumpert",
        "position": "SG",
        "number": "4",
        "salary": 9000000,
        "onRoster": true
      },
      {
        "id": "smithjr01",
        "name": "J.R. Smith",
        "position": "SG",
        "number": "5",
        "salary": 5000000,
        "onRoster": true
      },
      {
        "id": "thomptr01",
        "name": "Tristan Thompson",
        "position": "PF",
        "number": "13",
        "salary": 14260870,
        "onRoster": true
      },
      {
        "id": "varejan01",
        "name": "Anderson Varejão",
        "position": "C",
        "number": "17",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "willima01",
        "name": "Mo Williams",
        "position": "PG",
        "number": "52",
        "salary": 2100000,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2014–15",
    "team": "Golden State Warriors",
    "abbr": "GSW",
    "endYear": 2015,
    "coach": "Steve Kerr",
    "executive": "Bob Myers",
    "arena": "Oracle Arena",
    "attendance": 803436,
    "attendanceRank": "7th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/GSW/2015.html",
    "salarySource": {
      "label": "Spotrac 2014-15 Golden State Warriors financials",
      "url": "https://www.spotrac.com/nba/golden-state-warriors/overview/_/year/2014/sort/cap_total2"
    },
    "payrollStatus": "partial",
    "reportedPayroll": {
      "amount": 80391141,
      "label": "Spotrac total cap allocations",
      "url": "https://www.spotrac.com/nba/golden-state-warriors/cap/_/year/2014"
    },
    "players": [
      {
        "id": "leandro-barbosa",
        "name": "Leandro Barbosa",
        "position": "SG",
        "number": "19",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "harrison-barnes",
        "name": "Harrison Barnes",
        "position": "SF",
        "number": "40",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "andrew-bogut",
        "name": "Andrew Bogut",
        "position": "C",
        "number": "12",
        "salary": 12972973,
        "onRoster": true
      },
      {
        "id": "stephen-curry",
        "name": "Stephen Curry",
        "position": "PG",
        "number": "30",
        "salary": 10629213,
        "onRoster": true
      },
      {
        "id": "festus-ezeli",
        "name": "Festus Ezeli",
        "position": "C",
        "number": "31",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "draymond-green",
        "name": "Draymond Green",
        "position": "PF",
        "number": "23",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "justin-holiday",
        "name": "Justin Holiday",
        "position": "SG",
        "number": "7",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "andre-iguodala",
        "name": "Andre Iguodala",
        "position": "SF",
        "number": "9",
        "salary": 12289544,
        "onRoster": true
      },
      {
        "id": "ognjen-kuzmic",
        "name": "Ognjen Kuzmić",
        "position": "C",
        "number": "1",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "david-lee",
        "name": "David Lee",
        "position": "PF",
        "number": "10",
        "salary": 15012000,
        "onRoster": true
      },
      {
        "id": "shaun-livingston",
        "name": "Shaun Livingston",
        "position": "PG",
        "number": "34",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "james-michael-mcadoo",
        "name": "James Michael McAdoo",
        "position": "PF",
        "number": "20",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "brandon-rush",
        "name": "Brandon Rush",
        "position": "SG",
        "number": "4",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "marreese-speights",
        "name": "Marreese Speights",
        "position": "C",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "klay-thompson",
        "name": "Klay Thompson",
        "position": "SG",
        "number": "11",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2013–14",
    "team": "San Antonio Spurs",
    "abbr": "SAS",
    "endYear": 2014,
    "coach": "Gregg Popovich",
    "executive": "R.C. Buford",
    "arena": "AT&T Center",
    "attendance": 755031,
    "attendanceRank": "9th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/SAS/2014.html",
    "salarySource": {
      "label": "Spotrac 2013-14 San Antonio Spurs financials",
      "url": "https://www.spotrac.com/nba/san-antonio-spurs/overview/_/year/2013"
    },
    "payrollStatus": "partial",
    "reportedPayroll": {
      "amount": 63379810,
      "label": "Spotrac total cap allocations",
      "url": "https://www.spotrac.com/nba/san-antonio-spurs/overview/_/year/2013"
    },
    "players": [
      {
        "id": "jeff-ayres",
        "name": "Jeff Ayres",
        "position": "PF",
        "number": "11",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "aron-baynes",
        "name": "Aron Baynes",
        "position": "C",
        "number": "16",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "marco-belinelli",
        "name": "Marco Belinelli",
        "position": "SF",
        "number": "3",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "matt-bonner",
        "name": "Matt Bonner",
        "position": "PF",
        "number": "15",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "shannon-brown",
        "name": "Shannon Brown",
        "position": "SG",
        "number": "1",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "austin-daye",
        "name": "Austin Daye",
        "position": "SF",
        "number": "23",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "nando-de-colo",
        "name": "Nando De Colo",
        "position": "SG",
        "number": "25",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "boris-diaw",
        "name": "Boris Diaw",
        "position": "PF",
        "number": "33",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "tim-duncan",
        "name": "Tim Duncan",
        "position": "C",
        "number": "21",
        "salary": 10361446,
        "onRoster": true
      },
      {
        "id": "manu-ginobili",
        "name": "Manu Ginóbili",
        "position": "SG",
        "number": "20",
        "salary": 7500000,
        "onRoster": true
      },
      {
        "id": "danny-green",
        "name": "Danny Green",
        "position": "SG",
        "number": "4",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "damion-james",
        "name": "Damion James",
        "position": "SF",
        "number": "7",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "othyus-jeffers",
        "name": "Othyus Jeffers",
        "position": "SG",
        "number": "7",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "cory-joseph",
        "name": "Cory Joseph",
        "position": "SG",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "kawhi-leonard",
        "name": "Kawhi Leonard",
        "position": "SF",
        "number": "2",
        "salary": 1887840,
        "onRoster": true
      },
      {
        "id": "patty-mills",
        "name": "Patty Mills",
        "position": "PG",
        "number": "8",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "tony-parker",
        "name": "Tony Parker",
        "position": "PG",
        "number": "9",
        "salary": 12500000,
        "onRoster": true
      },
      {
        "id": "tiago-splitter",
        "name": "Tiago Splitter",
        "position": "C",
        "number": "22",
        "salary": 10000000,
        "onRoster": true
      },
      {
        "id": "malcolm-thomas",
        "name": "Malcolm Thomas",
        "position": "PF",
        "number": "24",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2012–13",
    "team": "Miami Heat",
    "abbr": "MIA",
    "endYear": 2013,
    "coach": "Erik Spoelstra",
    "executive": "Pat Riley",
    "arena": "AmericanAirlines Arena",
    "attendance": 819290,
    "attendanceRank": "3rd of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/MIA/2013.html",
    "salarySource": {
      "label": "Spotrac 2012-13 Miami Heat financials",
      "url": "https://www.spotrac.com/nba/miami-heat/overview/_/year/2012"
    },
    "payrollStatus": "partial",
    "reportedPayroll": {
      "amount": 83431885,
      "label": "Spotrac total cap allocations",
      "url": "https://www.spotrac.com/nba/miami-heat/cap/_/year/2012"
    },
    "players": [
      {
        "id": "ray-allen",
        "name": "Ray Allen",
        "position": "SG",
        "number": "34",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "chris-andersen",
        "name": "Chris Andersen",
        "position": "C",
        "number": "11",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "joel-anthony",
        "name": "Joel Anthony",
        "position": "C",
        "number": "50",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "shane-battier",
        "name": "Shane Battier",
        "position": "SF",
        "number": "31",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "chris-bosh",
        "name": "Chris Bosh",
        "position": "C",
        "number": "1",
        "salary": 17545000,
        "onRoster": true
      },
      {
        "id": "mario-chalmers",
        "name": "Mario Chalmers",
        "position": "PG",
        "number": "15",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "norris-cole",
        "name": "Norris Cole",
        "position": "PG",
        "number": "30",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "josh-harrellson",
        "name": "Josh Harrellson",
        "position": "C",
        "number": "55",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "terrel-harris",
        "name": "Terrel Harris",
        "position": "SG",
        "number": "14",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "udonis-haslem",
        "name": "Udonis Haslem",
        "position": "PF",
        "number": "40",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "juwan-howard",
        "name": "Juwan Howard",
        "position": "PF",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "lebron-james",
        "name": "LeBron James",
        "position": "PF",
        "number": "6",
        "salary": 17545000,
        "onRoster": true
      },
      {
        "id": "james-jones",
        "name": "James Jones",
        "position": "SF",
        "number": "22",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "rashard-lewis",
        "name": "Rashard Lewis",
        "position": "PF",
        "number": "9",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "mike-miller",
        "name": "Mike Miller",
        "position": "SF",
        "number": "13",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "dexter-pittman",
        "name": "Dexter Pittman",
        "position": "C",
        "number": "45",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "jarvis-varnado",
        "name": "Jarvis Varnado",
        "position": "PF",
        "number": "24",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "dwyane-wade",
        "name": "Dwyane Wade",
        "position": "SG",
        "number": "3",
        "salary": 17182000,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2011–12",
    "team": "Miami Heat",
    "abbr": "MIA",
    "endYear": 2012,
    "coach": "Erik Spoelstra",
    "executive": "Pat Riley",
    "arena": "AmericanAirlines Arena",
    "attendance": 657855,
    "attendanceRank": "4th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/MIA/2012.html",
    "salarySource": {
      "label": "HoopsHype player salary pages",
      "url": "https://www.hoopshype.com/salaries/players/chris-bosh/172631/"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "joel-anthony",
        "name": "Joel Anthony",
        "position": "C",
        "number": "50",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "shane-battier",
        "name": "Shane Battier",
        "position": "SF",
        "number": "31",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "chris-bosh",
        "name": "Chris Bosh",
        "position": "PF",
        "number": "1",
        "salary": 16022500,
        "onRoster": true
      },
      {
        "id": "mario-chalmers",
        "name": "Mario Chalmers",
        "position": "PG",
        "number": "15",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "norris-cole",
        "name": "Norris Cole",
        "position": "PG",
        "number": "30",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "eddy-curry",
        "name": "Eddy Curry",
        "position": "C",
        "number": "34",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "mickell-gladness",
        "name": "Mickell Gladness",
        "position": "PF",
        "number": "32",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "terrel-harris",
        "name": "Terrel Harris",
        "position": "SG",
        "number": "14",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "udonis-haslem",
        "name": "Udonis Haslem",
        "position": "PF",
        "number": "40",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "juwan-howard",
        "name": "Juwan Howard",
        "position": "PF",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "lebron-james",
        "name": "LeBron James",
        "position": "SF",
        "number": "6",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "james-jones",
        "name": "James Jones",
        "position": "SG",
        "number": "22",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "mike-miller",
        "name": "Mike Miller",
        "position": "SG",
        "number": "13",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "dexter-pittman",
        "name": "Dexter Pittman",
        "position": "C",
        "number": "45",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "ronny-turiaf",
        "name": "Ronny Turiaf",
        "position": "C",
        "number": "21",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "dwyane-wade",
        "name": "Dwyane Wade",
        "position": "SG",
        "number": "3",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2010–11",
    "team": "Dallas Mavericks",
    "abbr": "DAL",
    "endYear": 2011,
    "coach": "Rick Carlisle",
    "executive": "Donn Nelson",
    "arena": "American Airlines Center",
    "attendance": 824162,
    "attendanceRank": "4th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/DAL/2011.html",
    "salarySource": {
      "label": "HoopsHype team & player salary pages",
      "url": "https://www.hoopshype.com/salaries/teams/dallas-mavericks/6/?season=2010"
    },
    "payrollStatus": "partial",
    "reportedPayroll": {
      "amount": 85409890,
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/dallas-mavericks/6/?season=2010"
    },
    "players": [
      {
        "id": "alexis-ajinca",
        "name": "Alexis Ajinça",
        "position": "C",
        "number": "8",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "j-j-barea",
        "name": "J.J. Barea",
        "position": "PG",
        "number": "11",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "rodrigue-beaubois",
        "name": "Rodrigue Beaubois",
        "position": "PG",
        "number": "3",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "corey-brewer",
        "name": "Corey Brewer",
        "position": "SG",
        "number": "13",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "caron-butler",
        "name": "Caron Butler",
        "position": "SF",
        "number": "4",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "brian-cardinal",
        "name": "Brian Cardinal",
        "position": "SF",
        "number": "35",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "tyson-chandler",
        "name": "Tyson Chandler",
        "position": "C",
        "number": "6",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "brendan-haywood",
        "name": "Brendan Haywood",
        "position": "C",
        "number": "33",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "dominique-jones",
        "name": "Dominique Jones",
        "position": "SG",
        "number": "20",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "jason-kidd",
        "name": "Jason Kidd",
        "position": "PG",
        "number": "2",
        "salary": 8610500,
        "onRoster": true
      },
      {
        "id": "ian-mahinmi",
        "name": "Ian Mahinmi",
        "position": "C",
        "number": "28",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "shawn-marion",
        "name": "Shawn Marion",
        "position": "SF",
        "number": "0",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "steve-novak",
        "name": "Steve Novak",
        "position": "SF",
        "number": "21",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "dirk-nowitzki",
        "name": "Dirk Nowitzki",
        "position": "PF",
        "number": "41",
        "salary": 17278618,
        "onRoster": true
      },
      {
        "id": "sasha-pavlovic",
        "name": "Sasha Pavlović",
        "position": "SF",
        "number": "7",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "deshawn-stevenson",
        "name": "DeShawn Stevenson",
        "position": "SG",
        "number": "92",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "peja-stojakovic",
        "name": "Peja Stojaković",
        "position": "SF",
        "number": "16",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "jason-terry",
        "name": "Jason Terry",
        "position": "SG",
        "number": "31",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2009–10",
    "team": "Los Angeles Lakers",
    "abbr": "LAL",
    "endYear": 2010,
    "coach": "Phil Jackson",
    "executive": "Mitch Kupchak",
    "arena": "STAPLES Center",
    "attendance": 778877,
    "attendanceRank": "7th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/LAL/2010.html",
    "salarySource": {
      "label": "HoopsHype player salary pages",
      "url": "https://www.hoopshype.com/salaries/players/andrew-bynum/292387/"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "shannon-brown",
        "name": "Shannon Brown",
        "position": "SG",
        "number": "12",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "kobe-bryant",
        "name": "Kobe Bryant",
        "position": "SG",
        "number": "24",
        "salary": 23034375,
        "onRoster": true
      },
      {
        "id": "andrew-bynum",
        "name": "Andrew Bynum",
        "position": "C",
        "number": "17",
        "salary": 12526998,
        "onRoster": true
      },
      {
        "id": "jordan-farmar",
        "name": "Jordan Farmar",
        "position": "PG",
        "number": "1",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "derek-fisher",
        "name": "Derek Fisher",
        "position": "PG",
        "number": "2",
        "salary": 5048000,
        "onRoster": true
      },
      {
        "id": "pau-gasol",
        "name": "Pau Gasol",
        "position": "C",
        "number": "16",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "d-j-mbenga",
        "name": "D.J. Mbenga",
        "position": "C",
        "number": "28",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "adam-morrison",
        "name": "Adam Morrison",
        "position": "SF",
        "number": "6",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "lamar-odom",
        "name": "Lamar Odom",
        "position": "PF",
        "number": "7",
        "salary": 7500000,
        "onRoster": true
      },
      {
        "id": "josh-powell",
        "name": "Josh Powell",
        "position": "PF",
        "number": "21",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "sasha-vujacic",
        "name": "Sasha Vujačić",
        "position": "SG",
        "number": "18",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "luke-walton",
        "name": "Luke Walton",
        "position": "SF",
        "number": "4",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "metta-world-peace",
        "name": "Metta World Peace",
        "position": "SF",
        "number": "37",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2008–09",
    "team": "Los Angeles Lakers",
    "abbr": "LAL",
    "endYear": 2009,
    "coach": "Phil Jackson",
    "executive": "Mitch Kupchak",
    "arena": "STAPLES Center",
    "attendance": 778877,
    "attendanceRank": "8th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/LAL/2009.html",
    "salarySource": {
      "label": "HoopsHype player salary pages",
      "url": "https://www.hoopshype.com/salaries/players/pau-gasol/3494/"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "trevor-ariza",
        "name": "Trevor Ariza",
        "position": "SF",
        "number": "3",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "shannon-brown",
        "name": "Shannon Brown",
        "position": "SG",
        "number": "12",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "kobe-bryant",
        "name": "Kobe Bryant",
        "position": "SG",
        "number": "24",
        "salary": 21262500,
        "onRoster": true
      },
      {
        "id": "andrew-bynum",
        "name": "Andrew Bynum",
        "position": "C",
        "number": "17",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "jordan-farmar",
        "name": "Jordan Farmar",
        "position": "PG",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "derek-fisher",
        "name": "Derek Fisher",
        "position": "PG",
        "number": "2",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "pau-gasol",
        "name": "Pau Gasol",
        "position": "C",
        "number": "16",
        "salary": 15106000,
        "onRoster": true
      },
      {
        "id": "d-j-mbenga",
        "name": "D.J. Mbenga",
        "position": "C",
        "number": "28",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "chris-mihm",
        "name": "Chris Mihm",
        "position": "C",
        "number": "31",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "adam-morrison",
        "name": "Adam Morrison",
        "position": "SF",
        "number": "6",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "lamar-odom",
        "name": "Lamar Odom",
        "position": "PF",
        "number": "7",
        "salary": 14148596,
        "onRoster": true
      },
      {
        "id": "josh-powell",
        "name": "Josh Powell",
        "position": "PF",
        "number": "21",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "vladimir-radmanovic",
        "name": "Vladimir Radmanović",
        "position": "SF",
        "number": "10",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "sasha-vujacic",
        "name": "Sasha Vujačić",
        "position": "SG",
        "number": "18",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "luke-walton",
        "name": "Luke Walton",
        "position": "SF",
        "number": "4",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "sun-yue",
        "name": "Sun Yue",
        "position": "SG",
        "number": "9",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2007–08",
    "team": "Boston Celtics",
    "abbr": "BOS",
    "endYear": 2008,
    "coach": "Doc Rivers",
    "executive": "Danny Ainge",
    "arena": "TD Banknorth Garden",
    "attendance": 763584,
    "attendanceRank": "12th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/BOS/2008.html",
    "salarySource": {
      "label": "HoopsHype player salary pages",
      "url": "https://www.hoopshype.com/salaries/players/kevin-garnett/2989/"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "ray-allen",
        "name": "Ray Allen",
        "position": "SG",
        "number": "20",
        "salary": 16000000,
        "onRoster": true
      },
      {
        "id": "tony-allen",
        "name": "Tony Allen",
        "position": "SG",
        "number": "42",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "p-j-brown",
        "name": "P.J. Brown",
        "position": "PF",
        "number": "93",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "sam-cassell",
        "name": "Sam Cassell",
        "position": "PG",
        "number": "28",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "glen-davis",
        "name": "Glen Davis",
        "position": "C",
        "number": "11",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "kevin-garnett",
        "name": "Kevin Garnett",
        "position": "PF",
        "number": "5",
        "salary": 23750000,
        "onRoster": true
      },
      {
        "id": "eddie-house",
        "name": "Eddie House",
        "position": "PG",
        "number": "50",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "kendrick-perkins",
        "name": "Kendrick Perkins",
        "position": "C",
        "number": "43",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "paul-pierce",
        "name": "Paul Pierce",
        "position": "SF",
        "number": "34",
        "salary": 16360094,
        "onRoster": true
      },
      {
        "id": "scot-pollard",
        "name": "Scot Pollard",
        "position": "C",
        "number": "66",
        "salary": 1219590,
        "onRoster": true
      },
      {
        "id": "james-posey",
        "name": "James Posey",
        "position": "PF",
        "number": "41",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "leon-powe",
        "name": "Leon Powe",
        "position": "C",
        "number": "0",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "gabe-pruitt",
        "name": "Gabe Pruitt",
        "position": "PG",
        "number": "13",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "rajon-rondo",
        "name": "Rajon Rondo",
        "position": "PG",
        "number": "9",
        "salary": 1229280,
        "onRoster": true
      },
      {
        "id": "brian-scalabrine",
        "name": "Brian Scalabrine",
        "position": "PF",
        "number": "44",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2006–07",
    "team": "San Antonio Spurs",
    "abbr": "SAS",
    "endYear": 2007,
    "coach": "Gregg Popovich",
    "executive": "R.C. Buford",
    "arena": "AT&T Center",
    "attendance": 764823,
    "attendanceRank": "9th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/SAS/2007.html",
    "salarySource": {
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/san-antonio-spurs/24/?season=2006"
    },
    "payrollStatus": "complete",
    "reportedPayroll": {
      "amount": 65654320,
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/san-antonio-spurs/24/?season=2006"
    },
    "players": [
      {
        "id": "brent-barry",
        "name": "Brent Barry",
        "position": "SG",
        "number": "17",
        "salary": 5117880,
        "onRoster": true
      },
      {
        "id": "matt-bonner",
        "name": "Matt Bonner",
        "position": "PF",
        "number": "15",
        "salary": 2000000,
        "onRoster": true
      },
      {
        "id": "bruce-bowen",
        "name": "Bruce Bowen",
        "position": "SF",
        "number": "12",
        "salary": 3750000,
        "onRoster": true
      },
      {
        "id": "jackie-butler",
        "name": "Jackie Butler",
        "position": "C",
        "number": "45",
        "salary": 2200000,
        "onRoster": true
      },
      {
        "id": "tim-duncan",
        "name": "Tim Duncan",
        "position": "C",
        "number": "21",
        "salary": 17429672,
        "onRoster": true
      },
      {
        "id": "francisco-elson",
        "name": "Francisco Elson",
        "position": "C",
        "number": "16",
        "salary": 3000000,
        "onRoster": true
      },
      {
        "id": "melvin-ely",
        "name": "Melvin Ely",
        "position": "C",
        "number": "2",
        "salary": 3303813,
        "onRoster": true
      },
      {
        "id": "michael-finley",
        "name": "Michael Finley",
        "position": "SF",
        "number": "4",
        "salary": 2889000,
        "onRoster": true
      },
      {
        "id": "manu-ginobili",
        "name": "Manu Ginóbili",
        "position": "SG",
        "number": "20",
        "salary": 8254375,
        "onRoster": true
      },
      {
        "id": "robert-horry",
        "name": "Robert Horry",
        "position": "PF",
        "number": "5",
        "salary": 3315000,
        "onRoster": true
      },
      {
        "id": "fabricio-oberto",
        "name": "Fabricio Oberto",
        "position": "C",
        "number": "7",
        "salary": 2500000,
        "onRoster": true
      },
      {
        "id": "tony-parker",
        "name": "Tony Parker",
        "position": "PG",
        "number": "9",
        "salary": 9450000,
        "onRoster": true
      },
      {
        "id": "beno-udrih",
        "name": "Beno Udrih",
        "position": "PG",
        "number": "14",
        "salary": 967920,
        "onRoster": true
      },
      {
        "id": "jacque-vaughn",
        "name": "Jacque Vaughn",
        "position": "PG",
        "number": "11",
        "salary": 1071225,
        "onRoster": true
      },
      {
        "id": "james-white",
        "name": "James White",
        "position": "SG",
        "number": "33",
        "salary": 405435,
        "onRoster": true
      },
      {
        "id": "eric-williams",
        "name": "Eric Williams",
        "position": "SF",
        "number": "55",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2005–06",
    "team": "Miami Heat",
    "abbr": "MIA",
    "endYear": 2006,
    "coach": "Stan Van Gundy / Pat Riley",
    "executive": "Randy Pfund",
    "arena": "AmericanAirlines Arena",
    "attendance": 818149,
    "attendanceRank": "4th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/MIA/2006.html",
    "salarySource": {
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/miami-heat/14/?season=2005"
    },
    "payrollStatus": "complete",
    "reportedPayroll": {
      "amount": 60732452,
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/miami-heat/14/?season=2005"
    },
    "players": [
      {
        "id": "derek-anderson",
        "name": "Derek Anderson",
        "position": "SG",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "shandon-anderson",
        "name": "Shandon Anderson",
        "position": "SF",
        "number": "49",
        "salary": 1035000,
        "onRoster": true
      },
      {
        "id": "earl-barron",
        "name": "Earl Barron",
        "position": "C",
        "number": "30",
        "salary": 398762,
        "onRoster": true
      },
      {
        "id": "michael-doleac",
        "name": "Michael Doleac",
        "position": "C",
        "number": "51",
        "salary": 2640000,
        "onRoster": true
      },
      {
        "id": "gerald-fitch",
        "name": "Gerald Fitch",
        "position": "PG",
        "number": "4",
        "salary": 359858,
        "onRoster": true
      },
      {
        "id": "udonis-haslem",
        "name": "Udonis Haslem",
        "position": "PF",
        "number": "40",
        "salary": 5000000,
        "onRoster": true
      },
      {
        "id": "jason-kapono",
        "name": "Jason Kapono",
        "position": "SF",
        "number": "24",
        "salary": 1100000,
        "onRoster": true
      },
      {
        "id": "alonzo-mourning",
        "name": "Alonzo Mourning",
        "position": "C",
        "number": "33",
        "salary": 1138500,
        "onRoster": true
      },
      {
        "id": "shaquille-o-neal",
        "name": "Shaquille O'Neal",
        "position": "C",
        "number": "32",
        "salary": 20000000,
        "onRoster": true
      },
      {
        "id": "gary-payton",
        "name": "Gary Payton",
        "position": "PG",
        "number": "20",
        "salary": 1138500,
        "onRoster": true
      },
      {
        "id": "james-posey",
        "name": "James Posey",
        "position": "SF",
        "number": "42",
        "salary": 5900400,
        "onRoster": true
      },
      {
        "id": "wayne-simien",
        "name": "Wayne Simien",
        "position": "PF",
        "number": "25",
        "salary": 867720,
        "onRoster": true
      },
      {
        "id": "dwyane-wade",
        "name": "Dwyane Wade",
        "position": "SG",
        "number": "3",
        "salary": 3031920,
        "onRoster": true
      },
      {
        "id": "antoine-walker",
        "name": "Antoine Walker",
        "position": "PF",
        "number": "8",
        "salary": 6880000,
        "onRoster": true
      },
      {
        "id": "matt-walsh",
        "name": "Matt Walsh",
        "position": "SG",
        "number": "44",
        "salary": 38904,
        "onRoster": true
      },
      {
        "id": "jason-williams",
        "name": "Jason Williams",
        "position": "PG",
        "number": "55",
        "salary": 7562500,
        "onRoster": true
      },
      {
        "id": "dorell-wright",
        "name": "Dorell Wright",
        "position": "SF",
        "number": "1",
        "salary": 1238640,
        "onRoster": true
      },
      {
        "id": "wesley-person",
        "name": "Wesley Person",
        "position": "",
        "number": "",
        "salary": 1760000,
        "onRoster": false
      },
      {
        "id": "andre-emmett",
        "name": "Andre Emmett",
        "position": "",
        "number": "",
        "salary": 641748,
        "onRoster": false
      }
    ]
  },
  {
    "season": "2004–05",
    "team": "San Antonio Spurs",
    "abbr": "SAS",
    "endYear": 2005,
    "coach": "Gregg Popovich",
    "executive": "R.C. Buford",
    "arena": "SBC Center",
    "attendance": 750970,
    "attendanceRank": "9th of 30",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/SAS/2005.html",
    "salarySource": {
      "label": "HoopsHype player salary pages",
      "url": "https://www.hoopshype.com/salaries/players/tim-duncan/3155/"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "brent-barry",
        "name": "Brent Barry",
        "position": "SG",
        "number": "17",
        "salary": 4264900,
        "onRoster": true
      },
      {
        "id": "bruce-bowen",
        "name": "Bruce Bowen",
        "position": "SF",
        "number": "12",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "devin-brown",
        "name": "Devin Brown",
        "position": "SG",
        "number": "23",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "tim-duncan",
        "name": "Tim Duncan",
        "position": "PF",
        "number": "21",
        "salary": 14260641,
        "onRoster": true
      },
      {
        "id": "manu-ginobili",
        "name": "Manu Ginóbili",
        "position": "SG",
        "number": "20",
        "salary": 6603500,
        "onRoster": true
      },
      {
        "id": "dion-glover",
        "name": "Dion Glover",
        "position": "SG",
        "number": "1",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "robert-horry",
        "name": "Robert Horry",
        "position": "PF",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "linton-johnson",
        "name": "Linton Johnson",
        "position": "SF",
        "number": "43",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "sean-marks",
        "name": "Sean Marks",
        "position": "PF",
        "number": "4",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "tony-massenburg",
        "name": "Tony Massenburg",
        "position": "PF",
        "number": "34",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "nazr-mohammed",
        "name": "Nazr Mohammed",
        "position": "C",
        "number": "2",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "rasho-nesterovic",
        "name": "Rasho Nesterović",
        "position": "C",
        "number": "8",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "tony-parker",
        "name": "Tony Parker",
        "position": "PG",
        "number": "9",
        "salary": 1545441,
        "onRoster": true
      },
      {
        "id": "glenn-robinson",
        "name": "Glenn Robinson",
        "position": "SF",
        "number": "3",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "malik-rose",
        "name": "Malik Rose",
        "position": "PF",
        "number": "31",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "beno-udrih",
        "name": "Beno Udrih",
        "position": "PG",
        "number": "14",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "mike-wilks",
        "name": "Mike Wilks",
        "position": "PG",
        "number": "11",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2003–04",
    "team": "Detroit Pistons",
    "abbr": "DET",
    "endYear": 2004,
    "coach": "Larry Brown",
    "executive": "Joe Dumars",
    "arena": "The Palace of Auburn Hills",
    "attendance": 872902,
    "attendanceRank": "1st of 29",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/DET/2004.html",
    "salarySource": {
      "label": "HoopsHype player salary pages & 2004 Finals salary list",
      "url": "https://hoopshype.com/lists/the-highest-paid-players-of-each-nba-finals"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "chucky-atkins",
        "name": "Chucky Atkins",
        "position": "PG",
        "number": "7",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "chauncey-billups",
        "name": "Chauncey Billups",
        "position": "PG",
        "number": "1",
        "salary": 5000600,
        "onRoster": true
      },
      {
        "id": "elden-campbell",
        "name": "Elden Campbell",
        "position": "C",
        "number": "41",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "hubert-davis",
        "name": "Hubert Davis",
        "position": "SG",
        "number": "44",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "tremaine-fowlkes",
        "name": "Tremaine Fowlkes",
        "position": "SF",
        "number": "24",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "darvin-ham",
        "name": "Darvin Ham",
        "position": "SF",
        "number": "8",
        "salary": 813679,
        "onRoster": true
      },
      {
        "id": "richard-hamilton",
        "name": "Richard Hamilton",
        "position": "SG",
        "number": "32",
        "salary": 6500000,
        "onRoster": true
      },
      {
        "id": "lindsey-hunter",
        "name": "Lindsey Hunter",
        "position": "SG",
        "number": "10",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "mike-james",
        "name": "Mike James",
        "position": "PG",
        "number": "7",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "darko-milicic",
        "name": "Darko Miličić",
        "position": "C",
        "number": "31",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "mehmet-okur",
        "name": "Mehmet Okur",
        "position": "PF",
        "number": "13",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "tayshaun-prince",
        "name": "Tayshaun Prince",
        "position": "SF",
        "number": "22",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "zeljko-rebraca",
        "name": "Željko Rebrača",
        "position": "C",
        "number": "39",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "bob-sura",
        "name": "Bob Sura",
        "position": "SG",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "ben-wallace",
        "name": "Ben Wallace",
        "position": "C",
        "number": "3",
        "salary": 5500000,
        "onRoster": true
      },
      {
        "id": "rasheed-wallace",
        "name": "Rasheed Wallace",
        "position": "PF",
        "number": "30",
        "salary": 17000000,
        "onRoster": true
      },
      {
        "id": "corliss-williamson",
        "name": "Corliss Williamson",
        "position": "PF",
        "number": "34",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2002–03",
    "team": "San Antonio Spurs",
    "abbr": "SAS",
    "endYear": 2003,
    "coach": "Gregg Popovich",
    "executive": "R.C. Buford",
    "arena": "SBC Center",
    "attendance": 735970,
    "attendanceRank": "11th of 29",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/SAS/2003.html",
    "salarySource": {
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/san-antonio-spurs/24/?season=2002"
    },
    "payrollStatus": "complete",
    "reportedPayroll": {
      "amount": 53182559,
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/san-antonio-spurs/24/?season=2002"
    },
    "players": [
      {
        "id": "mengke-bateer",
        "name": "Mengke Bateer",
        "position": "C",
        "number": "34",
        "salary": 512453,
        "onRoster": true
      },
      {
        "id": "bruce-bowen",
        "name": "Bruce Bowen",
        "position": "SF",
        "number": "12",
        "salary": 3550000,
        "onRoster": true
      },
      {
        "id": "devin-brown",
        "name": "Devin Brown",
        "position": "SG",
        "number": "23",
        "salary": 34946,
        "onRoster": true
      },
      {
        "id": "speedy-claxton",
        "name": "Speedy Claxton",
        "position": "PG",
        "number": "10",
        "salary": 1076400,
        "onRoster": true
      },
      {
        "id": "tim-duncan",
        "name": "Tim Duncan",
        "position": "PF",
        "number": "21",
        "salary": 12072500,
        "onRoster": true
      },
      {
        "id": "danny-ferry",
        "name": "Danny Ferry",
        "position": "SF",
        "number": "35",
        "salary": 4546000,
        "onRoster": true
      },
      {
        "id": "manu-ginobili",
        "name": "Manu Ginóbili",
        "position": "SG",
        "number": "20",
        "salary": 1325000,
        "onRoster": true
      },
      {
        "id": "anthony-goldwire",
        "name": "Anthony Goldwire",
        "position": "PG",
        "number": "5",
        "salary": 139925,
        "onRoster": true
      },
      {
        "id": "stephen-jackson",
        "name": "Stephen Jackson",
        "position": "SG",
        "number": "3",
        "salary": 699935,
        "onRoster": true
      },
      {
        "id": "steve-kerr",
        "name": "Steve Kerr",
        "position": "PG",
        "number": "25",
        "salary": 2625000,
        "onRoster": true
      },
      {
        "id": "tony-parker",
        "name": "Tony Parker",
        "position": "PG",
        "number": "9",
        "salary": 800400,
        "onRoster": true
      },
      {
        "id": "david-robinson",
        "name": "David Robinson",
        "position": "C",
        "number": "50",
        "salary": 10500000,
        "onRoster": true
      },
      {
        "id": "malik-rose",
        "name": "Malik Rose",
        "position": "PF",
        "number": "31",
        "salary": 4370000,
        "onRoster": true
      },
      {
        "id": "steve-smith",
        "name": "Steve Smith",
        "position": "SG",
        "number": "8",
        "salary": 9900000,
        "onRoster": true
      },
      {
        "id": "kevin-willis",
        "name": "Kevin Willis",
        "position": "C",
        "number": "42",
        "salary": 1030000,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2001–02",
    "team": "Los Angeles Lakers",
    "abbr": "LAL",
    "endYear": 2002,
    "coach": "Phil Jackson",
    "executive": "Mitch Kupchak",
    "arena": "STAPLES Center",
    "attendance": 778777,
    "attendanceRank": "8th of 29",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/LAL/2002.html",
    "salarySource": {
      "label": "HoopsHype player salary pages",
      "url": "https://www.hoopshype.com/salaries/players/kobe-bryant/3100/"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "kobe-bryant",
        "name": "Kobe Bryant",
        "position": "SG",
        "number": "8",
        "salary": 11250000,
        "onRoster": true
      },
      {
        "id": "joe-crispin",
        "name": "Joe Crispin",
        "position": "PG",
        "number": "11",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "derek-fisher",
        "name": "Derek Fisher",
        "position": "PG",
        "number": "2",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "rick-fox",
        "name": "Rick Fox",
        "position": "SF",
        "number": "17",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "devean-george",
        "name": "Devean George",
        "position": "SF",
        "number": "3",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "robert-horry",
        "name": "Robert Horry",
        "position": "PF",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "lindsey-hunter",
        "name": "Lindsey Hunter",
        "position": "PG",
        "number": "10",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "mark-madsen",
        "name": "Mark Madsen",
        "position": "PF",
        "number": "35",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "jelani-mccoy",
        "name": "Jelani McCoy",
        "position": "C",
        "number": "6",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "stanislav-medvedenko",
        "name": "Stanislav Medvedenko",
        "position": "C",
        "number": "14",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "shaquille-o-neal",
        "name": "Shaquille O'Neal",
        "position": "C",
        "number": "34",
        "salary": 21428572,
        "onRoster": true
      },
      {
        "id": "mike-penberthy",
        "name": "Mike Penberthy",
        "position": "PG",
        "number": "12",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "mitch-richmond",
        "name": "Mitch Richmond",
        "position": "SG",
        "number": "23",
        "salary": 1000000,
        "onRoster": true
      },
      {
        "id": "brian-shaw",
        "name": "Brian Shaw",
        "position": "PG",
        "number": "20",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "samaki-walker",
        "name": "Samaki Walker",
        "position": "PF",
        "number": "52",
        "salary": 1400000,
        "onRoster": true
      }
    ]
  },
  {
    "season": "2000–01",
    "team": "Los Angeles Lakers",
    "abbr": "LAL",
    "endYear": 2001,
    "coach": "Phil Jackson",
    "executive": "Mitch Kupchak",
    "arena": "STAPLES Center",
    "attendance": 776336,
    "attendanceRank": "8th of 29",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/LAL/2001.html",
    "salarySource": {
      "label": "HoopsHype player salary pages",
      "url": "https://www.hoopshype.com/salaries/players/shaquille-oneal/847/"
    },
    "payrollStatus": "partial",
    "reportedPayroll": null,
    "players": [
      {
        "id": "kobe-bryant",
        "name": "Kobe Bryant",
        "position": "SG",
        "number": "8",
        "salary": 10130000,
        "onRoster": true
      },
      {
        "id": "derek-fisher",
        "name": "Derek Fisher",
        "position": "PG",
        "number": "2",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "greg-foster",
        "name": "Greg Foster",
        "position": "C",
        "number": "40",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "rick-fox",
        "name": "Rick Fox",
        "position": "SF",
        "number": "17",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "devean-george",
        "name": "Devean George",
        "position": "SF",
        "number": "3",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "horace-grant",
        "name": "Horace Grant",
        "position": "PF",
        "number": "54",
        "salary": 6500000,
        "onRoster": true
      },
      {
        "id": "ron-harper",
        "name": "Ron Harper",
        "position": "PG",
        "number": "4",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "robert-horry",
        "name": "Robert Horry",
        "position": "PF",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "tyronn-lue",
        "name": "Tyronn Lue",
        "position": "PG",
        "number": "10",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "mark-madsen",
        "name": "Mark Madsen",
        "position": "PF",
        "number": "35",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "stanislav-medvedenko",
        "name": "Stanislav Medvedenko",
        "position": "PF",
        "number": "14",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "shaquille-o-neal",
        "name": "Shaquille O'Neal",
        "position": "C",
        "number": "34",
        "salary": 19285715,
        "onRoster": true
      },
      {
        "id": "mike-penberthy",
        "name": "Mike Penberthy",
        "position": "PG",
        "number": "12",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "isaiah-rider",
        "name": "Isaiah Rider",
        "position": "SG",
        "number": "7",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "brian-shaw",
        "name": "Brian Shaw",
        "position": "SG",
        "number": "20",
        "salary": null,
        "onRoster": true
      }
    ]
  },
  {
    "season": "1999–00",
    "team": "Los Angeles Lakers",
    "abbr": "LAL",
    "endYear": 2000,
    "coach": "Phil Jackson",
    "executive": "Jerry West",
    "arena": "STAPLES Center",
    "attendance": 771420,
    "attendanceRank": "7th of 29",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/LAL/2000.html",
    "salarySource": {
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/los-angeles-lakers/13/?season=1999"
    },
    "payrollStatus": "complete",
    "reportedPayroll": {
      "amount": 55018533,
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/los-angeles-lakers/13/?season=1999"
    },
    "players": [
      {
        "id": "kobe-bryant",
        "name": "Kobe Bryant",
        "position": "SG",
        "number": "8",
        "salary": 9000000,
        "onRoster": true
      },
      {
        "id": "john-celestand",
        "name": "John Celestand",
        "position": "PG",
        "number": "11",
        "salary": 301875,
        "onRoster": true
      },
      {
        "id": "derek-fisher",
        "name": "Derek Fisher",
        "position": "PG",
        "number": "2",
        "salary": 3000000,
        "onRoster": true
      },
      {
        "id": "rick-fox",
        "name": "Rick Fox",
        "position": "SF",
        "number": "17",
        "salary": 3033000,
        "onRoster": true
      },
      {
        "id": "devean-george",
        "name": "Devean George",
        "position": "SF",
        "number": "3",
        "salary": 790440,
        "onRoster": true
      },
      {
        "id": "a-c-green",
        "name": "A.C. Green",
        "position": "PF",
        "number": "45",
        "salary": 1700000,
        "onRoster": true
      },
      {
        "id": "ron-harper",
        "name": "Ron Harper",
        "position": "PG",
        "number": "4",
        "salary": 2000000,
        "onRoster": true
      },
      {
        "id": "robert-horry",
        "name": "Robert Horry",
        "position": "PF",
        "number": "5",
        "salary": 4800000,
        "onRoster": true
      },
      {
        "id": "sam-jacobson",
        "name": "Sam Jacobson",
        "position": "PG",
        "number": "7",
        "salary": 721080,
        "onRoster": true
      },
      {
        "id": "travis-knight",
        "name": "Travis Knight",
        "position": "C",
        "number": "40",
        "salary": 2800000,
        "onRoster": true
      },
      {
        "id": "tyronn-lue",
        "name": "Tyronn Lue",
        "position": "PG",
        "number": "10",
        "salary": 809280,
        "onRoster": true
      },
      {
        "id": "shaquille-o-neal",
        "name": "Shaquille O'Neal",
        "position": "C",
        "number": "34",
        "salary": 17142858,
        "onRoster": true
      },
      {
        "id": "glen-rice",
        "name": "Glen Rice",
        "position": "SF",
        "number": "41",
        "salary": 7000000,
        "onRoster": true
      },
      {
        "id": "john-salley",
        "name": "John Salley",
        "position": "C",
        "number": "16",
        "salary": 510000,
        "onRoster": true
      },
      {
        "id": "brian-shaw",
        "name": "Brian Shaw",
        "position": "SG",
        "number": "20",
        "salary": 510000,
        "onRoster": true
      },
      {
        "id": "byron-scott",
        "name": "Byron Scott",
        "position": "",
        "number": "",
        "salary": 510000,
        "onRoster": false
      },
      {
        "id": "shea-seals",
        "name": "Shea Seals",
        "position": "",
        "number": "",
        "salary": 385000,
        "onRoster": false
      },
      {
        "id": "andy-panko",
        "name": "Andy Panko",
        "position": "",
        "number": "",
        "salary": 5000,
        "onRoster": false
      }
    ]
  },
  {
    "season": "1998–99",
    "team": "San Antonio Spurs",
    "abbr": "SAS",
    "endYear": 1999,
    "coach": "Gregg Popovich",
    "executive": "Gregg Popovich",
    "arena": "Alamodome",
    "attendance": 527357,
    "attendanceRank": "2nd of 29",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/SAS/1999.html",
    "salarySource": {
      "label": "HoopsHype team payroll",
      "url": "https://hoopshype.com/salaries/san_antonio_spurs/1998-1999/"
    },
    "payrollStatus": "complete",
    "reportedPayroll": {
      "amount": 43681143,
      "label": "HoopsHype team payroll",
      "url": "https://hoopshype.com/salaries/san_antonio_spurs/1998-1999/"
    },
    "players": [
      {
        "id": "antonio-daniels",
        "name": "Antonio Daniels",
        "position": "PG",
        "number": "33",
        "salary": 2472000,
        "onRoster": true
      },
      {
        "id": "tim-duncan",
        "name": "Tim Duncan",
        "position": "PF",
        "number": "21",
        "salary": 3413000,
        "onRoster": true
      },
      {
        "id": "mario-elie",
        "name": "Mario Elie",
        "position": "SG",
        "number": "17",
        "salary": 1750000,
        "onRoster": true
      },
      {
        "id": "sean-elliott",
        "name": "Sean Elliott",
        "position": "SF",
        "number": "32",
        "salary": 5333000,
        "onRoster": true
      },
      {
        "id": "andrew-gaze",
        "name": "Andrew Gaze",
        "position": "SG",
        "number": "10",
        "salary": 350000,
        "onRoster": true
      },
      {
        "id": "jaren-jackson",
        "name": "Jaren Jackson",
        "position": "SG",
        "number": "2",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "avery-johnson",
        "name": "Avery Johnson",
        "position": "PG",
        "number": "6",
        "salary": 3000000,
        "onRoster": true
      },
      {
        "id": "steve-kerr",
        "name": "Steve Kerr",
        "position": "PG",
        "number": "4",
        "salary": 1774000,
        "onRoster": true
      },
      {
        "id": "jerome-kersey",
        "name": "Jerome Kersey",
        "position": "SF",
        "number": "25",
        "salary": 1000000,
        "onRoster": true
      },
      {
        "id": "gerard-king",
        "name": "Gerard King",
        "position": "SF",
        "number": "54",
        "salary": 287500,
        "onRoster": true
      },
      {
        "id": "will-perdue",
        "name": "Will Perdue",
        "position": "C",
        "number": "41",
        "salary": 4373000,
        "onRoster": true
      },
      {
        "id": "david-robinson",
        "name": "David Robinson",
        "position": "C",
        "number": "50",
        "salary": 14841000,
        "onRoster": true
      },
      {
        "id": "malik-rose",
        "name": "Malik Rose",
        "position": "PF",
        "number": "31",
        "salary": 425000,
        "onRoster": true
      },
      {
        "id": "brandon-williams",
        "name": "Brandon Williams",
        "position": "SG",
        "number": "11",
        "salary": 287500,
        "onRoster": true
      },
      {
        "id": "charles-smith",
        "name": "Charles Smith",
        "position": "",
        "number": "",
        "salary": 4375143,
        "onRoster": false
      }
    ]
  },
  {
    "season": "1997–98",
    "team": "Chicago Bulls",
    "abbr": "CHI",
    "endYear": 1998,
    "coach": "Phil Jackson",
    "executive": "Jerry Krause",
    "arena": "United Center",
    "attendance": 983444,
    "attendanceRank": "1st of 29",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/CHI/1998.html",
    "salarySource": {
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/chicago-bulls/4/?season=1997"
    },
    "payrollStatus": "complete",
    "reportedPayroll": {
      "amount": 61330670,
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/chicago-bulls/4/?season=1997"
    },
    "players": [
      {
        "id": "keith-booth",
        "name": "Keith Booth",
        "position": "SF",
        "number": "22",
        "salary": 597600,
        "onRoster": true
      },
      {
        "id": "randy-brown",
        "name": "Randy Brown",
        "position": "PG",
        "number": "1",
        "salary": 1260000,
        "onRoster": true
      },
      {
        "id": "jud-buechler",
        "name": "Jud Buechler",
        "position": "SF",
        "number": "30",
        "salary": 500000,
        "onRoster": true
      },
      {
        "id": "scott-burrell",
        "name": "Scott Burrell",
        "position": "SF",
        "number": "24",
        "salary": 1430000,
        "onRoster": true
      },
      {
        "id": "jason-caffey",
        "name": "Jason Caffey",
        "position": "PF",
        "number": "35",
        "salary": 850920,
        "onRoster": true
      },
      {
        "id": "ron-harper",
        "name": "Ron Harper",
        "position": "PG",
        "number": "9",
        "salary": 4560000,
        "onRoster": true
      },
      {
        "id": "michael-jordan",
        "name": "Michael Jordan",
        "position": "SG",
        "number": "23",
        "salary": 33140000,
        "onRoster": true
      },
      {
        "id": "steve-kerr",
        "name": "Steve Kerr",
        "position": "PG",
        "number": "25",
        "salary": 750000,
        "onRoster": true
      },
      {
        "id": "joe-kleine",
        "name": "Joe Kleine",
        "position": "C",
        "number": "53",
        "salary": 272250,
        "onRoster": true
      },
      {
        "id": "toni-kukoc",
        "name": "Toni Kukoč",
        "position": "SF",
        "number": "7",
        "salary": 4560000,
        "onRoster": true
      },
      {
        "id": "rusty-larue",
        "name": "Rusty LaRue",
        "position": "PG",
        "number": "5",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "luc-longley",
        "name": "Luc Longley",
        "position": "C",
        "number": "13",
        "salary": 3184900,
        "onRoster": true
      },
      {
        "id": "scottie-pippen",
        "name": "Scottie Pippen",
        "position": "SF",
        "number": "33",
        "salary": 2775000,
        "onRoster": true
      },
      {
        "id": "dennis-rodman",
        "name": "Dennis Rodman",
        "position": "PF",
        "number": "91",
        "salary": 4500000,
        "onRoster": true
      },
      {
        "id": "dickey-simpkins",
        "name": "Dickey Simpkins",
        "position": "PF",
        "number": "8",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "david-vaughn",
        "name": "David Vaughn",
        "position": "PF",
        "number": "42",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "bill-wennington",
        "name": "Bill Wennington",
        "position": "C",
        "number": "34",
        "salary": 1800000,
        "onRoster": true
      },
      {
        "id": "robert-parish",
        "name": "Robert Parish",
        "position": "",
        "number": "",
        "salary": 1150000,
        "onRoster": false
      }
    ]
  },
  {
    "season": "1996–97",
    "team": "Chicago Bulls",
    "abbr": "CHI",
    "endYear": 1997,
    "coach": "Phil Jackson",
    "executive": "Jerry Krause",
    "arena": "United Center",
    "attendance": 978457,
    "attendanceRank": "2nd of 29",
    "attendanceNote": null,
    "rosterSourceUrl": "https://www.basketball-reference.com/teams/CHI/1997.html",
    "salarySource": {
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/chicago-bulls/4/?season=1996"
    },
    "payrollStatus": "complete",
    "reportedPayroll": {
      "amount": 58270000,
      "label": "HoopsHype team payroll",
      "url": "https://www.hoopshype.com/salaries/teams/chicago-bulls/4/?season=1996"
    },
    "players": [
      {
        "id": "randy-brown",
        "name": "Randy Brown",
        "position": "PG",
        "number": "1",
        "salary": 1300000,
        "onRoster": true
      },
      {
        "id": "jud-buechler",
        "name": "Jud Buechler",
        "position": "SF",
        "number": "30",
        "salary": 500000,
        "onRoster": true
      },
      {
        "id": "jason-caffey",
        "name": "Jason Caffey",
        "position": "PF",
        "number": "35",
        "salary": 700000,
        "onRoster": true
      },
      {
        "id": "bison-dele",
        "name": "Bison Dele",
        "position": "C",
        "number": "18",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "ron-harper",
        "name": "Ron Harper",
        "position": "PG",
        "number": "9",
        "salary": 3840000,
        "onRoster": true
      },
      {
        "id": "michael-jordan",
        "name": "Michael Jordan",
        "position": "SG",
        "number": "23",
        "salary": 30140000,
        "onRoster": true
      },
      {
        "id": "steve-kerr",
        "name": "Steve Kerr",
        "position": "PG",
        "number": "25",
        "salary": 750000,
        "onRoster": true
      },
      {
        "id": "toni-kukoc",
        "name": "Toni Kukoč",
        "position": "SF",
        "number": "7",
        "salary": 3960000,
        "onRoster": true
      },
      {
        "id": "luc-longley",
        "name": "Luc Longley",
        "position": "C",
        "number": "13",
        "salary": 2790000,
        "onRoster": true
      },
      {
        "id": "robert-parish",
        "name": "Robert Parish",
        "position": "C",
        "number": "00",
        "salary": 1000000,
        "onRoster": true
      },
      {
        "id": "scottie-pippen",
        "name": "Scottie Pippen",
        "position": "SF",
        "number": "33",
        "salary": 2250000,
        "onRoster": true
      },
      {
        "id": "dennis-rodman",
        "name": "Dennis Rodman",
        "position": "PF",
        "number": "91",
        "salary": 9000000,
        "onRoster": true
      },
      {
        "id": "dickey-simpkins",
        "name": "Dickey Simpkins",
        "position": "PF",
        "number": "8",
        "salary": 1040000,
        "onRoster": true
      },
      {
        "id": "matt-steigenga",
        "name": "Matt Steigenga",
        "position": "SF",
        "number": "6",
        "salary": null,
        "onRoster": true
      },
      {
        "id": "bill-wennington",
        "name": "Bill Wennington",
        "position": "C",
        "number": "34",
        "salary": 1000000,
        "onRoster": true
      }
    ]
  }
]
