export interface Course {
    date: string
    course: string
    classement: Classement[]
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