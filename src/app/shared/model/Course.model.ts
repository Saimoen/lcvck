export interface Course {
    id: number
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
    nom: string
    temps: string
    ecart: string
  }