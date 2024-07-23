import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb(
    reqInfo?: RequestInfo | undefined
  ): {} | Observable<{}> | Promise<{}> {
    return {
      articles: [
        {
          id: '1',
          title: 'Sample Article',
          author: 'John Doe',
          date: '2022-09-15',
          content: 'This is the content of the article.',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: '2',
          title: 'Sample Article',
          author: 'John Doe',
          date: '2022-09-15',
          content: 'This is the content of the article.',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: '3',
          title: 'Sample Article',
          author: 'John Doe',
          date: '2022-09-15',
          content: 'This is the content of the article.',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: '4',
          title: 'Sample Article',
          author: 'John Doe',
          date: '2022-09-15',
          content: 'This is the content of the article.',
          image: 'https://via.placeholder.com/150',
        },
      ],
      coordonnees: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-22.280849",
              "lng": "166.433937"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
      ],
      resultats: [
        {
          "course": "Scratch Course 1 (14 km)",
          "classement": [
            {
              "position": 1,
              "dossard": "8B",
              "num": 8,
              "equipage": "MD SHELL",
              "categorie": "M50 H",
              "noms": ["PAROTU Laurent", "CLOBER Moïse"],
              "temps": "01:16:31",
              "ecart": ""
            },
            {
              "position": 2,
              "dossard": "19B",
              "num": 9,
              "equipage": "MD SHELL",
              "categorie": "M50 H",
              "noms": ["PARANQUE Régis", "LE POUL Philippe"],
              "temps": "01:20:10",
              "ecart": "00:03:39"
            },
            {
              "position": 3,
              "dossard": "18C",
              "num": 2,
              "equipage": "TUHAA PAE VA'A",
              "categorie": "OPEN F",
              "noms": ["TAVITA Titaina", "TERII Rosemelle"],
              "temps": "01:21:56",
              "ecart": "00:05:25"
            },
            {
              "position": 4,
              "dossard": "7A",
              "num": 5,
              "equipage": "ISLV",
              "categorie": "OPEN F",
              "noms": ["DEVAMBEZ Fabienne", "ROBIN Charlotte"],
              "temps": "01:22:52",
              "ecart": "00:06:21"
            },
            {
              "position": 5,
              "dossard": "21B",
              "num": 7,
              "equipage": "MD SHELL",
              "categorie": "M50 H",
              "noms": ["KAI Jules", "HUGOT Nicolas"],
              "temps": "01:29:46",
              "ecart": "00:13:15"
            },
            {
              "position": 6,
              "dossard": "7B",
              "num": 6,
              "equipage": "ISLV",
              "categorie": "OPEN F",
              "noms": ["TEHEI Manina", "WEJIEME Myriam"],
              "temps": "01:31:38",
              "ecart": "00:15:07"
            },
            {
              "position": 7,
              "dossard": "18D",
              "num": 3,
              "equipage": "TUHAA PAE VA'A",
              "categorie": "OPEN F",
              "noms": ["LESECK Nolwenn", "TAOFIENUA Alexandra"],
              "temps": "01:32:32",
              "ecart": "00:16:01"
            },
            {
              "position": 8,
              "dossard": "12C",
              "num": 6,
              "equipage": "PC DUMBEA",
              "categorie": "J16 G",
              "noms": ["TOMA Franck", "NATUA Nohoarii"],
              "temps": "01:33:13",
              "ecart": "00:16:42"
            },
            {
              "position": 9,
              "dossard": "32A",
              "num": 1,
              "equipage": "TENIA VA'A",
              "categorie": "OPEN F",
              "noms": ["DELIREU Ramona", "TOUAL Sonia"],
              "temps": "01:41:45",
              "ecart": "00:25:14"
            }
          ]
        },
        {
          "course": "Junior 16 (14 km)",
          "classement": [
            {
              "position": 1,
              "dossard": "12C",
              "num": 6,
              "equipage": "PC DUMBEA",
              "categorie": "J16 G",
              "noms": ["TOMA Franck", "NATUA Nohoarii"],
              "temps": "01:33:13",
              "ecart": ""
            }
          ]
        },
        {
          "course": "Open Dames (14 km)",
          "classement": [
            {
              "position": 1,
              "dossard": "18C",
              "num": 2,
              "equipage": "TUHAA PAE VA'A",
              "categorie": "OPEN F",
              "noms": ["TAVITA Titaina", "TERII Rosemelle"],
              "temps": "01:21:56",
              "ecart": ""
            },
            {
              "position": 2,
              "dossard": "7A",
              "num": 5,
              "equipage": "ISLV",
              "categorie": "OPEN F",
              "noms": ["DEVAMBEZ Fabienne", "ROBIN Charlotte"],
              "temps": "01:22:52",
              "ecart": "00:06:21"
            },
            {
              "position": 3,
              "dossard": "7B",
              "num": 6,
              "equipage": "ISLV",
              "categorie": "OPEN F",
              "noms": ["TEHEI Manina", "SIAKINUU Mélénai"],
              "temps": "01:31:38",
              "ecart": "00:15:07"
            },
            {
              "position": 4,
              "dossard": "18D",
              "num": 3,
              "equipage": "TUHAA PAE VA'A",
              "categorie": "OPEN F",
              "noms": ["LESECK Nolwenn", "TAOFIENUA Alexandra"],
              "temps": "01:32:32",
              "ecart": "00:16:01"
            },
            {
              "position": 5,
              "dossard": "32A",
              "num": 1,
              "equipage": "TENIA VA'A",
              "categorie": "OPEN F",
              "noms": ["DELIREU Ramona", "TOUAL Sonia"],
              "temps": "01:41:45",
              "ecart": "00:25:14"
            }
          ]
        }
      ]
    };
  }
}
