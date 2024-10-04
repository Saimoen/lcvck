export interface Course {
    date: string
    course: string
    classements: Classement[]
  }
  
  export interface Classement {
    position: number
    dossard: string
    num: number
    equipage: string
    categorie: string
    noms: string[]
    temps: string
    ecart: string
  }