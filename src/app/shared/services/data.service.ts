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
          title: 'Championnat de Calédonie Longue Distance V3',
          author: 'John Doe',
          date: '2024-05-04',
          content: 'Podiums et résultats du Championnat de Calédonie Longue Distance V3 Mixte',
          image: 'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/439433511_926870895894359_2345680846958786930_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ar2_g9aETGsQ7kNvgFtJP_Q&_nc_ht=scontent-syd2-1.xx&oh=00_AYB5_CytFn5KHaXg3Ze2ogZvERRo6D9mjN68oFGytswXWg&oe=66AE6E79',
        },
        {
          id: '2',
          title: "Installation du site de compétion pour la 1e course de ligue à l'Anse Vata",
          author: 'John Doe',
          date: '2024-05-04',
          content: "Installation du site de compétion pour la 1e course de ligue à l'Anse Vata: championnat de Calédonie longue distance V3 Mixte (J16 J19 et Open). Merci à SOS Location pour la qualité de leur matériel.",
          image: 'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/438254545_926772669237515_7316847990503459845_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yz16CppQNr4Q7kNvgEXrSrD&_nc_ht=scontent-syd2-1.xx&gid=AJAIUu7dtUgMlDc7J53OCak&oh=00_AYCKR_BQxs2LJxbrs4pe37LLVWHII1Bu8Y7Kd3IeuPe4dQ&oe=66AE898C',
        },
        {
          id: '3',
          title: 'Fin de la visite en Nouvelle Calédonie pour nos responsables de la Fédération Française de Canoë Kayak',
          author: 'John Doe',
          date: '2024-04-22',
          content: "Fin de la visite en Nouvelle Calédonie pour nos responsables de la Fédération Française de Canoë Kayak Jean ZOUNGRANA et Emmanuel GIRARD par un dernier entretien avec Christophe DABIN Président du Comité Territorial Olympique et Sportif de Nouvelle Calédonie. Merci de votre visite en NCL",
          image: 'https://scontent.fnou1-1.fna.fbcdn.net/v/t39.30808-6/438215752_919611883286927_2160655123603906407_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=omuApZGczfUQ7kNvgEG5sRI&_nc_ht=scontent.fnou1-1.fna&oh=00_AYD9DYVmHarM1N1_IQe1dybaFSrpSefPI3nfiyQwcL5dJg&oe=66AE6BD7',
        },
        {
          id: '4',
          title: 'Visite pour nos responsables de la Fédération Française de Canoë Kayak ',
          author: 'John Doe',
          date: '2024-04-22',
          content: 'Visite pour nos responsables de la Fédération Française de Canoë Kayak et entretien avec les Responsables de la Direction Territoriale de la Jeunesse et Sport de Nouvelle Calédonie.',
          image: 'https://scontent.fnou1-1.fna.fbcdn.net/v/t39.30808-6/438198244_919610783287037_1478589118269626567_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GMHyht6UlbQQ7kNvgFecSyH&_nc_ht=scontent.fnou1-1.fna&oh=00_AYCoCiy3VPpMP3atLAYqY5-3xX_y9Gafh4i8Kp8ke-88Hg&oe=66AE748B',
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
          "date": "2024-02-21",
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
          "date": "2024-06-13",
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
          "date": "2023-05-05",
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
      ],
"events": [
    {
        "start": new Date('August 13, 2024 00:00:00'),
        "end": new Date('August 24, 2024 00:00:00'),
        "title": "Championnat du monde",
        "color": "#ad2121",
        "allDay": true,
        "resizable": true,
        "draggable": true,
    },
    {
        "start": new Date('September 1, 2024 00:00:00'),
        "end": new Date('September 7, 2024 00:00:00'),
        "title": "Conférence internationale",
        "color": "#4285f4",
        "allDay": true,
        "resizable": true,
        "draggable": true,
    },
    {
        "start": new Date('October 15, 2024 00:00:00'),
        "end": new Date('October 20, 2024 00:00:00'),
        "title": "Salon professionnel",
        "color": "#f4b442",
        "allDay": true,
        "resizable": true,
        "draggable": true,
    },
    {
        "start": new Date('November 5, 2024 00:00:00'),
        "end": new Date('November 12, 2024 00:00:00'),
        "title": "Formation en ligne",
        "color": "#db44f4",
        "allDay": true,
        "resizable": true,
        "draggable": true,
    }
]

    };
  }
}
